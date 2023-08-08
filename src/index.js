// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';
// import App from './App';
// // import reportWebVitals from './reportWebVitals';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );
import React from 'react';
import { createRoot } from 'react-dom';
import App from './App';
import './index.css';
// import { WorkoutsContextProvider } from './context/WorkoutsContext'
import { AuthContextProvider } from './context/Authcontext'
createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthContextProvider>
    {/* <WorkoutsContextProvider><App /></WorkoutsContextProvider> */}
    <App />
    </AuthContextProvider>
  </React.StrictMode>
);
