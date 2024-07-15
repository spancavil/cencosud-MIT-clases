import React from "react";

export default function TodoList() {
  const listTask = [
    { text: "tarea 1", style: { textDecoration: "line-through" } },
    { text: "tarea 2", style: {} },
    { text: "tarea 3", style: {} },
  ];
  return (
    <ul>
      {listTask.map((data) => (
        <li key={data.text} style={data.style}>{data.text}</li>
      ))}
    </ul>
  );
}
