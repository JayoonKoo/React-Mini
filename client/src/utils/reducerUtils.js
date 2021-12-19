export function createReducer(actions, key) {
  return {
    [actions.pending]: state => state.setIn([key, 'loading'], true),
    [actions.success]: (state, action) =>
      state.setIn([key, 'loading'], false).setIn([key, 'data'], action.payload),
    [actions.fail]: (state, action) =>
      state
        .setIn([key, 'loading'], false)
        .setIn([key, 'error'], action.payload),
  };
}

export function createAsyncThunk(
  asyncActionCreator,
  promiseCreator,
  additional,
) {
  return (...params) => {
    return async (dispatch, getState) => {
      const {pending, success, fail} = asyncActionCreator;
      dispatch(pending());
      try {
        const result = await promiseCreator(...params);
        additional && additional(dispatch, getState);
        dispatch(success(result));
      } catch (error) {
        dispatch(fail(error));
      }
    };
  };
}
