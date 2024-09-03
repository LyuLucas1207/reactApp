import { configureStore } from '@reduxjs/toolkit';
import billReducer from './modules/billStore';

const rootStore = configureStore({
    reducer: {
        bill: billReducer,
    },
});

export default rootStore;