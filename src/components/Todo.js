import PropTypes from "prop-types";

function Todo({ todo }) {
  const { id, content } = todo;

  return (
    <li>
      <p>{content}</p>
    </li>
  );
}

Todo.propTypes = {
  todo: PropTypes.object.isRequired,
};

export default Todo;
