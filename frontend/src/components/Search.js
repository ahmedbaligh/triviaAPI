import React, { Component } from 'react';

class Search extends Component {
  state = {
    query: ''
  };

  getInfo = event => {
    event.preventDefault();
    this.props.submitSearch(this.state.query);
  };

  handleInputChange = () => {
    this.setState(
      {
        query: this.search.value
      },
      () => {
        this.state.query && this.props.submitSearch(this.state.query);
      }
    );
  };

  render() {
    return (
      <form className="search-form" onSubmit={this.getInfo}>
        <input
          placeholder="Search questions..."
          ref={input => (this.search = input)}
          onChange={this.handleInputChange}
        />
        <input type="submit" value="Submit" className="button" />
      </form>
    );
  }
}

export default Search;
