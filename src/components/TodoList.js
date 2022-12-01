import Todo from "./Todo";
import PropTypes from "prop-types";

function TodoList({ todos }) {
  return (
    <div>
      {todos.length !== 0 ? (
        todos.map((v) => <Todo key={v.id} todo={v} />)
      ) : (
        <p>추가된 할 일이 없습니다.</p>
      )}
    </div>
  );
}

TodoList.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default TodoList;
