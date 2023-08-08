// // // import { BrowserRouter, Routes, Route } from 'react-router-dom'

// // // // pages & components
// // // import Home from './pages/Home'
// // // import Navbar from './Components/Navbar'
// // // import React from 'react';
// // // // import WorkoutsContextProvider from './WorkoutsContextProvider';
// // // // import Home from './Home'; 
// // // function App() {

// // //   return (
// // //     <div className="App">
// // //       <BrowserRouter>
// // //         <Navbar />
// // //         <div className="pages">
// // //           <Routes>
// // //             <Route 
// // //               path="/" 
// // //               element={<Home />} 
// // //             />
// // //           </Routes>
// // //         </div>
// // //       </BrowserRouter>
// // //     </div>
// // //   );
// // // }

// // // export default App;
// // import React from 'react';
// // import { BrowserRouter, Routes, Route } from 'react-router-dom';
// // import WorkoutsContextProvider from './context/WorkoutsContext';
// // import Home from './pages/Home';
// // import Navbar from './Components/Navbar';

// // function App() {
// //   return (
// //     <WorkoutsContextProvider>
// //       <div className="App">
// //         <BrowserRouter>
// //           <Navbar />
// //           <div className="pages">
// //             <Routes>
// //               <Route path="/" element={<Home />} />
// //             </Routes>
// //           </div>
// //         </BrowserRouter>
// //       </div>
// //     </WorkoutsContextProvider>
// //   );
// // }

// // export default App;
// import React from 'react';
// import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import WorkoutsContextProvider from './context/WorkoutsContext';
// import Home from './pages/Home';
// import Navbar from './Components/Navbar';
// import Login from './pages/login'; // Import the Login component

// function App() {
//   return (
//     <WorkoutsContextProvider>
//       <div className="App">
//         <BrowserRouter>
//           <Navbar />
//           <div className="pages">
//             <Routes>
//               <Route path="/" element={<Home />} />
//               {/* Add a route for the Login component */}
//               <Route path="/login" element={<Login />} />
//             </Routes>
//           </div>
//         </BrowserRouter>
//       </div>
//     </WorkoutsContextProvider>
//   );
// }

// export default App;
import { BrowserRouter, Routes, Route } from 'react-router-dom'

// pages & components
import Home from './pages/Home'
import Login from './pages/login'
import Signup from './pages/signup'
import Navbar from './Components/Navbar'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <div className="pages">
          <Routes>
            <Route 
              path="/"
              element={<Home />}
            />
            <Route 
              path="/login" 
              element={<Login />} 
            />
            <Route 
              path="/signup" 
              element={<Signup />} 
            />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;