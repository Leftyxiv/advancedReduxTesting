import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import * as actions from 'actions';

const CommentBox = (props) => {
  const [input, setInput] = useState('');

  useEffect(() => {
    if (!props.auth) {
      props.history.push('/');
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.auth]);

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
          <button id='submit' onClick={handleSubmit}>Submit</button>
        </div>
      </form>
      <button id='fetchComment' onClick={props.fetchComments}>Fetch Comments</button>
    </div>
  )
}


export default connect(null, actions)(CommentBox);
