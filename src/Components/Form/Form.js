import React, { Component } from 'react';

class Form extends Component {
  constructor() {
    super();
    this.state = {
      title: '',
      pitch: '',
      summary: ''
    };
    this.handleTitleChange = this.handleTitleChange.bind(this);
    this.handlePitchChange = this.handlePitchChange.bind(this);
    this.handleSummaryChange = this.handlePitchChange.bind(this);
  }

  handleTitleChange(e) {
    this.setState({ title: e.target.value });
  }

  handlePitchChange(e) {
    this.setState({ pitch: e.target.value });
  }

  handleSummaryChange(e) {
    this.setState({ pitch: e.target.value });
  }

  render() {
    return (
      <form>
        <label>
          <input type="radio" value="1" checked={true} />
          Innovation
        </label>

        <label>
          <input type="radio" value="2" />
          Innovation response to campain
        </label>

        <label>
          <input type="radio" value="3" />
          Campain
        </label>

        <label>Idea Title</label>
        <input type="text" name="title" onChange={this.handleTitleChange} />

        <label>Elevator Pitch</label>
        <textarea type="text" name="pitch" onChange={this.handlePitchChange} />

        <label>Your Idea Summary</label>
        <textarea
          type="text"
          name="summary"
          onChange={this.handleSummaryChange}
        />
      </form>
    );
  }
}

export default Form;
