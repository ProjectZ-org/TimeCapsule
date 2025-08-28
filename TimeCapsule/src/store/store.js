import {configureStore} from '@reduxjs/toolkit';
import authservice from './authSlice'

const store = configureStore({
    reducer: {   
        auth: authservice,
        //Add your reducers here 
    }
});


export default store;