import React from 'react';
import NoteAppHeader from './NoteAppHeader';
import NoteInput from './NoteInput';
import NotesList from './NotesList';
import { getInitialData } from '../utils/notes';

class NoteApp extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      notes: getInitialData(),
      keyword: '',
    }

    this.addNoteEventHandler = this.addNoteEventHandler.bind(this);
    this.deleteNoteEventHandler = this.deleteNoteEventHandler.bind(this);
    this.archiveNoteEventHandler = this.archiveNoteEventHandler.bind(this);
    this.searchNotesHandler = this.searchNotesHandler.bind(this);
  }

  searchNotesHandler(keyword) {
    this.setState(() => {
      return {
        keyword: keyword,
      }
    })
  }

  addNoteEventHandler({ title, body }) {
    this.setState((prevState) => {
      return {
        notes: [
          ...prevState.notes,
          {
            id: +new Date(),
            title,
            body,
            createdAt: +new Date(),
            archived: false,
          }
        ]
      }
    });
  }

  deleteNoteEventHandler(id) {
    const notes = this.state.notes.filter((note) => note.id !== id );
    this.setState(() => {
      return {
        notes: notes,
      }
    })
  }

  archiveNoteEventHandler(id) {
    const notes = this.state.notes.map((note) => {
      return note.id === id 
        ? { ...note, archived: !note.archived }
        : note;
    });
  
    this.setState(() => {
      return {
        notes: notes,
      }
    })
  }

  render() {
    const notes = this.state.notes.filter((note) => {
      return note.title.toLowerCase().includes(this.state.keyword);
    });
    const notesActive = notes.filter((note) => {
      return !note.archived;
    });
    const notesArchived = notes.filter((note) => {
      return note.archived;
    });

    return (
      <div className="note-app">
        <NoteAppHeader searchNotes={this.searchNotesHandler}/>
        <div className="note-app__body">
          <h2>Buat Catatan</h2>
          <NoteInput addNote={this.addNoteEventHandler} />
          <h2>Catatan Aktif</h2>
          {
            notesActive.length < 1
            ? <div className="notes-list__empty-message">Tidak ada catatan</div>
            : <NotesList
              notes={notesActive}
              onDeleteNote={this.deleteNoteEventHandler}
              onArchiveNote={this.archiveNoteEventHandler}
              />
          }
          <h2>Arsip</h2>
          {
            notesArchived.length < 1
            ? <div className="notes-list__empty-message">Tidak ada catatan</div>
            : <NotesList
              notes={notesArchived}
              onDeleteNote={this.deleteNoteEventHandler}
              onArchiveNote={this.archiveNoteEventHandler}
              />
          }
        </div>
      </div>
    )
  }
}

export default NoteApp;
