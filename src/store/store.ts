import AsyncStorage from '@react-native-async-storage/async-storage';
import {persistReducer, persistStore} from 'redux-persist';
import rootReducer from './slices';
import {configureStore} from '@reduxjs/toolkit';
import {TypedUseSelectorHook, useDispatch, useSelector} from 'react-redux';

const reducers = persistReducer(
  {
    key: 'root',
    storage: AsyncStorage,
    whitelist: ['Auth'],
  },
  rootReducer,
);

export const Store = configureStore({
  reducer: reducers,
  middleware: getDefaultMiddleware =>
    __DEV__
      ? getDefaultMiddleware({
          serializableCheck: false,
        })
      : getDefaultMiddleware(),
  devTools: __DEV__,
});

export type RootState = ReturnType<typeof Store.getState>;
export type AppDispatch = typeof Store.dispatch;

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
// // PersistStore contains all the data from store ----->>>>>
export const Persistor = persistStore(Store);
