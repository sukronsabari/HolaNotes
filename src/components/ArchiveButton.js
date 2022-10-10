import React from 'react';

function ArchiveButton({ id, onArchiveNote, archived }) {
  return (
    <button className="note-item__archive-button" onClick={() => onArchiveNote(id)}>{archived ? "Pindahkan" : "Arsipkan"}</button>
  )
}

export default ArchiveButton;
