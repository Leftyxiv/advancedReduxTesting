import { SAVE_COMMENT, FETCH_COMMENTS } from 'actions/types';
import axios from 'axios';

export function saveComment(comment) {
  return {
    type: SAVE_COMMENT,
    payload: comment,
  };
}

export async function fetchComments() {
  const res = await axios.get('http://jsonplaceholder.typicode.com/comments');
  return {
    type: FETCH_COMMENTS,
    payload: res,
  }
}