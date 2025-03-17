const BASE_RESPONSE_MESSAGES = {
    SUCCESS:{
        OTP_SENT: 'OTP sent successfully',
        LOGIN: 'Login successfully',
        REGISTERED: 'Registered successfully',
        PASSWORD_RESET: 'Password reset successfully',
        PASSWORD_VERIFIED: 'Password verified successfully'
    },
    Error:{
        ALL_FIELDS_REQUIRED: 'All fields required', 
        USER_NOT_FOUND: 'User not found',
        PASSWORD_NOT_MATCH:'Password do not match' ,
        COMPANY_ID_NOT_MATCH:' Company ID does not match'      
    },
};

module.exports = {BASE_RESPONSE_MESSAGES};