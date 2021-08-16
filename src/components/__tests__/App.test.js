import React from "react";
import { shallow } from "enzyme";

import App from "components/App";
import CommentBox from "components/CommentBox";
import CommentList from "components/CommentList";

it("shows the comment box comment component", () => {
  const wrapper = shallow(<App />);
  expect(wrapper.find(CommentBox).length).toBe(1);
});

it("shows the comment list component", () => {
  const wrapper = shallow(<App />);
  expect(wrapper.find(CommentList).length).toBe(1);
});
