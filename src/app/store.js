import { configureStore } from "@reduxjs/toolkit";
import globalReducer from '../features/globalSlice/globalSlice';

export default configureStore({
    middleware: getDefaultMiddleware => getDefaultMiddleware({
        serializableCheck:false
    }),
    reducer:{
        global: globalReducer
    }
});