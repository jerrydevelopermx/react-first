import React from "react";
import Question from "./Question";
import "./Questions.css";

function QuestionsList(props) {
  function redirect() {
    window.location.href = "/results";
  }
  return (
    <div className="Container">
      <p>
        A continuación mencionaremos algunas preguntas representativas que
        tratan de la eficacia de los gerentes individuales. A los participantes
        en la encuesta se les solicita que den opiniones francas y honestas,
        seleccionando una de las cinco opciones planteadas para cada pregunta.
      </p>
      <h3>Mi jefe...</h3>
      {props.questions.map((item, key) => (
        <Question
          key={key}
          number={key}
          text={item.question}
          type={item.type}
          options={item.options}
        />
      ))}
      <div className="ButtonDiv">
        <button onClick={redirect}>Enviar</button>
      </div>
    </div>
  );
}

export default QuestionsList;
