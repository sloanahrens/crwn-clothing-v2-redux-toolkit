import { configureStore } from "@reduxjs/toolkit";

import { rootReducer } from './root-reducer';

// import { compose, createStore, applyMiddleware } from 'redux';
// import { persistStore, persistReducer } from 'redux-persist';
// import storage from 'redux-persist/lib/storage';
import logger from 'redux-logger';


const middleWares = [process.env.NODE_ENV === 'development' && logger].filter(
  Boolean
);

// const composeEnhancer =
//   (process.env.NODE_ENV !== 'production' &&
//     window &&
//     window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
//   compose;

// const persistConfig = {
//   key: 'root',
//   storage,
//   blacklist: ['user'],
// };

// const persistedReducer = persistReducer(persistConfig, rootReducer);

// const composedEnhancers = composeEnhancer(applyMiddleware(...middleWares));

// export const store = createStore(
//   persistedReducer,
//   undefined,
//   composedEnhancers
// );

// export const persistor = persistStore(store);

// // redux-toolkit adds its own default middleware; disable by adding a custom middleware array here;
// // to use both, or customize defaults, use the function approach
export const store = configureStore({
  reducer: rootReducer,
  // middleware: middleWares,
  // middleware: (getDefaultMiddleware) => getDefaultMiddleware({
  //   serializableCheck: false,
  // }).concat(middleWares),
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(middleWares),
});
