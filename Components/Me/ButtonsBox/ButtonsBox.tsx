import React from 'react';
import css from './styles.module.sass';

interface ButtonsBoxProps {
	onChangePage(page: 'home' | 'skills' | 'aboutMe' | 'contacts' | 'exp'): void;
}

const ButtonsBox: React.FC<ButtonsBoxProps> = ({onChangePage}) => {
	return (
		<div className={css['buttons-box__button-box']}>
			<button
				className={css['buttons-box__el']}
				onClick={() => onChangePage('skills')}
			>
				Скилы
			</button>
			<button
				className={css['buttons-box__el']}
				onClick={() => onChangePage('exp')}
			>
				портфолио
			</button>
			<button
				className={css['buttons-box__el']}
				onClick={() => onChangePage('aboutMe')}
			>
				Обо мне
			</button>
			<button
				className={css['buttons-box__el']}
				onClick={() => onChangePage('contacts')}
			>
				Контакты
			</button>
		</div>
	);
};

export default ButtonsBox;