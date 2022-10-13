import cn from 'classnames';
import React, {useState} from 'react';
import {InView} from 'react-intersection-observer';
import ExpElement from './ExpElement/ExpElement';
import css from './styles.module.sass';

interface SkillsProps {
	onChangePage(page: 'home' | 'skills' | 'aboutMe' | 'contacts' | 'exp'): void;
	collapse?: boolean;
}

const Exp: React.FC<SkillsProps> = ({onChangePage, collapse}) => {
	const [loaded, setLoaded] = useState(false);

	React.useEffect(() => {
		setLoaded(true);
	}, []);

	return (
		<InView>
			{({ref, inView}) => (
				<div
					ref={ref}
					className={cn(css['exp'], {
						[css['_loaded']]: loaded && inView,
						[css['_collapse']]: collapse,
					})}
				>
					<div className={css['exp__box']}>
						<ExpElement
							caption={'Landing для fonbet'}
							imageUrl={'/landing-fon-1.png'}
							redirectUrl={'https://www.fon.bet/loyalty/vip-status/?n=%D0%9A%D0%B8%D1%80%D0%B8%D0%BB%D0%BB&t=7&p=79161218601&r=2'}
						/>
						<ExpElement
							caption={'Корпоративный сайт'}
							imageUrl={'/24h-soft.png'}
							redirectUrl={'https://24hsoft.com/'}
						/>
					</div>
				</div>
			)}
		</InView>
	);
};

export default Exp;