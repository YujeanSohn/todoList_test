import PropTypes from "prop-types";

function Input({ content, todos, setContent, setTodos }) {
  const handleContentChange = (event) => {
    setContent(event.target.value);
  };

  const handleAddTodo = () => {
    if (content.length !== 0) {
      const todo = {
        id: Date.now(),
        content: content,
      };

      setTodos([...todos, todo]);

      setContent("");
      return;
    }

    alert("내용을 모두 작성해주세요");
  };

  return (
    <div className="input">
      <div>
        <input
          value={content}
          onChange={handleContentChange}
          type="text"
          placeholder="내용을 입력해주세요"
        />
        <button onClick={handleAddTodo}>추가하기</button>
      </div>
    </div>
  );
}

Input.propTypes = {
  content: PropTypes.string.isRequired,
  todos: PropTypes.arrayOf(PropTypes.object).isRequired,
  setContent: PropTypes.func.isRequired,
  setTodos: PropTypes.func.isRequired,
};

export default Input;
