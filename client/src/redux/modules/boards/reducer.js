import {Map} from 'immutable';
import {handleActions} from 'redux-actions';
import {boards} from './';
import {createReducer} from 'utils/reducerUtils';
import {CLEAN_START, SET_LENGTH, START_UP} from './action';

const initailState = Map({
  boards: Map({
    loading: false,
    data: null,
    error: null,
  }),
  board: Map({
    loading: false,
    data: null,
    error: null,
  }),
  start: 1,
  length: 10,
});

const reducer = handleActions(
  {
    ...createReducer(boards, 'boards'),
    [START_UP]: state => state.update('start', start => start + 1),
    [CLEAN_START]: state => state.set('start', 0),
    [SET_LENGTH]: (state, action) => state.set('lenght', action.payload.length),
  },
  initailState,
);

export default reducer;
