import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {PageState} from '../../store/Types/PageState';

const initialState: PageState = {
	alias: 'home',
};

export const pageSlice = createSlice({
	name: 'page',
	initialState,
	reducers: {
		change: (state, action: PayloadAction<PageState['alias']>) => {
			state.alias = action.payload;
		},
	},
});

export const {change} = pageSlice.actions;

export default pageSlice.reducer;