import React, { useState } from 'react';
import { connect } from 'react-redux';
import * as actions from 'actions';

const CommentBox = (props) => {
  const [input, setInput] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    props.saveComment(input);
    setInput('');
  }
  return (
    <div>
      <form>
        <h4>Add a comment</h4>
        <textarea value={input} onChange={(e) => setInput(e.target.value)}/>
        <div>
          <button onClick={handleSubmit}>Submit</button>
        </div>
      </form>
    </div>
  )
}

export default connect(null, actions)(CommentBox);
