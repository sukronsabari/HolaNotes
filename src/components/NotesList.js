import React from 'react';
import NoteItem from './NoteItem';

function NotesList({ notes, onDeleteNote, onArchiveNote }) {
  return (
    <div className="notes-list">
      { 
        notes.map((note) => 
            <NoteItem 
            key={note.id}
            onDeleteNote={onDeleteNote}
            onArchiveNote={onArchiveNote}
            {...note}
            /> 
        )
      }
    </div>
  );
}

export default NotesList;
