import React from "react";
import { mount } from "enzyme";
import Root from 'root';

import CommentBox from "components/CommentBox";

let component;

beforeEach(() => {
  component = mount(
  <Root>
    <CommentBox />
  </Root> );
});

afterEach(() => {
  component.unmount();
});

it("has a text area and two buttons", () => {
  expect(component.find("textarea").length).toBe(1);
  expect(component.find("button").length).toBe(2);
});

describe("the text area", () => {
  beforeEach(() => {
    component.find("textarea").simulate("change", { target: { value: "Hello" } });
  });

  it("lets users input text into the text area", () => {
    component.update();
    expect(component.find("textarea").prop("value")).toBe("Hello");
  });

  it("clears out the text area after the form is submitted", () => {
    component.update();
    component.find("#submit").simulate("click");
    component.update();
    expect(component.find("textarea").prop("value")).toBe("");
  });
});
// console.log(wrapped.find("textarea").length);
