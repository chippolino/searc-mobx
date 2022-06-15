import React from 'react';

import './App.css';
import CityList from './city';
import { StoreProvider, useStore } from './context';
import Search from './search';

function App() {
  const store = useStore();
  return (
    <StoreProvider store={store}>
      <div className='App'>
        <header className='App-header'>
          <Search />
          <CityList />
        </header>
      </div>
    </StoreProvider>
  );
}

export default App;
