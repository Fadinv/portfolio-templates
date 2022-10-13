import React, {useEffect, useState} from 'react';
import {InView} from 'react-intersection-observer';
import cn from 'classnames';
import css from './styles.module.sass';

interface SkyProps {
	styles?: React.CSSProperties;
	text?: string;
	left?: boolean;
	timeOut?: number;
	deadTime?: number;
	refreshTime?: number;
	onDead?(): void;
}

export const Sky: React.FC<SkyProps> = ({styles, text, left, timeOut, deadTime, refreshTime, onDead}) => {
	const [viewed, setViewed] = useState(false);
	const [waited, setWaited] = useState(false);

	const refresh = () => {
		if (!refreshTime) return;
		setTimeout(() => {
			setWaited(false);
			setTimeout(() => {
				setWaited(true);
				refresh()
			});
		}, refreshTime);
	};

	useEffect(() => {
		if (timeOut) {
			setTimeout(() => {
				setWaited(true);
				if (deadTime) {
					setTimeout(() => {
						setWaited(false)
						onDead?.();
					}, deadTime);
				}
				if (refreshTime) refresh();
			}, timeOut);
		} else setWaited(true);

		if (!timeOut && deadTime) {
			setTimeout(() => {
				setWaited(prev => false);
				onDead?.();
			}, deadTime);
		}
		if (!timeOut && refreshTime) refresh();
	}, [])

	return !waited ? null : (
		<InView onChange={(inView) => inView && setViewed(true)}>
			{({ref, inView}) => (
				<div
					ref={ref}
					className={cn(css['sky'], {
						[css['_animate']]: inView || viewed,
						[css['_left']]: left,
					})}
					style={styles}
				>
					<div className={css['sky__text']}>
						<div className={css['sky__text-wrap']}>
							<div style={{zIndex: 100, padding: '.5em', border: '.1em solid #000', borderRadius: '10em', position: 'relative', background: '#fff'}}>{text}</div>
						</div>
					</div>
					<div className={css['sky__circle-1']}/>
					<div className={css['sky__circle-2']}/>
					<div className={css['sky__circle-3']}/>
				</div>
			)}
		</InView>
	);
};