import { configureStore } from '@reduxjs/toolkit';
import contactsReducer from './contactsSlice';
import filtersReducer from './filtersSlice';

import storage from 'redux-persist/lib/storage'; // localStorage
import { persistReducer, persistStore } from 'redux-persist';
import { combineReducers } from 'redux';

const contactsPersistConfig = {
  key: 'contacts',
  storage,
  whitelist: ['items'], // зберігаємо лише масив контактів
};

const rootReducer = combineReducers({
  contacts: persistReducer(contactsPersistConfig, contactsReducer),
  filters: filtersReducer,
});

export const store = configureStore({
  reducer: rootReducer,
});

export const persistor = persistStore(store);
