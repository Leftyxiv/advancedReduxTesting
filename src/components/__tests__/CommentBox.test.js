import React from "react";
import { mount } from "enzyme";

import CommentBox from "components/CommentBox";

let component;

beforeEach(() => {
  component = mount(<CommentBox />);
});

afterEach(() => {
  component.unmount();
});

it("has a text area and a button", () => {
  expect(component.find("textarea").length).toBe(1);
  expect(component.find("button").length).toBe(1);
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
    component.find("button").simulate("click");
    component.update();
    expect(component.find("textarea").prop("value")).toBe("");
  });
});
// console.log(wrapped.find("textarea").length);
