import React, { useState } from 'react'

const CommentBox = () => {
  const [input, setInput] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
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

export default CommentBox
