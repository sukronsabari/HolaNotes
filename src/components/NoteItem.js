import React from 'react';
import DeleteButton from './DeleteButton';
import ArchiveButton from './ArchiveButton';
import { showFormattedDate } from '../utils/notes';

function NoteItem({ id, title, body, createdAt, archived, onDeleteNote, onArchiveNote }) {
  return (
    <article className="note-item">
      <div className="note-item__content">
        <h2 className="note-item__title">{title}</h2>
        <p className="note-item__date">{showFormattedDate(createdAt)}</p>
        <div className="note-item__body">{body}</div>
      </div>
      <div className="note-item__action">
        <DeleteButton id={id} onDeleteNote={onDeleteNote}/>
        <ArchiveButton id={id} onArchiveNote={onArchiveNote} archived={archived}/>
      </div>
    </article>
  )
}

export default NoteItem;
