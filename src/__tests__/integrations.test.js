import React from 'react';
import { mount } from 'enzyme';
import Root from 'root';
import App from 'components/App';
import moxios from 'moxios';

beforeEach(() => {
  moxios.install();
  moxios.stubRequest('http://jsonplaceholder.typicode.com/comments', {
    status: 200,
    response: [{ name: 'Fetched 1', id: 1 }, { name: 'Fetched 2', id: 2 }],
  });
});

afterEach(() => {
  moxios.uninstall();
});

it('can fetch a list of comments and display them', () => {
  const wrapper = mount(
    <Root>
      <App />
    </Root>
  );
  wrapper.find('#fetchComment').simulate('click');
  expect(wrapper.find('li').length).toBe(500);
});