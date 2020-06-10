import React from 'react';
import store from './redux/redux-store';
import { ProviderType } from './types/types';

const StoreContext = React.createContext( store );

export const Provider = ( props: ProviderType ) => {
  return (
    <StoreContext.Provider value={ props.store }>
      { props.children }
    </StoreContext.Provider>
  );
};

export default StoreContext;
