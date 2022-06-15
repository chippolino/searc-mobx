import React, { createContext, FC, ReactNode, useContext } from 'react';
import { createStore } from './store';

export const StoreContext = createContext<any | null>(createStore);

interface StoreProviderProps {
  children?: ReactNode;
  store: any;
}

export const StoreProvider: FC<StoreProviderProps> = ({ children, store }) => {
  return (
    <StoreContext.Provider value={store}>{children}</StoreContext.Provider>
  );
};

const useStore = () => {
  return useContext(StoreContext);
};

export default StoreProvider;
export { useStore };
