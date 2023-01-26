import { useCallback, useContext, useRef } from 'react';
import { Store } from './store';

const Todo = () => {
  const inputEl = useRef<HTMLInputElement>(null);
  const {
    dispatch,
    state: { todos },
  } = useContext(Store)!;
  const addTodoHandler = useCallback(() => {
    if (
      inputEl.current?.value &&
      !todos.includes(inputEl.current.value)
    ) {
      dispatch({ type: 'ADD_TODO', payload: inputEl.current.value });
      inputEl.current.value = '';
    }
  }, []);

  return (
    <>
      <p>Todos</p>
      <ul>
        {todos.map(todo => (
          <li key={todo}>
            {todo}
            <button
              onClick={() => {
                dispatch({ type: 'DELETE_TODO', payload: todo });
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
