import boardService from 'api/boardService';
import {createAsyncThunk} from 'utils/reducerUtils';
import {boards, startUp} from '.';

export const getBoardsThunk = createAsyncThunk(boards, boardService.getBoards);
