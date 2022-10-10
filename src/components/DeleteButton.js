import React from 'react';

function DeleteButton({ id, onDeleteNote}) {
  return (
    <button className="note-item__delete-button" onClick={() => onDeleteNote(id)}>Delete</button>
  )
}

export default DeleteButton;
