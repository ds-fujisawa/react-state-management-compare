import useSWR from 'swr';

export const useSWRTodos = (): [string[], (todos: string[]) => void] => {
  const { data: todos, mutate: setTodos } = useSWR<string[]>('todos', null, {
    fallbackData: [],
  });
  return [todos!, setTodos];
};
