import React from "react"; //

function Note(props) {
  return (
    <div className="note">
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <button
        onClick={() => {
          //remove is the name of the function i will call id is the index given to that function
          props.remove(props.id);
        }}
      >
        DELETE
      </button>
    </div>
  );
}

export default Note;
