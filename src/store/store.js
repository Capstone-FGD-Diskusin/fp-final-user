import { configureStore } from "@reduxjs/toolkit"
import { combineReducers } from "redux"
import slice from "./slice"
import storage from "redux-persist/lib/storage"
import { persistReducer, persistStore } from "redux-persist"

const reducers = combineReducers({
    dataUser: slice
})

const persistConfig = {
    key: "root",
    storage
}

const persistedReducer = persistReducer(persistConfig, reducers)

const store = configureStore({reducer: persistedReducer})
const persistor = persistStore(store)

export {store, persistor}