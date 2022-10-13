import React from 'react';
import {InView} from 'react-intersection-observer';
import css from './Styles.module.sass';
import cn from 'classnames';

interface NavButtonsProps {
	onChangePage(page: 'home' | 'skills' | 'aboutMe' | 'contacts' | 'exp'): void;
	collapse?: boolean;
}

const NavButtons: React.FC<NavButtonsProps> = ({onChangePage, collapse}) => {
	return (
		<InView>
			{({ref, inView}) => (
				<div ref={ref} className={css['nav-buttons']}>
					<button
						className={cn(css['nav-buttons__el'], {
							[css['_animate']]: inView,
						})}
						style={{zIndex: 5, opacity: (inView && !collapse) ? 1 : 0, right: (inView && !collapse) ? '100%' : '25%', top: (inView && !collapse) ? '5%' : '25%', transform: 'rotate(-5deg)'}}
						onClick={() => onChangePage('skills')}
					>
						Скилы
					</button>
					<button
						className={cn(css['nav-buttons__el'], {
							[css['_animate']]: inView,
						})}
						style={{zIndex: 5, opacity: (inView && !collapse) ? 1 : 0, left: (inView && !collapse) ? '105%' : '25%', top: (inView && !collapse) ? '5%' : '25%', transform: 'rotate(5deg)'}}
						onClick={() => onChangePage('exp')}
					>
						портфолио
					</button>
					<button
						className={cn(css['nav-buttons__el'], {
							[css['_animate']]: inView,
						})}
						style={{zIndex: 5, opacity: (inView && !collapse) ? 1 : 0, right: (inView && !collapse) ? '25%' : '25%', top: (inView && !collapse) ? '-35%' : '0'}}
						onClick={() => onChangePage('aboutMe')}
					>
						Обо мне
					</button>
					{/*<button*/}
					{/*	className={cn(css['nav-buttons__el'], {*/}
					{/*		[css['_animate']]: inView,*/}
					{/*	})}*/}
					{/*	style={{zIndex: 5, opacity: (inView && !collapse) ? 1 : 0, right: (inView && !collapse) ? '55%' : '25%', top: (inView && !collapse) ? '-35%' : '0', transform: 'rotate(-5deg)'}}*/}
					{/*	onClick={() => onChangePage('aboutMe')}*/}
					{/*>*/}
					{/*	Обо мне*/}
					{/*</button>*/}
					{/*<button*/}
					{/*	className={cn(css['nav-buttons__el'], {*/}
					{/*		[css['_animate']]: inView,*/}
					{/*	})}*/}
					{/*	style={{zIndex: 5, opacity: (inView && !collapse) ? 1 : 0, left: (inView && !collapse) ? '55%' : '25%', top: (inView && !collapse) ? '-35%' : '0', transform: 'rotate(5deg)'}}*/}
					{/*	onClick={() => onChangePage('contacts')}*/}
					{/*>*/}
					{/*	Контакты*/}
					{/*</button>*/}
				</div>
			)}
		</InView>
	);
};

export default NavButtons;