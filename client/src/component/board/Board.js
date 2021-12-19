import BoardListContainer from 'containers/Board/BoardListContainer';
import React from 'react';
import {Container} from 'reactstrap';

const Board = props => {
  return (
    <Container>
      <BoardListContainer />
    </Container>
  );
};

export default Board;
