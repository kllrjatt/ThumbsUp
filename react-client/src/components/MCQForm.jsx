import React from 'react';
import axios from 'axios';

class MCQForm extends React.Component {
  constructor(props) {
    console.log('this is the props ', props);
    super(props);
    this.state = {
    };
  }


  render() {
    return (
      <div>
        <input
          className="question-form"
          type="text"
          value={this.state.questionName}
          placeholder="Enter Question Name"
          onChange={this.props.handleChange.bind(this, 'questionName')}
        />
        <input
          type="text"
          value={this.props.answers[1]}
          placeholder="Answer 1"
          onChange={this.props.handleChange.bind(this, '1')}
        />
        <input
          type="text"
          value={this.props.answers[2]}
          placeholder="Answer 2"
          onChange={this.props.handleChange.bind(this, '2')}
        />
        <input
          type="text"
          value={this.props.answers[3]}
          placeholder="Answer 3"
          onChange={this.props.handleChange.bind(this, '3')}
        />
        <input
          type="text"
          value={this.props.answers[4]}
          placeholder="Answer 4"
          onChange={this.props.handleChange.bind(this, '4')}
          className="question-form-bottom"
        />
        <div
          className="text-center"
          className="question-form smlbtn btn-sm btn-normal"
          onClick={this.props.onQuestionSave.bind(this)}>
          Save Question
        </div>
      </div>
    );
  }
}

export default MCQForm;
