import React from "react";
import { shallow } from "enzyme";

import App from "components/App";
import CommentBox from "components/CommentBox";
import CommentList from "components/CommentList";

let wrapper;

beforeEach(() => {
  wrapper = shallow(<App />);
})

it("shows the comment box comment component", () => {
  expect(wrapper.find(CommentBox).length).toBe(1);
});

it("shows the comment list component", () => {
  expect(wrapper.find(CommentList).length).toBe(1);
});

