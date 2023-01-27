import { useCallback, useRef } from 'react';
import { useSWRConfig } from 'swr';
import { useSWRTodos } from './store';

const Todo = () => {
  const inputEl = useRef<HTMLInputElement>(null);
  const [todos, setTodos] = useSWRTodos();
  const { cache } = useSWRConfig();
  console.log(cache.get('/user'));
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
