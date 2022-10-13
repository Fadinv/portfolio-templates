import React, {useEffect, useState} from 'react';
import {InView} from 'react-intersection-observer';
import Photo from './photo/photo';
import css from './styles.module.sass';
import cn from 'classnames';

interface MeProps {

}

const Me: React.FC<MeProps> = () => {
	//
	// return (
	// 	<div className={css['me']}>
	//
	// 	</div>
	// )
	const [mounted, setMounted] = useState(false);
	const [showButtons, setShowButtons] = useState(false);

	useEffect(() => {
		setMounted(true);
	}, [])
	return (
		<InView>
			{({ref, inView}) => (
				<div ref={ref} className={css.me}>
					<div className={css.me__flexRow}>
						<Photo/>
						<div className={css.me__info}>
							<span className={cn(css.me__name, {[css._animate]: inView})}>Vladimir Fadin</span>
							<span className={cn(css.me__job, {[css._animate]: inView})}>Frontend developer</span>
							<div className={cn(css.me__socialsBox, {[css._animate]: inView})}>
								{/*<Socials/>*/}
							</div>
						</div>
					</div>
				</div>
			)}
		</InView>
	);
};

export default Me;