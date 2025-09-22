const express = require('express');
const { body, validationResult } = require('express-validator');
const Ticket = require('../models/Ticket');
const { auth } = require('../middleware/auth');
const { sendNotificationEmail } = require('../services/Mailer');

const router = express.Router();

// Create a ticket (signed-in users)
router.post('/tickets', [auth,
  body('subject').trim().isLength({ min: 3 }),
  body('message').trim().isLength({ min: 5 })
], async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ success: false, errors: errors.array() });
  }
  try {
    const ticket = await Ticket.create({
      user: req.user.id,
      subject: req.body.subject,
      message: req.body.message,
      priority: req.body.priority || 'medium',
    });

    // Notify admin via email
    const to = process.env.SUPPORT_EMAIL || 'info@chatriox.awsapps.com';
    const subject = `New support ticket: ${ticket.subject}`;
    const html = `<h3>New ticket</h3><p><b>User:</b> ${req.user.email || req.user.id}</p><p>${ticket.message.replace(/\n/g,'<br/>')}</p>`;
    await sendNotificationEmail({ to, subject, html });

    // Realtime notify admins
    try { global.io && global.io.emit('admin_new_ticket', { id: ticket._id, subject: ticket.subject }); } catch (_) {}

    res.status(201).json({ success: true, data: ticket });
  } catch (err) {
    console.error('Create ticket error:', err);
    res.status(500).json({ success: false, message: 'Server error' });
  }
});

// Simple list tickets for current user
router.get('/tickets', auth, async (req, res) => {
  try {
    const list = await Ticket.find({ user: req.user.id }).sort({ createdAt: -1 });
    res.json({ success: true, data: list });
  } catch (err) {
    res.status(500).json({ success: false, message: 'Server error' });
  }
});

module.exports = router;
