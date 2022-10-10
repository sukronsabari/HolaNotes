import React from 'react';

class SearchInput extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      keyword: '',
    }

    this.onInputChangeHandler = this.onInputChangeHandler.bind(this);
  }

  onInputChangeHandler(event) {
    this.setState({
      keyword: event.target.value,
    }, () => {
      event.preventDefault();
      this.props.searchNotes(this.state.keyword.toLowerCase());
    });
  }

  render() {
    return (
      <div className="note-search">
        <input 
        type="text" 
        name="search"
        id="search"
        placeholder="Search..."
        value={this.state.keyword}
        onChange={this.onInputChangeHandler}
        />
      </div>
    )
  }
}

export default SearchInput;
