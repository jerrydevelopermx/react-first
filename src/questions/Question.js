import React from "react";
import "./Questions.css";

function Question(props) {
  return (
    <div className="Question">
      <div className="Text">
        {props.number + 1}.- {props.text}
      </div>
      <div className="Answers">
        {props.options.map((item, key) => (
          <div className="Option" key={key}>
            <input type="radio" name={"q" + props.number} value={item.val} />
            {item.key} {item.val}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Question;
