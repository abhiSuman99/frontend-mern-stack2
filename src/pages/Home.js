// import { useEffect } from "react"
// import { useWorkoutsContext } from "../hooks/useWorkoutsContext"

// // components
// import WorkoutDetails from "../Components/WorkoutDetails"
// import WorkoutForm from "../Components/WorkoutForm"

// const Home = () => {
//   const { workouts, dispatch } = useWorkoutsContext()

//   useEffect(() => {
//     const fetchWorkouts = async () => {
//       const response = await fetch('/api/workouts')
//       const json = await response.json()

//       if (response.ok) {
//         dispatch({type: 'SET_WORKOUTS', payload: json})
//       }
//     }

//     fetchWorkouts()
//   }, [dispatch])

//   return (
//     <div className="home">
//       <div className="workouts">
//         {workouts && workouts.map(workout => (
//           <WorkoutDetails workout={workout} key={workout._id} />
//         ))}
//       </div>
//       <WorkoutForm />
//     </div>
//   )
// }

// export default Home
import { useEffect } from "react";
import { useWorkoutsContext } from "../hooks/useWorkoutsContext";

// components
import WorkoutDetails from "../Components/WorkoutDetails";
import WorkoutForm from "../Components/WorkoutForm";

const Home = () => {
  const { workouts, dispatch } = useWorkoutsContext();

  useEffect(() => {
    const fetchWorkouts = async () => {
      try {
        const response = await fetch('/api/workouts'); // Make sure this is the correct API endpoint
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const json = await response.json();
        dispatch({ type: 'SET_WORKOUTS', payload: json });
      } catch (error) {
        console.error('Error fetching data:', error);
        // Handle the error appropriately, such as displaying an error message to the user
      }
    };

    fetchWorkouts();
  }, [dispatch]);

  return (
    <div className="home">
      <div className="workouts">
        {workouts && workouts.map(workout => (
          <WorkoutDetails workout={workout} key={workout._id} />
        ))}
      </div>
      <WorkoutForm />
    </div>
  );
};

export default Home;

