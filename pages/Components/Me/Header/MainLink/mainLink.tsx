import {useRouter} from 'next/router';
import React from 'react';
import styles from './styles.module.sass';

const MainLink = () => {
	const router = useRouter();
	return (
		<div
			onClick={() => router.push('/')}
			className={styles.mainLink}
		>
			F
		</div>
	);
};

export default MainLink;