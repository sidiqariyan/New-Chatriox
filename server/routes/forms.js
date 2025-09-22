const express = require('express');
const { body, validationResult } = require('express-validator');
const ContactSubmission = require('../models/ContactSubmission');
const { sendNotificationEmail } = require('../services/Mailer');

const router = express.Router();

router.post('/contact', [
  body('fullName').trim().isLength({ min: 2 }).withMessage('Full name is required'),
  body('email').isEmail().withMessage('Valid email is required'),
  body('message').trim().isLength({ min: 5 }).withMessage('Message is too short'),
], async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ success: false, errors: errors.array() });
  }

  try {
    const submission = await ContactSubmission.create({
      fullName: req.body.fullName,
      company: req.body.company,
      email: req.body.email,
      phone: req.body.phone,
      country: req.body.country,
      topic: req.body.topic,
      budget: req.body.budget,
      website: req.body.website,
      message: req.body.message,
      consent: !!req.body.consent,
      userId: req.user?.id,
    });

    const to = process.env.SUPPORT_EMAIL || 'info@chatriox.awsapps.com';
    const subject = `New contact submission from ${submission.fullName}`;
    const html = `<h3>New contact submission</h3>
      <p><b>Name:</b> ${submission.fullName}</p>
      <p><b>Email:</b> ${submission.email}</p>
      <p><b>Company:</b> ${submission.company || '-'}</p>
      <p><b>Phone:</b> ${submission.phone || '-'}</p>
      <p><b>Country:</b> ${submission.country || '-'}</p>
      <p><b>Topic:</b> ${submission.topic || '-'}</p>
      <p><b>Budget:</b> ${submission.budget || '-'}</p>
      <p><b>Website:</b> ${submission.website || '-'}</p>
      <p><b>Consent:</b> ${submission.consent ? 'Yes' : 'No'}</p>
      <p><b>Message:</b><br/>${submission.message.replace(/\n/g,'<br/>')}</p>`;

    const emailResult = await sendNotificationEmail({ to, subject, html });

    // Notify admins via websocket if available
    try { global.io && global.io.emit('admin_new_contact', submission); } catch (_) {}

    res.status(201).json({ success: true, data: submission, email: emailResult.success });
  } catch (err) {
    console.error('Contact submission failed:', err);
    res.status(500).json({ success: false, message: 'Server error' });
  }
});

module.exports = router;
