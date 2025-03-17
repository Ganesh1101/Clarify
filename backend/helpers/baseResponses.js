const  baseResponses = {
    success:(message,data=null) => ({success:true, message, data}),
    error:(message,data=null) => ({success:false, error:message, data}),
    constantMessages: {
        ALL_FIELDS_REQUIRED: (data=null) => baseResponses.error('All fields required',data),
        OTP_SENT: (data=null) => baseResponses.success('OTP sent successfully',data),
        LOGIN: (data=null) => baseResponses.success('Login successfully',data),
        REGISTERED: (data=null) => baseResponses.success('Registered successfully',data),
        USER_NOT_FOUND: (data=null) => baseResponses.error('User not found',data),
        PASSWORD_NOT_MATCH: (data=null) => baseResponses.error('Password do not match',data),
        PASSWORD_RESET: (data=null) => baseResponses.success('Password reset successfully',data),
        PASSWORD_VERIFIED: (data=null) => baseResponses.success('Password verified successfully',data),
        COMPANY_ID_NOT_MATCH: (data=null) => baseResponses.error('Company ID does not match',data),
    }
};

module.exports = {baseResponses};