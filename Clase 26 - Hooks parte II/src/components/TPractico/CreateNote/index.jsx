import React, { useState, useContext } from "react";
import { NoteContext } from "..";

export default function CreateNote() {
  const [addNote, setAddNote] = useState("");
  const [listNote, setListNote] = useState([]);
  const counterNote = useContext(NoteContext);

  const onClickAddListNote = () => {
    counterNote.current += 1;
    setListNote([...listNote, { text: addNote, id: counterNote.current }]);
    setAddNote("")
    console.log(counterNote.current);
  };

  return (
    <div>
      <input
        type="text"
        onChange={(e) => setAddNote(e.target.value)}
        value={addNote}
      />
      {listNote?.map((dato) => (
        <p key={dato.id}>{dato.text}</p>
      ))}
      <button onClick={onClickAddListNote} disabled={addNote.trim() === ""}>
        Agregar Nota
      </button>
    </div>
  );
}
