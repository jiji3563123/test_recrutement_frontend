import React from 'react';

const Event = ({ event, position, height, left }) => {
  return (
    <div
      style={{
        position: 'absolute',
        top: position,
        height: height,
        left: left,
        width: '100px', 
        border: '1px solid black',
        backgroundColor: '#f0f0f0',
        textAlign: 'center',
        lineHeight: `${height}px`, 
      }}
    >
      {event.id}
    </div>
  );
};

export default Event;