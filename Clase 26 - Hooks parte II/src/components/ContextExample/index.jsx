import { createContext } from "react";
import TaskList from "./TaskList";

export const ContextTaskList = createContext();

export default function ContextExample() {
  const tareas = [
    { id: 1, tarea: "Primera Tarea" },
    { id: 2, tarea: "Segunda Tarea" },
    { id: 3, tarea: "Tercera Tarea" },
  ];

  return (
    <ContextTaskList.Provider value={tareas}>
      <TaskList />
    </ContextTaskList.Provider>
  );
}
