import React from 'react';

const Scroll = (props) => {
  return (
    <div
      style={{
        overflowY: 'scroll',
        border: '5px solid black',
        height: '80vh',
        width: '100vw',
        overflowX: 'none',
      }}
    >
      {props.children}
    </div>
  );
};

export default Scroll;
