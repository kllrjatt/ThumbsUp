import React from 'react';
import axios from 'axios';
import MCQForm from './MCQForm.jsx';

class LectureCreator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      showInput: true,
      showAskForMCQ: false,
      showMCQForm: false,
      showAddAnotherMCQ: false,
      questionName: '',
      questions: {
        '1': '',
        '2': '',
        '3': '',
        '4': ''
      }
    };
  }

  // handleChange(event) {
  //   this.setState({
  //     name: event.target.value
  //   });
  // }

  onLectureSave() {
    this.setState({ showInput: false, showAskForMCQ: true });
  }

  onMCQAdd() {
    this.setState({ showMCQForm: true, showAskForMCQ: false });
  }

  onQuestionSave(arg1) {
    this.setState({ showMCQForm: false, showAddAnotherMCQ: true })
  }

  handleChange(form, event) {
    // console.log(event)
    event.persist()
    if (form === 'questionName') {
      this.setState({ questionName: event.target.value });
    }
    else {
      this.setState(() => {
        const newState = this.state;
        newState.questions[form] = event.target.value;
        return newState;
      })
    }
    console.log(this.state)
  }

  render() {
    return (
      <div>
        <div>
          CREATE NEW LECTURE
        {
            this.state.showInput === true
              ? <input
                type="text"
                className="form-control"
                value={this.state.name}
                placeholder="Enter lecture name"
                onChange={this.handleChange.bind(this)}
              />
              : this.state.showAskForMCQ === true
                ? <div
                  className="btn btn-sm btn-success"
                  onClick={this.onMCQAdd.bind(this)}>
                  Add an MCQ
            </div>
                : this.state.showMCQForm === true
                  ? <div>
                    <MCQForm questions={this.state.questions}
                      onQuestionSave={this.onQuestionSave.bind(this)}
                      handleChange={this.handleChange.bind(this)} />
                  </div>
                  : this.state.showAddAnotherMCQ === true
                    ? <div>
                      this is where we will list the existing MCQ forms and ask to add another
            </div>
                    : <div></div>
          }
        </div>
        <div className="col-xs-3 text-center">
          <div
            className="btn btn-sm btn-success"
            onClick={this.onLectureSave.bind(this)}>
            Save Lecture
          </div>
        </div>
      </div>
    )
  }
}

export default LectureCreator
