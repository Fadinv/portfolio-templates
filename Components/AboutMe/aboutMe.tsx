import cn from 'classnames';
import React, {useState} from 'react';
import {InView} from 'react-intersection-observer';
import Hello from '../Hello/hello';
import css from './styles.module.sass';

interface SkillsProps {
	onChangePage(page: 'home' | 'skills' | 'aboutMe' | 'contacts' | 'exp'): void;
	collapse?: boolean;
}

const AboutMe: React.FC<SkillsProps> = ({onChangePage, collapse}) => {
	const [loaded, setLoaded] = useState(false);

	React.useEffect(() => {
		setLoaded(true);
	}, []);

	return (
		<InView>
			{({ref, inView}) => (
				<div
					ref={ref}
					className={cn(css['about-me'], {
						[css['_loaded']]: loaded && inView,
						[css['_collapse']]: collapse,
					})}
				>
					<Hello/>
					<div className={css['about-me__title']}>Коротко обо мне</div>
					<div className={css['about-me__text-box']}>
						Начал свой путь совсем недавно.
						Летом 2020 года, я начал изучать программирование.
						В феврале 2021 года меня приняли в команду, которая занимается разработкой сайта fonbet и всего, что с ним связано.
						Сейчас занимаю должность ведущего программиста.
						<br/>
						<br/>
						Внутри продуктовой команды, реализовал множество проектов связанных с сайтом и backoffice.
						Проявлял инициативу, предлагал свое решение задач и проблем.
						<br/>
						<br/>
						Люблю музыку, спорт и психологию.
						Занимаюсь инвестициями.
						Моя мотивация - делать мир лучше, участвовать в интересных проектах.
						<br/>
						<br/>
						Очень люблю математику.
						Сейчас учусь на 3-м курсе на специальности "Прикладная математика и информатика" в РУДН на очно-заочном.
					</div>
				</div>
			)}
		</InView>
	);
};

export default AboutMe;