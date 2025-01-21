import "./List.css";
import TodoItem from "./TodoItem";

const List = ({ todos }) => {
  return (
    <div className="List">
      <h3>Todo List</h3>
      <input type="text" placeholder="검색어를 입력하세요" />
      <div className="todos_wrapper">
        {todos.map((todo) => {
          return <TodoItem {...todo} />;
        })}
      </div>
    </div>
  );
};

export default List;
