import { create } from "zustand";

type State = {
  todos: string[],
  addTodo: (todo: string) => void,
  delTodo: (todo: string) => void
}

export const useStore = create<State>(set => ({
  todos: [],
  addTodo: todo => set(({ todos }) => ({todos: [...todos, todo]})),
  delTodo: todo => set(({ todos }) => ({todos: todos.filter(t => t !== todo)}))
}));
