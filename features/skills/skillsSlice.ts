import {createSlice} from '@reduxjs/toolkit';
import {SkillsState} from '../../store/Types/SkillsState';

const initialState: SkillsState = {
	items: [
		{
			caption: 'Hard lvl',
			list: [
				{caption: 'React'},
				{caption: 'Redux'},
				{caption: 'Javascript'},
				{caption: 'Typescript'},
				{caption: 'CSS'},
				{caption: 'Sass / Scss'},
			],
		},
		{
			caption: 'Medium lvl',
			list: [
				{caption: 'Next.js'},
				{caption: 'Webpack'},
				{caption: 'graphql'},
				{caption: 'apollo'},
				{caption: 'vue.js'},
			],
		},
		{
			caption: 'Elementary lvl',
			list: [
				{caption: 'Node.js'},
				{caption: 'express'},
				{caption: 'mikro-orm'},
				{caption: 'postgresql'},
				{caption: 'docker'},
				{caption: 'python'},
			],
		},
	],
};

export const meSlice = createSlice({
	name: 'me',
	initialState,
	reducers: {},
});

export const {} = meSlice.actions;

export default meSlice.reducer;
