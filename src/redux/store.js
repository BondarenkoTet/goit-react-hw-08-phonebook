import { configureStore } from "@reduxjs/toolkit";
import {contactsReducer } from "redux/contactsSlice" ;
import { filterReducer } from "redux/filterSlice";
import { authReducer } from "./auth/auth.slice";
import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';


const authPersistConfig = {
    key: 'auth',
    storage,
    whitelist: ['token'],
};

export const store = configureStore({
    reducer: {
        auth: persistReducer(authPersistConfig, authReducer),
        contacts: contactsReducer,
        filter: filterReducer
    },
    middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
        serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        },
    })
});
export const persistor = persistStore(store);


// import { configureStore } from "@reduxjs/toolkit";
// import {contactsReducer } from "redux/contactsSlice" ;
// import { filterReducer } from "redux/filterSlice";
// import {
//     persistStore,
//     persistReducer,
//     FLUSH,
//     REHYDRATE,
//     PAUSE,
//     PERSIST,
//     PURGE,
//     REGISTER, } from 'redux-persist';
// import storage from 'redux-persist/lib/storage';
// import { authReducer } from "./authSlice/authSlice";

// const authPersistConfig = {
//     key: 'auth',
//     storage,
//     whitelist: ['token'],
// };

// export const store = configureStore({
//     reducer: {
//         auth: persistReducer(authPersistConfig, 
//             authReducer
//             ),
//         contacts: contactsReducer,
//         filter: filterReducer
//     },
//     middleware: getDefaultMiddleware =>
//     getDefaultMiddleware({
//         serializableCheck: {
//         ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
//         },
//     })
// });

// export const persistor = persistStore(store);



// export const store = configureStore({
//     reducer: {
//         contacts: contactsReducer,
//         filter: filterReducer,
//     },
// });
    
// import {
//     FLUSH,
//     REHYDRATE,
//     PAUSE,
//     PERSIST,
//     PURGE,
//     REGISTER, } from 'redux-persist';

    
        // middleware (getDefaultMiddleware) { 
        //             return getDefaultMiddleware({
        //             serializableCheck: {
        //                 ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        //             },
                
    //}});



// import {
//     persistStore,
//     persistReducer,
//     FLUSH,
//     REHYDRATE,
//     PAUSE,
//     PERSIST,
//     PURGE,
//     REGISTER,
// } from 'redux-persist';
// import storage from 'redux-persist/lib/storage'

// const persistConfig = {
//     key: 'contacts',
//     storage,
//     whitelist: ['contacts'],
//     }

// export const store = configureStore({
//     reducer: inputReducer,
//     middleware (getDefaultMiddleware) { 
//         return getDefaultMiddleware({
//         serializableCheck: {
//             ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
//         },
//     });
//     },
// });

// export const persistor = persistStore(store)
