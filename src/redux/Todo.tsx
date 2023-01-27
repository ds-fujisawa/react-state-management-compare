import { useCallback, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { slice, StoreType } from './store';

const Todo = () => {
  const inputEl = useRef<HTMLInputElement>(null);
  const { todos } = useSelector((state: StoreType) => state);
  const dispatch = useDispatch();
  const addTodoHandler = useCallback(() => {
    if (inputEl.current?.value && !todos.includes(inputEl.current.value)) {
      dispatch(slice.actions.addTodo(inputEl.current.value));
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
                dispatch(slice.actions.delTodo(todo));
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
