import React from 'react';
import Propstypes from 'prop-types';
import {Table} from 'reactstrap';
import BoardItem from './BoardItem';

function BoardList({boards, start}) {
  return (
    <Table hover>
      <thead>
        <tr>
          <th>No.</th>
          <th>제목</th>
          <th>내용</th>
          <th>조회수</th>
          <th>작성일</th>
        </tr>
      </thead>
      <tbody>
        {boards.map((board, i) => (
          <BoardItem
            No={(start - 1) * 10 + i + 1}
            key={board.id}
            board={board}
          />
        ))}
      </tbody>
    </Table>
  );
}

BoardList.prototype = {
  boards: Propstypes.array,
  start: Propstypes.number,
};

export default BoardList;
