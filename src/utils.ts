import { Fetcher } from 'swr';

type User = { id: string; name: string }[];
export const userFetcher: Fetcher<User> = (...args: Parameters<typeof fetch>) =>
  fetch(...args).then(res => res.json());
export const saveFetcher: Fetcher<User> = (...args: Parameters<typeof fetch>) =>
  fetch(...args).then(res => res.json());

export const generateShortId = () =>
  crypto.getRandomValues(new Uint16Array(1)).join('');
