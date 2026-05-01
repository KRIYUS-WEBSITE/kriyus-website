// ============================================================
// routes/volunteer.js – POST /api/volunteer
// ============================================================

const express = require('express');
const router = express.Router();
const { body, validationResult } = require('express-validator');
const { writeToSheet } = require('../middleware/sheetsHelper');

const validateVolunteer = [
  body('name').trim().notEmpty().withMessage('Name is required'),
  body('email').isEmail().normalizeEmail().withMessage('Valid email is required'),
  body('phone').trim().notEmpty().withMessage('Phone number is required'),
  body('message').trim().notEmpty().withMessage('Message is required'),
  body('skills').optional().trim(),
  body('area').optional().trim()
];

router.post('/', validateVolunteer, async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({
      success: false,
      message: 'Validation failed',
      errors: errors.array().map(e => e.msg)
    });
  }

  const {
    name, email, phone,
    skills = 'Not specified',
    area = 'Open to All',
    message
  } = req.body;

  try {
    await writeToSheet('VOLUNTEERS', { name, email, phone, skills, area, message });

    console.log(`🙋 Volunteer application: ${name} <${email}>`);

    res.status(200).json({
      success: true,
      message: 'Volunteer application received! Our team will contact you within 48 hours.'
    });
  } catch (error) {
    console.error('Volunteer route error:', error.message);
    res.status(500).json({
      success: false,
      message: 'Failed to submit application. Please try again.'
    });
  }
});

module.exports = router;
