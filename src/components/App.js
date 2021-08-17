import React from 'react'
import { Route } from 'react-router';

import CommentBox from 'components/CommentBox';
import CommentList from 'components/CommentList';

const App = () => {
  return (
    <div>
      <Route exact path="/" component={CommentList}/>
      <Route path='/post' component={CommentBox}/>
    </div>
  )
}

export default App
