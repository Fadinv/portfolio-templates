import React from 'react';
import {InView} from 'react-intersection-observer';
import css from './styles.module.sass';
import cn from 'classnames';

interface BoxProps {
	caption?: string;
	list?: ListItem[];
}

export interface ListItem {
	caption: string;
}

const Box: React.FC<BoxProps> = ({list, caption}) => {
	return (
		<InView>
			{({ref, inView}) => (
				<div ref={ref} className={css['box']}>
					{caption && (
						<div className={css['box__caption']}>
							<div className={cn(css['box__caption-line'], {[css['_animate']]: inView})}/>
							<div className={css['box__caption-text']}>
								{caption}
							</div>
							<div className={cn(css['box__caption-line'], {[css['_animate']]: inView})}/>
						</div>
					)}
					{list?.length && <div
                        className={css['box__wrapper']}
                    >
                        <div className={css['box__inner']}>
							{list.map((el) => <div className={css['box__el']}>{el.caption}</div>)}
                        </div>
                    </div>}
				</div>
			)}
		</InView>
	);
};

export default Box;