import React from 'react';
import {InView} from 'react-intersection-observer';
import styles from './styles.module.sass';
import cn from 'classnames';

interface HelloProps {
	style?: React.CSSProperties;
}

const Hello: React.FC<HelloProps> = ({style}) => {
	return (
		<InView>
			{({ref, inView}) => (
				<div ref={ref} style={style} className={cn(styles.hello, {[styles._animate]: inView})}>
					<div className={styles.hello__title}>
						Привет, Я Вова. Рад познакомиться.
					</div>
					<div className={cn(styles.hello__sep, {[styles._animate]: inView})}/>
					<div className={styles.hello__text}>
						Я уверен в себе, от природы любопытен и постоянно работаю над улучшением своих навыков.
					</div>
				</div>
			)}
		</InView>
	);
};

export default Hello;