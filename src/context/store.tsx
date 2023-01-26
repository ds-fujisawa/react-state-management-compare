import { createContext, FC, ReactNode, useReducer } from 'react';

/* Action */
type AddTodoAction = {
  type: 'ADD_TODO';
  payload: string;
};

type DeleteTodoAction = {
  type: 'DELETE_TODO';
  payload: string;
};

type ActionType = AddTodoAction | DeleteTodoAction;

/* Store */
type StateType = {
  todos: string[];
};

const initialState: StateType = {
  todos: [],
};

export type ContextType = {
  state: StateType;
  dispatch: React.Dispatch<ActionType>;
};

export const Store = createContext<ContextType | null>(null);

/* Reducer */
const reducer = (state = initialState, { type, payload }: ActionType) => {
  switch (type) {
    case 'ADD_TODO': {
      return {
        ...state,
        todos: [...state.todos, payload],
      };
    }
    case 'DELETE_TODO': {
      return {
        ...state,
        todos: state.todos.filter(s => s !== payload),
      };
    }
    default:
      return state;
  }
};

/* Provider */
export const Provider: FC<{ children: ReactNode }> = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <Store.Provider value={{ state, dispatch }}>{children}</Store.Provider>
  );
};
