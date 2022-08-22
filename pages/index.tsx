import React, {useEffect, useState} from 'react';
import Header from './Components/Me/Header/header';
import styles from './index.module.css';
import TemplatesItem from './Components/Templates/TemplatesItem/TemplatesItem';
import Templates from './Components/Templates/Templates';
import Me from './Components/Me/me';

export default function Home() {
	const [isLoaded, setIsLoaded] = useState<boolean>(false);

	useEffect(() => {
		setIsLoaded(true);
	}, []);

	return (
		<div style={{opacity: isLoaded ? '1' : '0'}} className={styles.Index}>

			<Me/>

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
