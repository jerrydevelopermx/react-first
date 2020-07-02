import React, { useEffect } from "react";
import spinner from "../loader.gif";

function Spinner() {
  let visible = 1;
  useEffect(() => {
    const timer = setTimeout(() => {
      visible = 0;
      console.log(visible);
    }, 10000);
    return () => clearTimeout(timer);
  }, []);
  if (visible === 0) return null;
  return (
    <>
      <div className="Spinner">
        <img src={spinner} alt={"spinner"} />
        <h3>Espere...</h3>
      </div>
    </>
  );
}

export default Spinner;
