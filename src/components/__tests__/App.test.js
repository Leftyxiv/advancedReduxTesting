import React from 'react';
import { shallow } from 'enzyme';

import App from '../App';
import CommentBox from '../CommentBox';
// import CommentList from '../CommentList';

it('shows the comment box comment component', () => {
  const wrapper = shallow(<App />);
  expect(wrapper.find(CommentBox).length).toBe(1);
});
