import { observer } from 'mobx-react-lite';
import { FC } from 'react';
import { useStore } from './context';

export const CityView: FC<{ cities: string[] }> = ({ cities }) => {
  return (
    <ul>
      {cities.map((city, key) => (
        <li key={key}>{city}</li>
      ))}
    </ul>
  );
};

export const CityList = observer(() => {
  const store = useStore();
  if (!store) throw Error('Store shouldn be null');
  return <CityView cities={store.filteredCities} />;
});

export default CityList;
