import { useAtom } from 'jotai';
import { useCallback, useRef } from 'react';
import { todosAtom } from './store';

const Todo = () => {
  const inputEl = useRef<HTMLInputElement>(null);
  const [todos, setTodos] = useAtom(todosAtom);
  const addTodoHandler = useCallback(() => {
    if (inputEl.current?.value && !todos.includes(inputEl.current.value)) {
      setTodos([...todos, inputEl.current.value]);
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
                setTodos(todos.filter(t => t !== todo));
              }}
            >
              del
            </button>
          </li>
        ))}
      </ul>
      <input type="text" ref={inputEl} />
      <button onClick={addTodoHandler}>Add</button>
    </>
  );
};

export default Todo;
