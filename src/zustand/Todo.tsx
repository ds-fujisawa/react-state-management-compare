import { useCallback, useRef } from 'react';
import { useStore } from './store';

const Todo = () => {
  const inputEl = useRef<HTMLInputElement>(null);
  const { todos, addTodo, delTodo } = useStore();
  const addTodoHandler = useCallback(() => {
    if (
      inputEl.current?.value &&
      !todos.includes(inputEl.current.value)
    ) {
      addTodo(inputEl.current.value);
      inputEl.current.value = '';
    }
  }, [todos]);

  return (
    <>
      <p>Todos</p>
      <ul>
        {todos.map(todo => (
          <li key={todo}>
            {todo}
            <button
              onClick={() => {
                delTodo(todo);
              }}
            >
              del
            </button>
          </li>
        ))}
      </ul>
      <input type="text" ref={inputEl} />
      <button onClick={addTodoHandler}>
        Add
      </button>
    </>
  );
};

export default Todo;
