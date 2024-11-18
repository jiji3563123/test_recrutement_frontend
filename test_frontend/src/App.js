import React, { useState, useEffect } from 'react'; // Import React, along with useState and useEffect hooks from React package
import getData from './getData'; // Import the getData function
import Calendar from './components/Calendar';

function App() {
  const [data, setData] = useState([]);    // Define state variable 'data' and its setter function 'setData'

  useEffect(() => { // useEffect hook to run side effects in the component
    const fetchData = async () => {
      const fetchedData = await getData(); // Fetch data using the 'getData' function
      setData(fetchedData);   // Update the state 'data' with the fetched data
    };

    fetchData();
  }, []); 

  return (
    <div className="App" >
      <h1>Calendrier des événements</h1>
      <Calendar data={data} /> 
    </div>
  );
}

export default App;

