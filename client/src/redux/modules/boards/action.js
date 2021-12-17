import {createActions} from 'redux-actions';

const prefixBoards = 'client/boards';
const prefixBoard = 'client/board';

export const boards = createActions('PENDING', 'SUCCESS', 'FAIL', {
  prefix: prefixBoards,
});

export const board = createActions('PENDING', 'SUCCESS', 'FAIL', {
  prefix: prefixBoard,
});
