import {createSlice} from '@reduxjs/toolkit';
import {MobileMenuState} from '../../store/Types/MobileMenuState';

const initialState: MobileMenuState = {
	isVisible: false,
};

export const mobileMenuSlice = createSlice({
	name: 'mobileMenu',
	initialState,
	reducers: {
		open: (state) => {
			state.isVisible = true;
		},
		close: (state) => {
			state.isVisible = false;
		},
	},
});

export const {open, close} = mobileMenuSlice.actions;

export default mobileMenuSlice.reducer;