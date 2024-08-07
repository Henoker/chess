import React, { useEffect, useRef } from 'react';

const Canvas = ({ width, height, position }) => {
  const canvasRef = useRef(null);
  const imageRef = useRef(new Image());

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');
    const image = imageRef.current;

    image.src = 'king5.png'; 

    const drawObject = (x, y) => {
      context.clearRect(0,0, canvas.width, canvas.height); // Clear canvas
      context.drawImage(image, x, y, 50, 50); // Draw the object
    };

    // Draw the object based on the computed position when the image loads
    image.onload = () => {
      drawObject(position.x, position.y);
    };

    // Function to log the x and y position on click and draw the image
    const handleClick = (event) => {
      const rect = canvas.getBoundingClientRect();
      const x = event.clientX - rect.left;
      const y = event.clientY - rect.top;
      console.log(`Canvas clicked at: x=${x}, y=${y}`);
      drawObject(x, y);
    };

    // Add event listener for clicks
    canvas.addEventListener('click', handleClick);

    // Cleanup event listener on component unmount
    return () => {
      canvas.removeEventListener('click', handleClick);
    };
  }, [position]);

  useEffect(() => {
    if (imageRef.current.complete) {
      const canvas = canvasRef.current;
      const context = canvas.getContext('2d');
      context.clearRect(0, 0, canvas.width, canvas.height); // Clear canvas
      context.drawImage(imageRef.current, position.x, position.y, 50, 50); // Draw the object
    }
  }, [position]);

  return (
    <canvas
      ref={canvasRef}
      width={width}
      height={height}
      className="absolute z-20 top-0 left-0 border-solid border-cyan-800"
    ></canvas>
  );
};

export default Canvas;



// src/components/Canvas.js
// import React, { useEffect, useRef } from 'react';

// const Canvas = ({ width, height, position }) => {
//   const canvasRef = useRef(null);

//   useEffect(() => {
//     const canvas = canvasRef.current;
//     const context = canvas.getContext('2d');

//     const drawObject = (x, y) => {
//       context.clearRect(0, 0, canvas.width, canvas.height); // Clear canvas
//       context.fillStyle = 'black';
//       context.fillRect(x, y, 20, 20); // Draw the object
//     };

//     // Draw the object based on the computed position
//     drawObject(position.x, position.y);

//     // Function to log the x and y position on click
//     const handleClick = (event) => {
//       const rect = canvas.getBoundingClientRect();
//       const x = event.clientX - rect.left;
//       const y = event.clientY - rect.top;
//       console.log(`Canvas clicked at: x=${x}, y=${y}`);
//     };

//     // Add event listener for clicks
//     canvas.addEventListener('click', handleClick);

//     // Cleanup event listener on component unmount
//     return () => {
//       canvas.removeEventListener('click', handleClick);
//     };
//   }, [position, width, height]);

//   return (
//     <canvas
//       ref={canvasRef}
//       width={width}
//       height={height}
//       className="absolute z-20 top-0 left-0 border-solid border-cyan-800"
//     ></canvas>
//   );
// };

// export default Canvas;

