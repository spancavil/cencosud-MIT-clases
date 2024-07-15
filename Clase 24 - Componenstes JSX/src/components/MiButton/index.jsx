import React from "react";

export default function MiButton() {
  function onClickExample() {
    console.log("Hola ! Hiciste click");
  }
  return <button onClick={onClickExample}>Click Me</button>;
}
