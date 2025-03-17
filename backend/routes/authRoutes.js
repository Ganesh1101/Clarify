const express = require('express');
const router = express.Router();
const {
    sendOTP,
    otpVerification,
    forgotPassword,
    forgotPasswordVerification,
    resetPassword,
    signIn
} = require('../controllers/authController');
router.post('/sendOtp', sendOTP);
router.post('/verifyOtp', otpVerification);
router.post('/forgotPassword', forgotPassword);
router.post('/forgotPasswordVerification', forgotPasswordVerification);
router.post('/resetPassword', resetPassword);
router.post('/signIn',signIn)
module.exports = router;