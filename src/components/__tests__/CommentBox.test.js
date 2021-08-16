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

it('lets users input text into the text area', () => {
  component.find('textarea').simulate('change', { target: { value: 'Hello' } });
  component.update();
  expect(component.find('textarea').prop('value')).toBe('Hello');
});

it('clears out the text area after the form is submitted', () => {
  const input = component.find('textarea')
  input.simulate('change', { target: { value: 'Hello' } });
  component.find('form').simulate('submit');
  component.update();
  expect(input.prop('value')).toBe('');
});

// console.log(wrapped.find("textarea").length);