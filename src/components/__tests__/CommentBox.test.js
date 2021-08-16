import React from 'react';
import { mount } from 'enzyme';

import CommentBox from 'components/CommentBox';

let component;

beforeEach(() => {
  component = mount(<CommentBox />);
});

afterEach(() => {
  component.unmount();
});

it('has a text area and a button', () => {
  expect(component.find('textarea').length).toBe(1);
  expect(component.find('button').length).toBe(1);
});

// console.log(wrapped.find("textarea").length);