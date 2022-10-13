import cn from 'classnames';
import React, {useState} from 'react';
import {InView} from 'react-intersection-observer';
import Menu from '../Menu/Menu';
import css from './styles.module.sass';

interface SkillsProps {
	onChangePage(page: 'home' | 'skills' | 'aboutMe' | 'contacts' | 'exp'): void;
	collapse?: boolean;
}

const Contacts: React.FC<SkillsProps> = ({onChangePage, collapse}) => {
	const [loaded, setLoaded] = useState(false);

	React.useEffect(() => {
		setLoaded(true);
	}, []);

	return (
		<InView>
			{({ref, inView}) => (
				<div
					ref={ref}
					className={cn(css['contacts'], {
						[css['_loaded']]: loaded && inView,
						[css['_collapse']]: collapse,
					})}
				>

				</div>
			)}
		</InView>
	);
};

export default Contacts;