import React from 'react'
import { Route } from 'react-router';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import CommentBox from 'components/CommentBox';
import CommentList from 'components/CommentList';
import * as actions from 'actions';

const App = (props) => {
  const renderHeader = () => {
    return <ul>
      <li>
        <Link to='/'>Home</Link>
      </li>
      <li>
        <Link to='/post'>Post</Link>
      </li>
      <li>
        { renderButton() }
      </li>
    </ul>
  }

  const renderButton = () => { 
    if (props.auth) {
      return <button onClick={() => props.changeAuth(false)}>Logout</button>
    } else {
      return <button onClick={() => props.changeAuth(true)}>Login</button>
    }
  };

  return (
    <div>
      { renderHeader() }
      <Route exact path="/" component={CommentList}/>
      <Route path='/post' component={CommentBox}/>
    </div>
  )
}

const mapStateToProps = (state) => {
  return { auth: state.auth }
}
export default connect(mapStateToProps, actions)(App);
