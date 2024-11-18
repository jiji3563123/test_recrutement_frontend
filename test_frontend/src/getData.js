// Define an asynchronous function to fetch data from a local JSON file
const getData = async () => {
    try {
      const response = await fetch('/input.json'); // Fetch the JSON file located at the root of the project
      const data = await response.json(); // Parse the response body as JSON and store it in the 'data' variable
      return data;
    } catch (error) { // Log any errors that occur during the fetch or JSON parsing process
      console.error(error);
    }
  }

  // Export the function as the default export of this module
  export default getData;
  