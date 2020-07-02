import React from "react";
import "./App.css";
import QuestionsList from "./questions/QuestionsList";
import * as constants from "./model/constants";

function QuizPage() {
  let questions = constants.QUESTIONS;
  return (
    <div className="App">
      <header className="App-header">
        <h3>Recursos Humanos - Encuesta de clima Gerencial</h3>
      </header>
      <div>
        <QuestionsList questions={questions} />
      </div>
      <footer className="footer">
        JGMX Dev @2020 Todos los derechos reservados.
      </footer>
    </div>
  );
}

export default QuizPage;
