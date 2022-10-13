import {createSlice} from '@reduxjs/toolkit';
import {MeState} from '../../store/Types/MeState';

const initialState: MeState = {
	fullName: 'Vladimir Fadin',
	job: 'Frontend developer',
	photo: '/me1.jpeg',
};

export const meSlice = createSlice({
	name: 'me',
	initialState,
	reducers: {},
});

export const meReducer = meSlice.reducer;
