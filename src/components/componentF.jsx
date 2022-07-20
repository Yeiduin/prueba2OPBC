import React, { useState, useEffect } from "react";

const Clock = (props) => {
  const [state, setState] = useState({
    fecha: new Date(),
    edad: 0,
    nombre: "Martin",
    apellido: "San jose",
  });

  useEffect(() => {
    state.fecha.timerID = setInterval(() => state.fecha.tick(), 1000);
    tick();
    return () => {
      clearInterval(state.fecha.timerID);
    };
  }, []);

  const tick = (state.fecha.tick = () => {
    setState((prevState) => {
      let edad = prevState.edad + 1;
      return {
        ...prevState,
        fecha: new Date(),
        edad,
      };
    });
  });

  return (
    <div>
      <h2>Hora Actual {state.fecha.toLocaleTimeString()}</h2>
      <h3>
        {state.nombre} {state.apellido}
      </h3>
      <h1>Edad: {state.edad}</h1>
    </div>
  );
};

export default Clock;
