//Config for redux globel store
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk'
import rootReducer from '../Redux/Reducers/index';
import { persistStore, persistReducer } from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';

const middleware = [
  thunk,
  // logger
]

// Middleware: Redux Persist Config
const persistConfig = {
  // Root
  key: 'root',
  // Storage Method (React Native)
  storage: AsyncStorage,
};

// Middleware: Redux Persist Persisted Reducer
const persistedReducer = persistReducer(persistConfig, rootReducer);
// Redux: Store
const store = createStore(
  persistedReducer,
  applyMiddleware(thunk)
);
// Middleware: Redux Persist Persister
let persistor = persistStore(store);
// Exports
export {
  store,
  persistor,
};

// export default configReduxStore = (initialState = {}) => {
//   return createStore(
//     rootReducer,
//     initialState,
//     compose(applyMiddleware(...middleware)))
// }
