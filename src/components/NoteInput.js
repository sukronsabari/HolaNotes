import React from 'react';

class NoteInput extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: '',
      body: '',
      maxChar: 50,
      'character-limit': 50,
    }

    this.onTitleChangeEventHandler = this.onTitleChangeEventHandler.bind(this);
    this.onBodyChangeEventHandler = this.onBodyChangeEventHandler.bind(this);
    this.onSubmitEventHandler = this.onSubmitEventHandler.bind(this);
  }

  onTitleChangeEventHandler(event) {
    const totalCharacterOnInput = parseInt(event.target.value.length);
    if (totalCharacterOnInput <= this.state.maxChar) {
      this.setState(() => {
        return {
          title: event.target.value,
          'character-limit': this.state.maxChar - totalCharacterOnInput,
        }
      });
    }
  }

  onBodyChangeEventHandler(event) {
    this.setState(() => {
      return {
        body: event.target.value,
      }
    })
  }

  onSubmitEventHandler(event) {
    event.preventDefault();
    this.props.addNote({
      title: this.state.title,
      body: this.state.body,
    });
    this.setState(() => {
      return {
        title: '',
        body: '',
        'character-limit': 50,
      }
    });
  }

  render() {
    return (
      <div className="note-input">
        <form onSubmit={this.onSubmitEventHandler}>
          <div className="note-input__title__char-limit">Sisa Karakter: {this.state['character-limit']}</div>
          <input
          type="text"
          className="note-input__title"
          placeholder="Title"
          value={this.state.title}
          onChange={this.onTitleChangeEventHandler}
          />
          <textarea
          className="note-input__body"
          placeholder="Take a note..."
          value={this.state.body}
          onChange={this.onBodyChangeEventHandler}
          >
          </textarea>
          <button type="submit">Buat</button>
        </form>
      </div>
    )
  }
}

export default NoteInput;
