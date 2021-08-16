import commentsReducer from "reducers/comments";
import { SAVE_COMMENT } from "actions/types";

it("handles actions of type save_comment", () => {
  const action = {
    type: SAVE_COMMENT,
    payload: "Test comment",
  };

  const state = commentsReducer([], action);
  expect(state).toEqual(["Test comment"]);
});

it("handles actions of type save_comment with unkown type", () => {
  const action = {
    type: "UNKNOWN_ACTION",
    payload: "Test comment",
  };

  const state = commentsReducer([], action);
  expect(state).toEqual([]);
});