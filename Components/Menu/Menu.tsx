import cn from 'classnames';
import React from 'react';
import {InView} from 'react-intersection-observer';
import {useSelector} from 'react-redux';
import {RootState} from '../../store/store';
import css from './styles.module.sass';

interface MenuProps {
	onChangePage(page: 'home' | 'skills' | 'aboutMe' | 'contacts' | 'exp'): void;
	view?: boolean;
}

interface ButtonItem {
	caption: string;
	alias: RootState['pageReducer']['alias'];
}

const buttonsArr: ButtonItem[] = [
	{
		caption: 'скилы',
		alias: 'skills',
	},
	{
		caption: 'портфолио',
		alias: 'exp',
	},
	{
		caption: 'обо мне',
		alias: 'aboutMe',
	},
	// {
	// 	caption: 'контакты',
	// 	alias: 'contacts',
	// },
];

const Menu: React.FC<MenuProps> = ({onChangePage, view}) => {
	const page = useSelector((store: RootState) => store.pageReducer);

	return (
		<InView>
			{({ref, inView}) => (
				<div
					ref={ref}
					className={cn(css['menu'], {
						[css['_animate']]: inView && view,
					})}
				>
					<div className={cn(css['menu__inner'])}>
						<div className={css['menu__left-box']} onClick={() => onChangePage('home')}>
							<div className={css['menu__to-home']}/>
							<span className={css['menu__job']}>Frontend developer</span>
						</div>
						<div className={css['menu__button-box']}>
							{buttonsArr.map((bt, key) => (
								<button
									key={key}
									className={cn(css['menu__el'], {[css['_active']]: page.alias === bt.alias})}
									onClick={() => onChangePage(bt.alias)}
								>
									{bt.caption}
								</button>
							))}
						</div>
					</div>
				</div>
			)}
		</InView>
	);
};

export default Menu;