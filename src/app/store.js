import {configureStore} from '@reduxjs/toolkit'
import {todoReducer} from './features/todo/todoSlice'
import {persistReducer, persistStore} from 'redux-persist';
import storage from 'redux-persist/lib/storage/session';

const persistConfig = {
  key: 'root',
  storage,
};

const persistedReducer = persistReducer(persistConfig, todoReducer);

export const store = configureStore({
  reducer: persistedReducer
})

export const persistor = persistStore(store);