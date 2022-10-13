import cn from 'classnames';
import React, {useState} from 'react';
import {InView} from 'react-intersection-observer';
import {useSelector} from 'react-redux';
import {RootState} from '../../store/store';
import Box from '../Box/Box';
import css from './styles.module.sass';

interface SkillsProps {
	onChangePage(page: 'home' | 'skills' | 'aboutMe' | 'contacts' | 'exp'): void;
	collapse?: boolean;
}

const Skills: React.FC<SkillsProps> = ({onChangePage, collapse}) => {
	const [loaded, setLoaded] = useState(false);

	React.useEffect(() => {
		setLoaded(true);
	}, []);

	const items = useSelector((store: RootState) => store.skillsReducer.items);

	return (
		<InView>
			{({ref, inView}) => (
				<div
					ref={ref}
					className={cn(css['skills'], {
						[css['_loaded']]: loaded && inView,
						[css['_collapse']]: collapse,
					})}
				>
					<div className={css['skills__wrap']}>
						{items.map((el, key) => <Box key={key} caption={el.caption} list={el.list}/>)}
					</div>
				</div>
			)}
		</InView>
	);
};

export default Skills;