import React from 'react';
import styles from './styles.module.sass';

const Me = () => {
	return (
		<div className={styles.me}>
			<img className={styles.me__photo} alt={''} src={'/me1.jpeg'}/>
			<span className={styles.me__name}>Владимир Фадин</span>
			<div className={styles.me__infoBar}>
			<div className={styles.me__skillsBarWrapper}>
				<div className={styles.me__skillsBar}>
					<div className={styles.me__skill}>Javascript</div>
					<div className={styles.me__skill}>Typescript</div>
					<div className={styles.me__skill}>CSS</div>
					<div className={styles.me__skill}>React</div>
					<div className={styles.me__skill}>Next.js</div>
					<div className={styles.me__skill}>Sass / Scss</div>
					<div className={styles.me__skill}>Node.js</div>
					<div className={styles.me__skill}>express</div>
					<div className={styles.me__skill}>graphql</div>
					<div className={styles.me__skill}>urql / apollo</div>
					<div className={styles.me__skill}>mikro-orm</div>
					<div className={styles.me__skill}>postgresql</div>
					<div className={styles.me__skill}>docker</div>
					<div className={styles.me__skill}>vue.js</div>
				</div>
			</div>
			</div>
		</div>
	);
};

export default Me;