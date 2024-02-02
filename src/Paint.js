import React, { useState } from "react";

export default function Paint() {
  const [array, setArray] = useState([{ x: 0, y: 0 }]);

  const [position, setPosition] = useState({
    x: 0,
    y: 0,
  });

  function addPosition() {
    //array.push(position);
    setArray([...array, { x: position.x, y: position.y }]);
    console.log(array);
  }

  return (
    <div
      id="area"
      style={{
        position: "relative",
        width: "800px",
        height: "70vh",
        margin: "auto",
        marginTop: "100px",
        border: "10px solid deepskyblue",
      }}
      onPointerMove={(e) => {
        let area = document.getElementById("area");
        let areaWidth = area.innerWidth;

        let differX = (window.innerWidth - 800) / 2;

        setPosition({ x: e.clientX - differX, y: e.clientY - 100 });
        addPosition();
      }}
    >
      {array.map((a) => (
        <div
          style={{
            position: "absolute",
            backgroundColor: "red",
            borderRadius: "50%",
            transform: `translate(${a.x}px,${a.y}px)`,
            left: 0,
            top: 0,
            width: "30px",
            height: "30px",
          }}
        ></div>
      ))}
    </div>
  );
}
