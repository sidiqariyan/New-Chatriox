const User = require('../models/User');

// Check if user has access to feature based on plan and trial status
const checkFeatureAccess = (feature) => {
  return async (req, res, next) => {
    try {
      const user = await User.findById(req.user.id);
      
      if (!user) {
        return res.status(404).json({
          success: false,
          message: 'User not found'
        });
      }

      // Admins always have access
      if (user.role === 'admin') {
        req.userLimits = { emailsPerMonth: -1, emailAccounts: -1, whatsappAccounts: -1, validation: true, scraper: true, whatsapp: true };
        req.isInTrial = false;
        req.trialDaysRemaining = 0;
        return next();
      }

      const isInTrial = user.isInTrial();
      const isTrialExpired = user.isTrialExpired();
      
      // If trial expired and no active plan
      if (isTrialExpired && user.planStatus !== 'active') {
        return res.status(403).json({
          success: false,
          message: 'Trial period expired. Please upgrade to continue using this feature.',
          trialExpired: true,
          requiresUpgrade: true
        });
      }

      // For now, make all plans and trial limits the same
      const unified = {
        features: {
          emailsPerMonth: -1,
          emailAccounts: -1,
          whatsappAccounts: -1,
          validation: true,
          scraper: true,
          whatsapp: true
        },
        trialLimits: {
          emailsPerMonth: -1,
          emailAccounts: -1,
          whatsappAccounts: -1,
          validation: true,
          scraper: true,
          whatsapp: true
        }
      };

      const PLANS = { starter: unified, professional: unified, enterprise: unified };

      const currentPlan = PLANS[user.plan] || unified;
      const limits = isInTrial ? currentPlan.trialLimits : currentPlan.features;

      // Check specific feature access
      switch (feature) {
        case 'whatsapp':
          if (!limits.whatsapp) {
            return res.status(403).json({
              success: false,
              message: 'Feature not available on your plan.',
              requiresUpgrade: true,
              feature: 'whatsapp'
            });
          }
          break;

        case 'scraper':
          if (!limits.scraper) {
            return res.status(403).json({
              success: false,
              message: 'Feature not available on your plan.',
              requiresUpgrade: true,
              feature: 'scraper'
            });
          }
          break;

        case 'email_sending':
          if (limits.emailsPerMonth !== -1 && user.usage.emailsSent >= limits.emailsPerMonth) {
            return res.status(403).json({
              success: false,
              message: `Monthly email limit reached (${limits.emailsPerMonth}). Please upgrade for higher limits.`,
              requiresUpgrade: true,
              feature: 'email_sending',
              currentUsage: user.usage.emailsSent,
              limit: limits.emailsPerMonth
            });
          }
          break;

        case 'email_validation':
          if (limits.validation !== true && user.usage.emailsValidated >= limits.validation) {
            return res.status(403).json({
              success: false,
              message: `Email validation limit reached (${limits.validation}). Please upgrade for higher limits.`,
              requiresUpgrade: true,
              feature: 'email_validation',
              currentUsage: user.usage.emailsValidated,
              limit: limits.validation
            });
          }
          break;
      }

      // Add limits to request for use in controllers
      req.userLimits = limits;
      req.isInTrial = isInTrial;
      req.trialDaysRemaining = user.getTrialDaysRemaining();

      next();
    } catch (error) {
      console.error('Feature access check error:', error);
      res.status(500).json({
        success: false,
        message: 'Server error'
      });
    }
  };
};

module.exports = { checkFeatureAccess };
