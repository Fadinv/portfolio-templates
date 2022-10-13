import cn from 'classnames';
import React, {createRef, useEffect, useState} from 'react';
import {useDispatch} from 'react-redux';
import {change} from '../features/page/pageSlice'
import AboutMe from './Components/AboutMe/aboutMe';
import Contacts from './Components/Contacts/contacts';
import Exp from './Components/Exp/exp';
import Me from './Components/Me/me';
import Menu from './Components/Menu/Menu';
import Skills from './Components/Skills/skills';
import styles from './index.module.sass';

export default function Home() {
	const dispatch = useDispatch();

	const [isLoaded, setIsLoaded] = useState(false);
	const [collapse, setCollapse] = useState(false);
	const [index, setIndex] = useState(0);
	const scrollRef = createRef<HTMLDivElement>();
	const [page, setPage] = useState<'home' | 'skills' | 'aboutMe' | 'contacts' | 'exp'>('home');

	useEffect(() => {
		setIsLoaded(true);
		window.document.title = 'Fadin Vladimir';
	}, []);

	useEffect(() => {
		if (!isLoaded) return;
		setCollapse(true);

		setTimeout(() => {
			if (page === 'home') setIndex(0);
			if (page === 'skills') setIndex(1);
			if (page === 'aboutMe') setIndex(2);
			if (page === 'exp') setIndex(3);
			if (page === 'contacts') setIndex(4);
			setCollapse(false);
			dispatch(change(page))
		}, 1000);
	}, [page]);

	return (
		<div
			ref={scrollRef}
			style={{opacity: isLoaded ? '1' : '0'}}
			className={cn(styles.Index, {[styles['_white']]: index !== 0})}
		>
			<div className={styles.Index__wrap}>
				<Menu view={index !== 0} onChangePage={(p) => setPage(p)}/>
				{index === 0 && <Me
					collapse={collapse}
					onChangePage={(p) => setPage(p)}
				/>}
				{index === 1 && <Skills
					collapse={collapse}
					onChangePage={(p) => setPage(p)}
				/>}
				{index === 2 && <AboutMe
                    collapse={collapse}
                    onChangePage={(p) => setPage(p)}
                />}
				{index === 3 && <Exp
                    collapse={collapse}
                    onChangePage={(p) => setPage(p)}
                />}
				{index === 4 && <Contacts
                    collapse={collapse}
                    onChangePage={(p) => setPage(p)}
                />}
			</div>
		</div>
	);
}
