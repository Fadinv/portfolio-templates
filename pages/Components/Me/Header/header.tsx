import React from 'react';
import Socials from './Socials/socials';
import styles from './styles.module.sass';

const Header = () => {
	return (
		<div className={styles.header}>
			{/*<MainLink/>*/}
			<Socials/>
		</div>
	);
};

export default Header;