import {createAction, createActions} from 'redux-actions';

const prefixBoards = 'client/boards';
const prefixBoard = 'client/board';
export const START_UP = 'client/start/START_UP';
export const CLEAN_START = 'client/start/CLEAN_START';
export const SET_LENGTH = 'client/start/SET_LENGTH';

export const boards = createActions('PENDING', 'SUCCESS', 'FAIL', {
  prefix: prefixBoards,
});

export const board = createActions('PENDING', 'SUCCESS', 'FAIL', {
  prefix: prefixBoard,
});

export const startUp = createAction(START_UP);
export const cleanStart = createAction(CLEAN_START);
export const setLength = createAction(SET_LENGTH);
