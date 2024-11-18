import React, { useState, useEffect } from 'react'; // Import React, along with useState and useEffect hooks from React package
import getData from './getData'; // Import the getData function

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
    <div className="App">
      <h1>Tableau des evenements</h1>
      <table border="1">
        <thead>
          <tr>
            <th>ID</th>
            <th>Début</th>
            <th>Durée (minutes)</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.start}</td>
              <td>{item.duration}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;

