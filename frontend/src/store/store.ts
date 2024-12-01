import {combineReducers, configureStore} from '@reduxjs/toolkit';
import {rememberReducer, rememberEnhancer} from 'redux-remember';
import {timerReducer} from "./reducers/timerSlice";
import {signatureApi} from "./reducers/signatureApi";

const rememberedReducers = [
    'timerReducer',
];

const rootReducer = combineReducers({
    timerReducer,
    [signatureApi.reducerPath]: signatureApi.reducer,

});

const rememberedReducer = rememberReducer(rootReducer);

export const store = configureStore({
    reducer: rememberedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false,
        }).concat(signatureApi.middleware),

    enhancers: (getDefaultEnhancer) =>
        getDefaultEnhancer().concat(rememberEnhancer(window.localStorage, rememberedReducers)),
});

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = typeof store;
export type AppDispatch = AppStore['dispatch'];
