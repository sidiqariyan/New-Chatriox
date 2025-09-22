const nodemailer = require('nodemailer');
const SMTPConfig = require('../models/SMTPConfig');

async function resolveTransport() {
  // Prefer explicit env SMTP
  if (process.env.SMTP_HOST) {
    return nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT || 587),
      secure: !!process.env.SMTP_SECURE,
      auth: process.env.SMTP_USER && process.env.SMTP_PASS ? {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      } : undefined,
    });
  }

  // Try system sendmail if available
  if (process.env.USE_SENDMAIL === 'true') {
    return nodemailer.createTransport({ sendmail: true, newline: 'unix', path: '/usr/sbin/sendmail' });
  }

  // Fallback: JSON transport (dev only)
  return nodemailer.createTransport({ jsonTransport: true });
}

async function sendNotificationEmail({ to, subject, text, html, from }) {
  try {
    const transporter = await resolveTransport();
    const info = await transporter.sendMail({
      from: from || process.env.NOTIFY_FROM || 'no-reply@chatriox.local',
      to,
      subject,
      text,
      html,
    });
    return { success: true, info };
  } catch (err) {
    console.error('Notification email send failed:', err);
    return { success: false, error: err.message };
  }
}

module.exports = { sendNotificationEmail };
