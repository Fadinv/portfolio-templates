import React, {createRef, useEffect, useState} from 'react';
import Header from './Components/Me/Header/header';
import styles from './index.module.css';
import TemplatesItem from './Components/Templates/TemplatesItem/TemplatesItem';
import Templates from './Components/Templates/Templates';
import Me from './Components/Me/me';

export default function Home() {
	const [isLoaded, setIsLoaded] = useState<boolean>(false);
	const [collapseHeader, setCollapseHeader] = useState<boolean>(false);
	const headerRef = createRef<HTMLDivElement>();
	const pseudoRef = createRef<HTMLDivElement>();

	useEffect(() => {
		setIsLoaded(true);
	}, []);

	return (
		<div
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

			<Me ref={headerRef}/>
			{collapseHeader && <Me collapseHeader={collapseHeader}/>}

			{/*{collapseHeader && <div ref={pseudoRef} style={{height: 'calc(2em + 270px)', flex: '1 0 auto'}}/>}*/}

			<div className={styles.PortfolioStuck}>
				<h2 className={styles.Text}>Игры</h2>

				<Templates>
					<TemplatesItem
						src={'/game1.jpg'} href={'https://clicker-blond.vercel.app/'}
						github={'https://github.com/Fadinv/clicker'}
						description title={'Кликер'}
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
