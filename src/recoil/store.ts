import { atom } from 'recoil';

export const todosAtom = atom<string[]>({
  key: 'todos',
  default: [],
});
