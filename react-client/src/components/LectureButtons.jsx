import React from 'react';
import axios from 'axios';

class LectureButtons extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  onThumbsCheck() {
    console.log('onThumbsCheck is being called');
    console.log('this.props.lectureId', this.props.lectureId);
    axios({
      method: 'post',
      url: '/checkthumbs',
      params: {
        lectureId: this.props.lectureId
      }
    }).then((response) => {
      this.props.startThumbsCheck(response.data.questionId);
    }).catch((error) => {
      console.log(error);
    });
  }

  onMultipleChoiceQ() {
    console.log('onThumbsCheck is being called');
    console.log('this.props.lectureId', this.props.lectureId);
    axios({
      method: 'post',
      url: '/checkthumbs',
      params: {
        lectureId: this.props.lectureId
      }
    }).then((response) => {
      this.props.startThumbsCheck(response.data.questionId);
    }).catch((error) => {
      console.log(error);
    });
  }

  render() {
    return (
      <div>
        <div className="col-xs-12 text-center">
          <div
            className="btn btn-lg btn-success"
            onClick={this.onThumbsCheck.bind(this)}>
            Check Thumbs
					</div>
        </div>
        <div className="col-xs-12 text-center">
          {this.props.questions.map((el) => {
            return (
              <div
                className="btn question-option"
                onClick={this.onMultipleChoiceQ.bind(this)}>
                Ask: {el.title}
              </div>
            );
          })}
        </div>
        <div className="col-xs-12 text-center">
          <div
            className="btn btn-lg btn-danger"
            onClick={this.props.endLecture}>
            End Lecture
					</div>
        </div>
      </div>
    );
  }

}

export default LectureButtons;
