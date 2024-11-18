import React from 'react';
import Event from './Event';

// Calendar component receives 'data' prop which contains event information
const Calendar = ({ data }) => {
  const calendarHeight = 600; // Set the height of the calendar (px)
  const dayInMinutes = 24 * 60; // Total minutes in a day

// Function to calculate event positions on the calendar
  const calculatePositions = () => {
    const positions = [];  // Empty array to store the calculated positions of the events
    // Loop through each event in the data
    data.forEach((event, index) => {
      // Split event start time and convert to minutes
      const startTime = event.start.split(':'); // Split start time into hours and minutes
      const startMinutes = parseInt(startTime[0], 10) * 60 + parseInt(startTime[1], 10); // Convert to total minutes
      const duration = event.duration || 60; // The duration of the event, defaulting to 60 minutes if not specified
      // Calculate vertical position (top) and height of event
      const positionTop = (startMinutes / dayInMinutes) * calendarHeight;
      const height = (duration / dayInMinutes) * calendarHeight; // Calculate the height of the event based on its duration

      // Check for overlapping events and adjust horizontal position
      let leftPosition = 0;
      for (let i = 0; i < index; i++) {
        const previousEvent = positions[i];  // Get the previous event from the calculated positions array
        // Calculate the start and end positions of the previous event
        const previousStart = previousEvent.position; 
        const previousEnd = previousStart + previousEvent.height;
        // Calculate the end position of the current event
        const currentEnd = positionTop + height;

        // If the events overlap, move the current event horizontally
        if (
          (positionTop < previousEnd && currentEnd > previousStart) || 
          (previousStart < currentEnd && previousEnd > positionTop)
        ) {
          leftPosition += 110; // Move the current event 110px to the right to avoid overlap
        }
      }
      
       // Add the event with its calculated position and dimensions to the positions array
      positions.push({
        ...event,
        position: positionTop,
        height,
        left: leftPosition,
      });
    });

    return positions;
  };
  const positions = calculatePositions();

   // Render the calendar with events positioned accordingly
  return (
    <div
      style={{
        position: 'relative',
        height: `${calendarHeight}px`,
        width: '100%',
        border: '1px solid #ccc',
        overflow: 'hidden',
      }}
    >
      {positions.map((event, index) => (
        <div
          key={index}
          style={{
            position: 'absolute',
            top: event.position,
            left: event.left,
            height: event.height*2,
            width: '100px',
            border: '1px solid black',
            backgroundColor: '#f0f0f0',
            textAlign: 'center',
            lineHeight: `${event.height}px`,
          }}
        >
          {event.id}
        </div>
      ))}
    </div>
  );
};


export default Calendar;
