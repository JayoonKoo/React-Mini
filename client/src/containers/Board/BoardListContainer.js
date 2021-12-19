import BoardList from 'component/board/BoardList';
import React from 'react';
import {useEffect} from 'react';
import {useDispatch} from 'react-redux';
import {useSelector} from 'react-redux';
import {Spinner} from 'reactstrap';
import {getBoardsThunk} from 'redux/modules/boards/thunk';

const BoardListContainer = () => {
  const {boards, start, length} = useSelector(state => ({
    boards: state.boards.get('boards'),
    start: state.boards.get('start'),
    length: state.boards.get('length'),
  }));
  const dispatch = useDispatch();

  const {loading, data, error} = {
    loading: boards.get('loading'),
    data: boards.get('data'),
    error: boards.get('error'),
  };

  useEffect(() => {
    dispatch(getBoardsThunk(start, length));
  }, [dispatch, start, length]);

  if (loading && !data) return <Spinner />;
  if (error) return <div>{error.message}</div>;
  if (!data) return null;

  return <BoardList start={start} boards={data.json} />;
};

export default BoardListContainer;
