import { SAVE_COMMENT } from 'actions/types';
import { saveComment } from 'actions';

describe('saveComment', () => {
  it('has the correct type', () => {
    const action = saveComment();
    expect(action.type).toBe(SAVE_COMMENT);
  });
  it('has the correct payload', () => {
    const action = saveComment('test comment');
    expect(action.payload).toBe('test comment');
  });
});