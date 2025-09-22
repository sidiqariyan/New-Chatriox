const mongoose = require('mongoose');

const ContactSubmissionSchema = new mongoose.Schema({
  fullName: { type: String, required: true },
  company: { type: String },
  email: { type: String, required: true },
  phone: { type: String },
  country: { type: String },
  topic: { type: String },
  budget: { type: String },
  website: { type: String },
  message: { type: String, required: true },
  consent: { type: Boolean, default: false },
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
}, { timestamps: true });

module.exports = mongoose.model('ContactSubmission', ContactSubmissionSchema);
