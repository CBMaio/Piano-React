import React, { useState } from 'react';
import './App.css';
import Songs from './Componentes/canciones'

function App() {

  const [notaSonando, setNotaSonando] = useState('')

  const notas = [
    {
      nombre: "Do",
      link: require("./notes/do.wav"),
      tieneSostenido: true,
    },
    {
      nombre: "Re",
      link: require("./notes/re.wav"),
      tieneSostenido: true,
    },
    {
      nombre: "Mi",
      link: require("./notes/mi.wav"),
      tieneSostenido: false,
    },
    {
      nombre: "Fa",
      link: require("./notes/fa.wav"),
      tieneSostenido: true,
    },
    {
      nombre: "Sol",
      link: require("./notes/sol.wav"),
      tieneSostenido: true,
    },
    {
      nombre: "La",
      link: require("./notes/la.wav"),
      tieneSostenido: true,
    },
    {
      nombre: "Si",
      link: require("./notes/si.wav"),
      tieneSostenido: false,
    },
  ]

  const handleClick = (nota) => {
    setNotaSonando(nota.nombre);
    const sonido = new Audio(nota.link);
    sonido.play();
    setTimeout(() => {
      setNotaSonando(null)
    }, 300);
  }

  return (
    <div className="App totalHeight">
      <Songs/>
      <div className="title">
          <h1>Piano con React</h1>
          <h2>¡A tocar!</h2>
      </div> 

      <div className="contenedor">
          {
            notas.map( nota => {
              return(
                <div
                  key = {nota.nombre}
                  className = {`nota ${notaSonando === nota.nombre && 'notaSonando'}`}
                  onClick = {() => handleClick(nota)}>
                    {
                      notaSonando === nota.nombre &&
                      <h2 className="nombreDeNota">{notaSonando}</h2>
                    }
                    {
                      nota.tieneSostenido && <div className="sostenido"></div>
                    }

                </div>
              )
            })
          }
      </div>
    </div>
  );
}

export default App;
