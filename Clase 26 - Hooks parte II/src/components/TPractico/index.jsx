import { useRef, createContext } from "react";
import CreateNote from "./CreateNote";

export const NoteContext = createContext();

export default function TPractico() {
  const countRef = useRef(0);

  return (
    <NoteContext.Provider value={countRef}>
      <CreateNote />
    </NoteContext.Provider>
  );
}