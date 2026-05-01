// ============================================================
// routes/donate.js – POST /api/donate
// ============================================================

const express = require('express');
const router = express.Router();
const { body, validationResult } = require('express-validator');
const { writeToSheet } = require('../middleware/sheetsHelper');

const validateDonate = [
  body('name').trim().notEmpty().withMessage('Name is required'),
  body('email').isEmail().normalizeEmail().withMessage('Valid email is required'),
  body('amount').optional().trim(),
  body('program').optional().trim(),
  body('message').optional().trim()
];

router.post('/', validateDonate, async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({
      success: false,
      message: 'Validation failed',
      errors: errors.array().map(e => e.msg)
    });
  }

  const {
    name, email,
    amount = 'Not specified',
    program = 'General Fund',
    message = ''
  } = req.body;

  try {
    await writeToSheet('DONATIONS', { name, email, amount, program, message });

    console.log(`💚 Donation intent: ${name} <${email}> – ₹${amount}`);

    res.status(200).json({
      success: true,
      message: 'Thank you! Your donation details have been received. We will send payment confirmation shortly.'
    });
  } catch (error) {
    console.error('Donate route error:', error.message);
    res.status(500).json({
      success: false,
      message: 'Failed to process request. Please contact us at murarikeys2002@gmail.com'
    });
  }
});

module.exports = router;
