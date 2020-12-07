import { createStore, applyMiddleware } from 'redux';
import { createWrapper } from 'next-redux-wrapper';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import thunk from 'redux-thunk';

import rootReducer from '../reducers';

const makeStore = ({ isServer }) => {
  if (isServer) {
    return createStore(rootReducer, applyMiddleware(thunk));
  }

  const persistConfig = {
    key: 'root',
    storage
  };

  const persistedReducer = persistReducer(persistConfig, rootReducer);

  const store = createStore(persistedReducer, applyMiddleware(thunk));

  store.__persistor = persistStore(store);

  return store;
};

const storeWrapper = createWrapper(makeStore);

export default storeWrapper;
