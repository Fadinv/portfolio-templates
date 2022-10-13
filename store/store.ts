import {configureStore} from '@reduxjs/toolkit';
import expReducer from '../features/exp/expSlice';
import mobileMenuReducer from '../features/mobileMenu/mobileMenuSlice';
import meReducer from '../features/me/meSlice';
import pageReducer from '../features/page/pageSlice';
import skillsReducer from '../features/skills/skillsSlice';

export const store = configureStore({
	reducer: {
		mobileMenuReducer,
		meReducer,
		skillsReducer,
		pageReducer,
		expReducer,
	},
});

export type RootState = ReturnType<typeof store.getState>;