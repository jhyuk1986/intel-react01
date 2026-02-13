import "./TodoList.css";
import { useState, useEffect } from "react";

const todoList = [
  { id: 1, task: "첫번째할일!", isDone: false },
  { id: 2, task: "두번째할일", isDone: true },
  { id: 3, task: "세번째할일", isDone: false },
];

function TodoItem({ todo, isDoneToggle, deleteTodo }) {
  return (
    <li className={todo.isDone ? "completed" : ""}>
      <input
        type="checkbox"
        defaultChecked={todo.isDone}
        onChange={() => {
          isDoneToggle(todo.id);
        }}
      />
      <span>{todo.task}</span>
      <button
        onClick={() => {
          deleteTodo(todo.id);
        }}
      >
        ✖️
      </button>
    </li>
  );
}

function TodoList() {
  //로컬스토리지 데이터로 초기화
  const [todos, setTodos] = useState(() => {
    const saved = localStorage.getItem("todos");
    return saved ? JSON.parse(saved) : [];
  });
  const [todoValue, setTodoValue] = useState("");
  const addTodo = () => {
    console.log("할일추가");

    if (!todoValue.trim()) return;

    //1.할 일을 추가해서 새로운 할 일 배열 만들기
    const newTodos = [
      ...todos,
      { id: Date.now(), task: todoValue.trim(), isDone: false },
    ];

    console.log(Date.now());
    //2. 기존 할 일을 새로운 할 일로 바꾸기
    setTodos(newTodos);
    setTodoValue("");
  };

  //토글함수
  function isDoneToggle(id) {
    const newTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, isDone: !todo.isDone } : todo,
    );
    setTodos(newTodos);
  }

  //할일삭제
  function deleteTodo(id) {
    const newTodos = todos.filter((todo) => todo.id !== id);
    setTodos(newTodos);
  }
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <div className="container">
      <h1>📝 Todo List</h1>
      <div className="input-box">
        <input
          type="text"
          placeholder="할 일을 입력하세요"
          value={todoValue}
          onChange={(e) => {
            setTodoValue(e.target.value);
          }}
          onKeyUp={(e) => {
            if (e.key === "Enter") {
              addTodo();
            }
          }}
        />
        <button onClick={addTodo}>추가</button>
      </div>
      <ul className="todo-list">
        {/* 투두리스트 비어있으면 멘트 출력 */}
        {todos.length === 0 ? (
          <p className="empty-message">
            추가된 할 일이 없습니다. 할 일을 추가해주세요
          </p>
        ) : (
          todos.map((item) => (
            <TodoItem
              key={item.id}
              todo={item}
              isDoneToggle={isDoneToggle}
              deleteTodo={deleteTodo}
            />
          ))
        )}
      </ul>
    </div>
  );
}

export default TodoList;
