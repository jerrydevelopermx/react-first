import React from "react";
import "./App.css";
import QuizPage from "./QuizPage";
import GirlPage from "./GirlPage";
import FinalPage from "./FinalPage";
function App() {
  const route = window.location.pathname;
  if (route === "/results") return <GirlPage />;
  if (route === "/final") return <FinalPage />;
  return <QuizPage />;
}

export default App;
