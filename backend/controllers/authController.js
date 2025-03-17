const User = require('../models/User');
const { generateOTP, verifyOTP } = require('../helpers/otpGeneration');
const { baseResponses } = require('../helpers/baseResponses');
const jwt = require('jsonwebtoken');


exports.sendOTP = async (req, res) => {
    try {
        const { mobile_number } = req.body;
        if (!mobile_number) {
            return res.status(400).json(baseResponses.constantMessages.ALL_FIELDS_REQUIRED());
        }
        const user = await User.findOne({ mobile_number });
        if (!user) {
            return res.status(404).json(baseResponses.constantMessages.USER_NOT_FOUND());
        }
        const { otp, expirationTimestamp } = generateOTP(mobile_number, 6, 90);
        return res.status(200).json(baseResponses.constantMessages.OTP_SENT(otp, expirationTimestamp));
    } catch (error) {
        return res.status(500).json(baseResponses.error(error.message));
    }
}

exports.otpVerification = async (req, res) => {
    try {
        const { mobile_number, otp } = req.body;

        if (!mobile_number || !otp) {
            return res.status(400).json(baseResponses.constantMessages.ALL_FIELDS_REQUIRED());
        }
        const { success, message } = verifyOTP(mobile_number, otp);
        if (!success) {
            return res.status(400).json({ message });
        }
        const existingUser = await User.findOne({ mobile_number: mobile_number });
        if (!existingUser) {
            const newUser = await User.create({ mobile_number: mobile_number });
            await newUser.save();
            let _secret = process.env.JWT_SECRET || 'rajasekhar-secret-key';
            const token = jwt.sign({ mobile_number, role: newUser.role, user_id: newUser._id }, _secret);
            return res.status(200).json(baseResponses.constantMessages.REGISTERED({ id: newUser._id, token: token }));
        }
        let _secret = process.env.JWT_SECRET || 'rajasekhar-secret-key';
        const token = jwt.sign({ mobile_number, role: existingUser.role, user_id: existingUser._id }, _secret);
        return res.status(200).json(baseResponses.constantMessages.LOGIN({ id: existingUser._id, token: token }));

    } catch (error) {
        return res.status(500).json(baseResponses.error(error.message));
    }
};

// exports.forgotPassword = async (req, res) => {
//     try {
//         const { mobile_number } = req.body;
//         if (!mobile_number) {
//             return res.status(400).json(baseResponses.constantMessages.ALL_FIELDS_REQUIRED());
//         }
//         const user = await User.findOne({ mobile_number });
//         if (!user) {
//             return res.status(404).json(baseResponses.constantMessages.USER_NOT_FOUND());
//         }
//         const { otp, expirationTimestamp } = generateOTP(mobile_number, 6, 90);
//         return res.status(200).json(baseResponses.constantMessages.OTP_SENT(otp, expirationTimestamp));
//     } catch (error) {
//         return res.status(500).json(baseResponses.error(error.message));
//     }
// };

// exports.forgotPasswordVerification = async (req, res) => {
//     try {
//         const { mobile_number, otp } = req.body;
//         if (!mobile_number || !otp) {
//             return res.status(400).json(baseResponses.constantMessages.ALL_FIELDS_REQUIRED());
//         }
//         const user = await User.findOne({ mobile_number });
//         if (!user) {
//             return res.status(404).json(baseResponses.constantMessages.USER_NOT_FOUND());
//         }
//         const { success, message } = verifyOTP(mobile_number, otp);
//         if (!success) {
//             return res.status(400).json({ message });
//         }
//         return res.status(200).json(baseResponses.constantMessages.PASSWORD_VERIFIED());
//     } catch (error) {
//         return res.status(500).json(baseResponses.error(error.message));
//     }
// }
exports.resetPassword = async (req, res) => {
    try {
        const { mobile_number, newPassword, confirmPassword } = req.body;
        if (!mobile_number || !newPassword || !confirmPassword) {
            return res.status(400).json(baseResponses.constantMessages.ALL_FIELDS_REQUIRED());
        }
        if (newPassword !== confirmPassword) {
            return res.status(400).json(baseResponses.constantMessages.PASSWORD_NOT_MATCH());
        }

        const user = await User.findOne({ mobile_number });
        if (!user) {
            return res.status(404).json(baseResponses.constantMessages.USER_NOT_FOUND());
        }
        user.password = newPassword;
        await user.save();
        return res.status(200).json(baseResponses.constantMessages.PASSWORD_RESET());
    } catch (error) {
        return res.status(500).json(baseResponses.error(error.message));
    }
};

exports.signIn = async (req, res) => {
    try {
        const { company_id, email, password } = req.body;
        if (!company_id || !email || !password) {
            return res.status(400).json(baseResponses.constantMessages.ALL_FIELDS_REQUIRED());
        }
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(404).json(baseResponses.constantMessages.USER_NOT_FOUND());
        }
        if (!user.company_id || user.company_id.toString() !== company_id) {
            return res.status(400).json(baseResponses.constantMessages.COMPANY_ID_NOT_MATCH());
        }

        if (user.password !== password) {
            return res.status(400).json(baseResponses.constantMessages.PASSWORD_NOT_MATCH());
        }
        let _secret = process.env.JWT_SECRET || 'rajasekhar-secret-key';
        const token = jwt.sign({ role: user.role, user_id: user._id }, _secret);
        return res.status(200).json(baseResponses.constantMessages.LOGIN({ id: user._id, token: token }));
    }catch(error){
        return res.status(500).json(baseResponses.error(error.message));
    }
}
