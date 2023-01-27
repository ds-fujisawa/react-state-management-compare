import useSWR, { Fetcher } from 'swr';

export const useSWRTodos = (): [string[], (todos: string[]) => void] => {
  const { data: todos, mutate: setTodos } = useSWR<string[]>('todos', null, {
    fallbackData: [],
  });
  return [todos!, setTodos];
};

type User = { id: string; name: string }[];
export const userFetcher: Fetcher<User> = (...args: Parameters<typeof fetch>) =>
  fetch(...args).then(res => res.json());

export const generateShortId = () =>
  crypto.getRandomValues(new Uint16Array(1)).join('');
