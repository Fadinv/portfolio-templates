import React from 'react';
import * as styles from './Styles.module.sass';
import cn from 'classnames';
import {isNumber} from '../UIKitUtils';
import {UIKRowGenId} from './UIKRow';

export enum FlexDirection {
	row = '_row',
	rowSpaceBetween = '_row-space-between',
	rowEnd = '_row-end',
	rowStart = '_row-start',
	column = '_column',
	centerColumn = '_center-column',
	center = '_center',
}

export interface FlexProps {
	direction?: FlexDirection;
	rowWrapper?: boolean;
	stretchChild?: boolean;
	isBox?: boolean; // Если нужно сделать блок для какого-нибудь TreeGrid или ObjectList
	scrollable?: boolean; // Этот элемент может скроллится
	pureBox?: boolean;
	className?: string;
	style?: React.CSSProperties;
	gapY?: number;
	gap?: number;
	align?: React.CSSProperties['alignItems'];
	justify?: React.CSSProperties['justifyContent'];
}

export class UIKFlex extends React.PureComponent<FlexProps> {
	private readonly _id = UIKRowGenId();

	private get classNames() {
		const {rowWrapper, stretchChild, direction, className, isBox, scrollable, pureBox, gap, gapY} = this.props;
		return cn(
			styles['flex'],
			!rowWrapper && isNumber(gap) && '_spec _lineGap-' + this._id,
			rowWrapper && isNumber(gap) && '_spec _horizontalGap-' + this._id,
			rowWrapper && (isNumber(gap) || isNumber(gapY)) && '_spec _verticalGap-' + this._id,
			styles[direction ?? FlexDirection.row], {
				[styles['_wrap']]: rowWrapper,
				[styles['_stretch']]: stretchChild,
				[styles['_box']]: isBox,
				[styles['_scrollable']]: scrollable,
				[styles['_pure-box']]: pureBox,
			},
			className,
		);
	}

	private gapStyles({negative}: {negative?: boolean} = {}) {
		if (this.props.pureBox || !isNumber(this.props.gap)) return '';

		return `margin-left: ${negative ? '-' : ''}${this.props.gap}px;`;
	}

	private gapYStyles({negative}: {negative?: boolean} = {}) {
		if (this.props.pureBox || (!isNumber(this.props.gap) && !isNumber(this.props.gapY))) return '';

		return `margin-top: ${negative ? '-' : ''}${this.props.gapY || this.props.gap}px;`;
	}

	render = () => {
		const {style, children, align, justify} = this.props;
		return (
			<div style={{alignItems: align, justifyContent: justify, ...style}} className={this.classNames}>
				{children}
				<style type="text/css">
					{`
						.${styles['flex']}._lineGap-${this._id}._spec > * + * {${this.gapStyles()}}
						.${styles['flex']}._horizontalGap-${this._id}._spec {${this.gapStyles({negative: true})}}
						.${styles['flex']}._horizontalGap-${this._id}._spec > * {${this.gapStyles()}}
						.${styles['flex']}._verticalGap-${this._id}._spec {${this.gapYStyles({negative: true})}}
						.${styles['flex']}._verticalGap-${this._id}._spec > * {${this.gapYStyles()}}
					`}
				</style>
			</div>
		);
	}
}