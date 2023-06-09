import { combineReducers } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';


import authReducer from './auth/authSlice';
import contactsReducer from './contactsSlice/contactsSlice';
import filterReducer from './filterSlice/filterSlice';

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["token"],
}

const persistedAuthReducer = persistReducer(persistConfig, authReducer)

export const rootReducer = combineReducers({
  auth: persistedAuthReducer,
  contacts: contactsReducer,
  filter: filterReducer,
});
