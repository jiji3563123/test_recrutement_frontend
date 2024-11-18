import React from 'react';
import Event from './Event';

const Calendar = ({ data }) => {
  const calendarHeight = 600; 
  const dayInMinutes = 24 * 60; 


  const calculatePositions = () => {
    const positions = [];

    data.forEach((event, index) => {
      const startTime = event.start.split(':');
      const startMinutes = parseInt(startTime[0], 10) * 60 + parseInt(startTime[1], 10);
      const duration = event.duration || 60;

      const positionTop = (startMinutes / dayInMinutes) * calendarHeight;
      const height = (duration / dayInMinutes) * calendarHeight;


      let leftPosition = 0;
      for (let i = 0; i < index; i++) {
        const previousEvent = positions[i];

        const previousStart = previousEvent.position;
        const previousEnd = previousStart + previousEvent.height;

        const currentEnd = positionTop + height;


        if (
          (positionTop < previousEnd && currentEnd > previousStart) || 
          (previousStart < currentEnd && previousEnd > positionTop)
        ) {
          leftPosition += 110; 
        }
      }

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
