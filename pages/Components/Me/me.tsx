import React, {createRef, forwardRef, useEffect, useRef, useState} from 'react';
import Socials from './Header/Socials/socials';
import styles from './styles.module.sass';

interface MeProps {
	collapseHeader?: boolean;
}

const Me = forwardRef<HTMLDivElement, MeProps>(({collapseHeader}, headerRef) => {
	const [showSkills, setShowSkills] = useState(false);
	const [height, setHeight] = useState(0);
	const skillsWrapRef = createRef<HTMLDivElement>();

	const setCurrentHeight = () => setHeight(() => skillsWrapRef.current?.getBoundingClientRect().height || 0);

	useEffect(() => {
		setCurrentHeight();
	}, [setCurrentHeight, showSkills]);
	useEffect(() => {
		setShowSkills(() => false);
	}, [collapseHeader]);

	const update = useRef(() => {
		setHeight(() => skillsWrapRef.current?.getBoundingClientRect().height || 0);
	});

	useEffect(() => {
		window.addEventListener('resize', () => update.current());
		return window.removeEventListener('resize', () => update.current());
	}, [update]);

	return (
		<div
			className={styles.me + (collapseHeader ? ' ' + styles._collapse : '')}
			ref={headerRef}
		>
			<div className={styles.me__flexRow}>
				<div className={styles.me__photo} style={{backgroundImage: 'url(/me1.jpeg)'}}>
					<svg className={styles.me__photoCircle} width="240" height="240" viewBox="0 0 240 240" fill="none"
					     xmlns="http://www.w3.org/2000/svg">
						<g filter="url(#filter0_d_16_162)">
							<path fill-rule="evenodd" clip-rule="evenodd"
							      d="M12.7551 119.035C11.2244 119.035 9.97599 120.268 10.0004 121.799C10.3984 146.804 19.2802 171.81 36.9712 192.161C76.8295 238.013 146.311 242.872 192.163 203.014C238.015 163.155 242.873 93.6735 203.015 47.8217C181.701 23.3026 151.916 10.5057 121.803 10.0004C120.272 9.97469 119.037 11.2234 119.037 12.755C119.037 14.3049 120.3 15.5537 121.85 15.5818C150.388 16.0985 178.604 28.2446 198.804 51.4822C236.64 95.0082 232.028 160.965 188.502 198.802C144.976 236.638 79.019 232.026 41.1825 188.5C24.4227 169.221 15.9917 145.539 15.5821 121.851C15.5553 120.3 14.306 119.035 12.7551 119.035Z"
							      fill="#DB4DFF"/>
						</g>
						<defs>
							<filter id="filter0_d_16_162" x="0" y="0" width="240" height="239.998"
							        filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
								<feFlood flood-opacity="0" result="BackgroundImageFix"/>
								<feColorMatrix in="SourceAlpha" type="matrix"
								               values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
								<feOffset/>
								<feGaussianBlur stdDeviation="5"/>
								<feComposite in2="hardAlpha" operator="out"/>
								<feColorMatrix type="matrix"
								               values="0 0 0 0 0.858824 0 0 0 0 0.301961 0 0 0 0 1 0 0 0 0.75 0"/>
								<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_16_162"/>
								<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_16_162"
								         result="shape"/>
							</filter>
						</defs>
					</svg>
				</div>
				<div className={styles.me__info}>
					<span className={styles.me__name}>Vladimir Fadin</span>
					<span className={styles.me__job}>Frontend developer</span>
					<div className={styles.me__socialsBox}>
						<Socials/>
					</div>
				</div>
			</div>
			<button
				className={styles.me__btn}
				onClick={() => setShowSkills(!showSkills)}
			>
				show skills
			</button>
			<div
				className={styles.me__infoBar}
				style={{
					height: (!showSkills || collapseHeader) ? 0 : `calc(${height}px + 1.15em)`,
				}}
			>
				<div
					ref={skillsWrapRef}
					className={styles.me__skillsBarWrapper}
				>
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
});

export default Me;