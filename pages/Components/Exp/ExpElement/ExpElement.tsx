import cn from 'classnames';
import React, {useState} from 'react';
import css from './styles.module.sass';

interface ExpElementProps {
	caption: string;
	imageUrl: string;
	redirectUrl?: string;
	description?: string;
}

const ExpElement: React.FC<ExpElementProps> = ({caption, imageUrl, description, redirectUrl}) => {
	return (
		<div className={css['exp-element']}>
			<div className={css['exp-element__caption']}>
				<span>{caption}</span>
				{redirectUrl && <a href={redirectUrl} target={'_blank'} className={cn(css['exp-element__redirect'])}>
					<span>view website</span>
					<span className={'fa-solid fa-arrow-up-right-from-square'}/>
				</a>}
			</div>

			<div className={css['exp-element__slider']}>
				{redirectUrl
					? (
						<a href={redirectUrl} target={'_blank'}>
							<img src={imageUrl} className={css['exp-element__image']}/>
						</a>
					)
					: <img src={imageUrl} className={css['exp-element__image']}/>
				}
				{description && <div className={css['exp-element__description']}>
					{description}
				</div>}
			</div>
			{description && <div className={css['exp-element__description']}>{description}</div>}
		</div>
	);
};

export default ExpElement;