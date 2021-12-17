import {Map} from 'immutable';
import {handleActions} from 'redux-actions';
import {boards} from './';
import {createReducer} from 'utils/reducerUtils';

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
});

const reducer = handleActions(
  {
    ...createReducer(boards, 'boards'),
  },
  initailState,
);

export default reducer;
