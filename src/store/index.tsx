import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import reduxSagaReducer from '../reducer';
import mySaga from '../saga';

const sagaMiddleware = createSagaMiddleware();

export function configureReduxStore() {
  const store = configureStore({
    reducer: reduxSagaReducer,
    middleware: (getMiddleware) => getMiddleware().concat(sagaMiddleware),
  });

  sagaMiddleware.run(mySaga);

  return store;
}
