import React from 'react';
import ReactDOM from 'react-dom';

import App from '../App';

it('shows the comment box comment component', () => {
  const div = document.createElement('div');
  
  ReactDOM.render(<App />, div);

  expect(div.innerHTML).toContain('CommentBox');

  ReactDOM.unmountComponentAtNode(div);
});
