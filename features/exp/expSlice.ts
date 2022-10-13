import {createSlice} from '@reduxjs/toolkit';
import {ExpState} from '../../store/Types/ExpState';

const initialState: ExpState = {
	slider: [
		{
			caption: 'Фото',
			items: [
				{photo: '/landing-fon-2.png'},
				{photo: '/landing-fon.png'},
				{photo: '/landing-fon-3.png'},
			]
		},
		{
			caption: 'Фото 2',
			items: [
				{photo: '/landing-fon-2.png'},
				{photo: '/landing-fon.png'},
				{photo: '/landing-fon-3.png'},
			]
		}
	],
};

export const expSlice = createSlice({
	name: 'slider',
	initialState,
	reducers: {},
});

export const expReducer = expSlice.reducer;