import React, { useEffect } from "react";
import "./App.css";

function GirlPage() {
  function redirect() {
    window.location.href = "/final";
  }
  return (
    <>
      <div className="Main">
        <div className="Romy">
          Hola Romy, gracias por contestar mi encuesta fake jajaja
        </div>
        <div className="RomyText">Que linda te ves hoy...</div>
        <div className="RomyText">¿Adivina que?</div>
        <div className="RomyText">TE QUIERO MUCHO</div>
        <div className="RomyText">Solo falta algo...</div>
        <div className="ButtonDiv">
          <button onClick={redirect}>Click para continuar...</button>
        </div>
      </div>
    </>
  );
}

export default GirlPage;
