import { useCallback, useRef } from 'react';
import useSWR, { mutate } from 'swr';
import useSWRMutation from 'swr/mutation';
import Loading from '../Loading';
import { generateShortId, userFetcher } from './store';

const User = () => {
  const inputEl = useRef<HTMLInputElement>(null);
  const { data, isLoading } = useSWR('/user', userFetcher, {
    fallbackData: [],
  });
  const { trigger, isMutating } = useSWRMutation('/save', async () => {
    const formData = new FormData();
    formData.append('data', JSON.stringify(data));
    const res = await fetch('/save', { method: 'POST', body: formData });
    return await res.json();
  });

  const addUserHandler = useCallback(() => {
    if (inputEl.current?.value) {
      mutate(
        '/user',
        [...data, { id: generateShortId(), name: inputEl.current.value }],
        false
      );
      inputEl.current.value = '';
    }
  }, [data]);

  if (!data || isLoading || isMutating) return <Loading />;

  return (
    <>
      <p>Users</p>
      <ul>
        {data.map(({ id, name }) => (
          <li key={id}>
            {name}
            <button
              onClick={() => {
                mutate(
                  '/user',
                  data.filter(d => d.id !== id),
                  false
                );
              }}
            >
              del
            </button>
          </li>
        ))}
      </ul>
      <input type="text" ref={inputEl} />
      <button onClick={addUserHandler}>Add</button>
      <div>
        <button
          onClick={() => {
            trigger('/save');
          }}
        >
          Save
        </button>
      </div>
    </>
  );
};

export default User;
