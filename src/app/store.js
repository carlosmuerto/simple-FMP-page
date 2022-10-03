import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/DELETEME/counterSlice';

const store = configureStore({
	reducer: {
		counter: counterReducer,
	},
});

export default store;
