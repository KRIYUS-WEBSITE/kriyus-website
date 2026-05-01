// ============================================================
// routes/contact.js – POST /api/contact
// ============================================================

const express = require('express');
const router = express.Router();
const { body, validationResult } = require('express-validator');
const { writeToSheet } = require('../middleware/sheetsHelper');

// Validation rules
const validateContact = [
  body('name').trim().notEmpty().withMessage('Name is required'),
  body('email').isEmail().normalizeEmail().withMessage('Valid email is required'),
  body('message').trim().notEmpty().withMessage('Message is required'),
  body('phone').optional().trim()
];

router.post('/', validateContact, async (req, res) => {
  // Check validation
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({
      success: false,
      message: 'Validation failed',
      errors: errors.array().map(e => e.msg)
    });
  }

  const { name, email, phone = '', message, subject = 'General Inquiry' } = req.body;

  try {
    await writeToSheet('CONTACTS', { name, email, phone, subject, message });

    console.log(`📬 Contact form: ${name} <${email}>`);

    res.status(200).json({
      success: true,
      message: 'Your message has been received! We will respond within 24–48 hours.'
    });
  } catch (error) {
    console.error('Contact route error:', error.message);
    res.status(500).json({
      success: false,
      message: 'Failed to send message. Please try again or email us directly at murarikeys2002@gmail.com'
    });
  }
});

module.exports = router;
