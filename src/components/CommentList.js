import React from 'react';
import { connect } from 'react-redux';

class CommentList extends React.Component {
  
  renderComments() {
    return this.props.comments.map((comment) => {
      return (
        <li key={comment}>{comment}</li>
      )
    });
  };

  render() {
    return (
      <div>
        <h4>Comment list</h4>
        <ul>
          {this.renderComments()}
        </ul>
      </div>
    )
  };
};

const mapStateToProps = (state) => {
  return { comments: state.comments };
};

export default connect(mapStateToProps)(CommentList);