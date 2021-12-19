import PropTypes from 'prop-types';

function BoardItem({board, No}) {
  return (
    <tr>
      <th scope="row">{No}</th>
      <td>{board.title}</td>
      <td>{board.content}</td>
      <td>{board.view_count}</td>
      <td>{board.insert_date}</td>
    </tr>
  );
}

BoardItem.prototype = {
  board: PropTypes.object,
  No: PropTypes.number,
};

export default BoardItem;
