import { configureStore, combineReducers } from "@reduxjs/toolkit";
import authReducer from "./auth";
import soundAuthSlice from "./sound";

// export const makeStore = () => {
//   return configureStore({
//     reducer: { authReducer },
//   });
// };

// import { configureStore, combineReducers } from "@reduxjs/toolkit";
import {
  persistReducer,
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";

// Combine all reducers
const rootReducer = combineReducers({
  auth: authReducer,
  sound: soundAuthSlice,
});

// Persist configuration
const persistConfig = {
  key: "root",
  storage,
};

// Wrap rootReducer with persistReducer
const persistedReducer = persistReducer(persistConfig, rootReducer);

// Create the store
const store = configureStore({
  reducer: persistedReducer,
  devTools: process.env.NODE_ENV !== "production",
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

// Create the persistor
const persistor = persistStore(store);

export { store, persistor };

// import {
//   persistReducer,
//   persistStore,
//   FLUSH,
//   REHYDRATE,
//   PAUSE,
//   PERSIST,
//   PURGE,
//   REGISTER,
// } from "@redux-persist";
// import storage from "redux-persist/lib/storage";
// //logger powerful tool that allows you to visualize the flow of actions, state changes, and errors in your Redux application
// import logger from "redux-logger";

// const persistConfig = {
//   key: "root",
//   storage,
// };

// const persistedReducer = persistReducer(persistConfig, authReducer);

// const rootReducer = combineReducers({
//   auth: persistedReducer,
//   products: productsReducer,
// });
// //ConfigureStore simplifies the process of creating a Redux store.
// const store = configureStore({
//   devTools: process.env.NODE_ENV !== "production",
//   reducer: rootReducer,
//   middleware: (getDefaultMiddleware) =>
//     getDefaultMiddleware({
//       serializableCheck: {
//         ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
//       },
//     }), //.concat(logger),
// });

// const persistor = persistStore(store);

// export { store, persistor };

// export type AppStore = ReturnType<typeof makeStore>
// // Infer the `RootState` and `AppDispatch` types from the store itself
// export type RootState = ReturnType<AppStore['getState']>
// export type AppDispatch = AppStore['dispatch']
