import { observer } from 'mobx-react-lite';
import { FC } from 'react';
import { useStore } from './context';

const Search: FC = observer(() => {
  const store = useStore();
  if (!store) throw new Error('Store shouldnt be null');

  const { query, setQuery } = store;

  return (
    <input
      value={query.get()}
      onChange={(e) => setQuery(e.target.value)}
      type='text'
    />
  );
});

export default Search;
