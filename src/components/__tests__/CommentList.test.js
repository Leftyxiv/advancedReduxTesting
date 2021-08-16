import React from "react";
import { mount } from "enzyme";

import Root from "root";
import CommentList from "components/CommentList";

let wrapped;

beforeEach(() => {
  const initialState = {
    comments: ["comment 1", "comment 2"],
  };

  wrapped = mount(
    <Root initialState={initialState}>
      <CommentList />
    </Root>,
  );
});

it("shows one li per element", () => {
  expect(wrapped.find("li").length).toBe(2);
});

it('shows the text from each comment', () => {
  expect(wrapped.render().text()).toEqual("comment 1comment 2");
});