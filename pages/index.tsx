import React, {createRef, useEffect, useRef, useState} from 'react';
import Hello from './Components/Hello/hello';
import Header from './Components/Me/Header/header';
import styles from './index.module.css';
import TemplatesItem from './Components/Templates/TemplatesItem/TemplatesItem';
import Templates from './Components/Templates/Templates';
import Me from './Components/Me/me';

export default function Home() {
	const [isLoaded, setIsLoaded] = useState<boolean>(false);
	const [collapseHeader, setCollapseHeader] = useState<boolean>(false);
	const headerRef = createRef<HTMLDivElement>();
	const scrollRef = createRef<HTMLDivElement>();

	useEffect(() => {
		setIsLoaded(true);
	}, []);

	const updateCurrentHeight = (scrollTop?: number) => {
		setCollapseHeader((prev) => {
			if (!scrollRef.current) return prev;
			if (!prev) {
				const calc = scrollTop - headerRef.current?.getBoundingClientRect().height + window.innerHeight * 0.05 > 0
				return calc;
			} else {
				return scrollTop > headerRef.current?.getBoundingClientRect().height - window.innerHeight * 0.05;
			}
		});
	};

	return (
		<div
			ref={scrollRef}
			style={{opacity: isLoaded ? '1' : '0'}} className={styles.Index}
			onScroll={(event) => {
				const target = event.target as HTMLDivElement;
				setCollapseHeader((prev) => {
					if (!prev) {
						const calc = target.scrollTop - headerRef.current.getBoundingClientRect().height + window.innerHeight * 0.05 > 0
						return calc;
					} else {
						return target.scrollTop > headerRef.current?.getBoundingClientRect().height - window.innerHeight * 0.05;
					}
				});
			}}
		>

			<Me scrollRef={scrollRef} onResize={updateCurrentHeight} ref={headerRef} collapseHeader={collapseHeader}/>

			<Hello/>
			<div className={styles.PortfolioStuck}>
				<span className={styles.Text}>Небольшие визуальные работы fon.bet</span>
				<span className={styles.Text_sub}>"По определенным причинам большинство своих проектов я не могу показывать тут. Спасибо за понимание)"</span>

				<Templates>
					<TemplatesItem
						src={'/landing-fon.png'}
						href={'https://www.fon.bet/loyalty/vip-status/?n=%D0%9A%D0%B8%D1%80%D0%B8%D0%BB%D0%BB&t=7&p=79161218601&r=2'}
						description
						title={'Лендинг'}
						ps={'Ссылка может быть не активна, если удалят с сайта. Можете поменять query параметры r и t (немного влияет на вид).'}
					/>
					<TemplatesItem
						src={'/slider-fon.png'}
						href={'https://www.fon.bet/'}
						// github={'https://github.com/Fadinv/sudoku'}
						title={'Приветственный слайдер'}
						description
						ps={'Слайдер на данный момент будет видно, если куки чистые. Т.к. режим его отображения полностью редактируется, вполне вероятно, что подобный баннер будет видно и для авторизованного пользователя (но на данный момент нет).'}
					/>
					<TemplatesItem
						src={'/champ-fon.png'}
						href={'https://www.fon.bet/football-2022'}
						// github={'https://github.com/Fadinv/sudoku'}
						title={'Раздел чемпионатов'}
						description
						ps={'На фронте я сделал половину. Редактор для раздела (который тут не могу показать) сделал полностью. Использовался еще для euro-2020 по футболу. По мере заполнения данными будет до 6 подразделов. Если ссылка не активна, значит не сезон или изменился url.'}
					/>
				</Templates>
			</div>
			<div className={styles.PortfolioStuck}>
				<span className={styles.Text}>Мои пет-работы</span>
				<span className={styles.Text_sub}>"Все это я написал задолго до получения коммерческого опыта."</span>

				<Templates>
					<TemplatesItem
						src={'/game1.jpg'} href={'https://clicker-blond.vercel.app/'}
						github={'https://github.com/Fadinv/clicker'}
						description title={'Кликер'}
						ps={'Первое что я написал. Очень простая игра, но очень горжусь этой работой!\n' +
							'Ps. Музыку я написал сам, поэтому дал вам возможность ее не включать)'}
					/>
					<TemplatesItem
						src={'/game2.png'}
						href={'https://affectionate-poitras-45c37b.netlify.app/'}
						github={'https://github.com/Fadinv/sudoku'}
						description title={'Судоку'}
						ps={'Ps. Алгоритм не генерирует судоку на ходу, а перемешивает решенный вариант. В исходном коде src/api/api.ts'}
					/>
				</Templates>
			</div>

			<div className={styles.PortfolioStuck}>
			</div>
			<div className={styles.PortfolioStuck}>
				<h2 className={styles.Text}>Docker контейнеры</h2>
				<Templates>
					<TemplatesItem
						src={'/docker1.png'}
						href={'https://github.com/Fadinv/docker/'}
						github={'https://github.com/Fadinv/docker'}
						description title={'Записная книжка'}
						ps={'Ps. Примитивное приложение vue + postgres + graphql'}
					/>
				</Templates>
			</div>
		</div>
	);
}
