// import React, { useState } from "react"; // Import React and useState
// import { createRoot } from "react-dom/client";

// const Login = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     console.log(email, password);
//   };

//   return (
//     <form className="login" onSubmit={handleSubmit}>
//       <h3>Log In</h3>
      
//       <label>Email address:</label>
//       <input 
//         type="email" 
//         onChange={(e) => setEmail(e.target.value)} 
//         value={email} 
//       />
//       <label>Password:</label>
//       <input 
//         type="password" 
//         onChange={(e) => setPassword(e.target.value)} 
//         value={password} 
//       />

//       <button>Log in</button>
//     </form>
//   );
// };

// export default Login; // Don't forget to export the component
import React, { useState } from 'react';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(email, password);
  };

  return (
    <form className="login" onSubmit={handleSubmit}>
      <h3>Log In</h3>

      <label>Email address:</label>
      <input 
        type="email" 
        onChange={(e) => setEmail(e.target.value)} 
        value={email} 
      />
      <label>Password:</label>
      <input 
        type="password" 
        onChange={(e) => setPassword(e.target.value)} 
        value={password} 
      />

      <button>Log in</button>
    </form>
  );
};

export default Login;
