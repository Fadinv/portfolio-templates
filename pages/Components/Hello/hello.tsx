import React from 'react';
import styles from './styles.module.sass';

interface HelloProps {
	style?: React.CSSProperties;
}

const Hello: React.FC<HelloProps> = ({style}) => {
	return (
		<div style={style} className={styles.hello}>
			<div className={styles.hello__title}>
				Привет, Я Вова. Рад познакомиться.
			</div>
			<div className={styles.hello__text}>
				Я начал свой путь совсем недавно.
				Летом 2020 года, я начал изучать программирование.
				В феврале 2021 года меня приняли в команду, которая занимается разработкой сайта
				<a target={'_blank'} href={'https://fon.bet'}>
					fonbet
				</a>
				и всего, что с ним связано. Я уверен в себе, от природы любопытен и постоянно работаю над улучшением своих навыков.
				<br/>
				{/*<div style={{marginTop: '.5em'}}/>*/}
			</div>
		</div>
	);
};

export default Hello;