// import React, { useState } from "react";
// import "../assets/Styles/styles.css";

// const LoginForm = () => {
//   const [formData, setFormData] = useState({
//     companyId: "",
//     email: "",
//     password: "",
//     rememberMe: false,
//   });

//   const handleChange = (e) => {
//     const { name, value, type, checked } = e.target;
//     setFormData({ ...formData, [name]: type === "checkbox" ? checked : value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log("Form Submitted:", formData);
//   };

//   return (
//     <div className="login-container">
//       <div className="login-content">
//         {/* Header Section */}
//         <div className="login-header">
//           <h2>Hello !</h2>
//           <p>Sign in to your account</p>
//         </div>

//         {/* Form Section */}
//         <form onSubmit={handleSubmit}>
//           <div className="login-fields">
//             <div className="input-group">
//               <label htmlFor="companyId">Company ID</label>
//               <input
//                 type="text"
//                 id="companyId"
//                 name="companyId"
//                 value={formData.companyId}
//                 onChange={handleChange}
//                 className="login-input"
//               />
//             </div>

//             <div className="input-group">
//               <label htmlFor="email">E-Mail Address</label>
//               <input
//                 type="email"
//                 id="email"
//                 name="email"
//                 value={formData.email}
//                 onChange={handleChange}
//                 className="login-input"
//               />
//             </div>

//             <div className="input-group">
//               <label htmlFor="password">Password</label>
//               <input
//                 type="password"
//                 id="password"
//                 name="password"
//                 value={formData.password}
//                 onChange={handleChange}
//                 className="login-input"
//               />
//             </div>

//             <div className="login-options">
//               <label>
//                 <input
//                   type="checkbox"
//                   name="rememberMe"
//                   checked={formData.rememberMe}
//                   onChange={handleChange}
//                 />
//                 Remember Me
//               </label>
//               <a href="#" className="forgot-password">
//                 Forgot Password?
//               </a>
//             </div>
//           </div>

//           {/* Action Buttons */}
//           <button type="submit" className="login-button">Sign In</button>
//           <div className="login-divider">or</div>
//           <button type="button" className="login-alt-button">Login with Phone Number</button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default LoginForm;

import React, { useState } from "react";
import "../assets/Styles/styles.css";

const LoginForm = () => {
  const [mobileNumber, setMobileNumber] = useState("");

  const handleChange = (e) => {
    setMobileNumber(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Mobile Number Submitted:", mobileNumber);
  };

  return (
    <div className="login-container">
      <div className="login-content">
        <h2>Hello !</h2>
        <p>Sign in to your account</p>

        <form onSubmit={handleSubmit} className="login-form">
          <label className="login-label">Mobile Number</label>
          <div className="mobile-input-container">
            <div className="country-code">+91</div>
            <input
              type="text"
              value={mobileNumber}
              onChange={handleChange}
              className="mobile-input"
              placeholder="Enter mobile number"
            />
          </div>

          <button type="submit" className="login-button">Get OTP</button>

          <div className="login-divider">or</div>

          <button type="button" className="login-alt-button">
            Sign in with Credentials
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
