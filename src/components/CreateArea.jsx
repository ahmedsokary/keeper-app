import React, { useState } from "react"; //

function CreateArea(prop) {
  const [note, setNote] = useState({
    title: "",
    content: ""
  });

  function handle(event) {
    const { name, value } = event.target;
    setNote(prevValue => {
      return { ...prevValue, [name]: value };
    });
  }

  //here i will prevent the submittion and pass the value
  function submitChanges(event) {
    event.preventDefault();
    prop.input(note);
    setNote({ title: "", content: "" });
  }

  return (
    <div>
      <form>
        <input
          onChange={handle}
          value={note.title}
          name="title"
          placeholder="Title"
        />

        <textarea
          onChange={handle}
          value={note.content}
          name="content"
          placeholder="Take a note..."
          rows="3"
        />
        <button onClick={submitChanges}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
