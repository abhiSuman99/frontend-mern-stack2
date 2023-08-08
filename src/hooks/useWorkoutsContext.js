// // import { WorkoutsContext } from "../context/WorkoutsContext"
// // import { useContext } from "react"

// // export const useWorkoutsContext = () => {
// //   const context = useContext(WorkoutsContext)

// //   if(!context) {
// //     throw Error('useWorkoutsContext must be used inside a WorkoutsContextProvider')
// //   }

// //   return context
// // }
// import { WorkoutsContext } from '../context/WorkoutsContext';
// import { useContext } from 'react';

// export const useWorkoutsContext = () => {
//   const context = useContext(WorkoutsContext);

//   if (!context) {
//     throw Error('useWorkoutsContext must be used inside a WorkoutsContextProvider');
//   }

//   return context;
// };
import { createContext, useReducer, useContext } from 'react';

// Create context
export const WorkoutsContext = createContext();

// Reducer
const workoutsReducer = (state, action) => {
  switch (action.type) {
    // Define your reducer cases here
    default:
      return state;
  }
};

// Context provider component
export const WorkoutsContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(workoutsReducer, {
    // Initial state
    workouts: [],
  });

  return (
    <WorkoutsContext.Provider value={{ state, dispatch }}>
      {children}
    </WorkoutsContext.Provider>
  );
};

// Custom hook for using the context
export const useWorkoutsContext = () => {
  const context = useContext(WorkoutsContext);

  if (!context) {
    throw new Error(
      'useWorkoutsContext must be used within a WorkoutsContextProvider'
    );
  }

  return context;
};
