import * as React from 'react';
import * as styles from './Styles.module.sass';
import cn from 'classnames';
import {isNumber} from '../UIKitUtils';

export interface UIKRowProps {
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

let generateUIKRowId = 0;

export const UIKRowGenId = () => ++generateUIKRowId;

export class UIKRow extends React.PureComponent<UIKRowProps> {
	private readonly _id = UIKRowGenId();
	private get classNames() {
		const {rowWrapper, stretchChild, className, isBox, scrollable, pureBox, gapY, gap} = this.props;
		return cn(
			styles['flex'],
			styles['_row'],
			rowWrapper && styles['_wrap'],
			stretchChild && styles['_stretch'],
			isBox && styles['_box'],
			scrollable && styles['_scrollable'],
			pureBox && styles['_pure-box'],
			!rowWrapper && isNumber(gap) && '_spec _lineGap-' + this._id,
			rowWrapper && isNumber(gap) && '_spec _horizontalGap-' + this._id,
			rowWrapper && (isNumber(gap) || isNumber(gapY)) && '_spec _verticalGap-' + this._id,
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
		const {style, children, stretchChild, justify, align, isBox} = this.props;
		return (
			<>
				<div style={{
					width: stretchChild ? '100%' : undefined,
					minWidth: 0,
					maxWidth: '100%',
					boxSizing: 'border-box',
					height: isBox && '100%',
					...style}}
				>
					<div
						className={this.classNames}
						style={{
							alignItems: align,
							justifyContent: justify,
						}}
					>
						{children}
					</div>
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
			</>
		);
	}
}