import React from 'react';
import SearchInput from './SearchInput';

function NoteAppHeader({ searchNotes }) {
  return (
    <div className="note-app__header">
      <div className="note-app__header-inner">
        <div className="logo">
          <h1>Notes</h1>
        </div>
        <SearchInput searchNotes={searchNotes}/>
      </div>
    </div>
  )
}

export default NoteAppHeader;
