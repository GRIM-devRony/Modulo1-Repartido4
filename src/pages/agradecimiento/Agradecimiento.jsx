import React from "react";
import Tick from "../../assets/img/tick-verde.png";
import { Link, useParams } from "react-router-dom";
import "./Agradecimiento.css";

const Agradecimiento = () => {
  const { name } = useParams();
  return (
    <div className="agradecimiento__ctn">
      <img className="agradecimiento__img" src={Tick} alt="tick verde" />
      <h2>Gracias {name}!</h2>
      <p>Hemos recibido tu comentario exitosamente!</p>
      <p>Pronto recibiras una respuesta.</p>
      <Link to="/tareas" className="agradecimiento__link">
        Volver a las tareas
      </Link>
    </div>
  );
};

export default Agradecimiento;
