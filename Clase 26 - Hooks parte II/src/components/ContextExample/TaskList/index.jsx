import { useContext } from "react";
import { ContextTaskList } from "../index";

export default function TaskList() {
  const tareas = useContext(ContextTaskList);
  return (
    <ul>
      {tareas.map((tarea) => (
        <li ket={tarea.id}>{tarea.tarea}</li>
      ))}
    </ul>
  );
}
