import React from 'react';
import * as styles from './Styles.module.sass';
import cn from 'classnames';
import {isNumber} from '../UIKitUtils';

export interface UIKColumnProps {
	isBox?: boolean; // Если нужно сделать блок для какого-нибудь TreeGrid или ObjectList
	areaId?: string;
	scrollable?: boolean; // Этот элемент может скроллится
	pureBox?: boolean; // Принудительное отключение отступов
	className?: string;
	style?: React.CSSProperties;
	gap?: number;
	fixedSelfHeight?: number;
	fixedSelfWidth?: number;
	stretchChild?: boolean;
	align?: React.CSSProperties['alignItems'];
	justify?: React.CSSProperties['justifyContent'];
}

let generateUIKColumnId = 0;

const UIKColumnGenId = () => ++generateUIKColumnId;

export class UIKColumn extends React.PureComponent<UIKColumnProps> {
	private readonly _id = UIKColumnGenId();

	private get classNames() {
		const {className, isBox, scrollable, pureBox, gap, stretchChild} = this.props;
		return cn(
			styles['flex'],
			styles['_column'], {
				[styles['_box']]: isBox,
				[styles['_scrollable']]: scrollable,
				[styles['_pure-box']]: pureBox,
				[styles['_stretch']]: !!stretchChild,
				['_spec']: isNumber(gap) || !!stretchChild,
				['forcedGap-' + this._id]: isNumber(gap),
			},
			className,
		);
	}

	private get propsToStyles() {
		const {fixedSelfWidth, fixedSelfHeight, justify, align} = this.props;
		let styleColumn: React.CSSProperties = {};

		if (!!fixedSelfWidth) styleColumn = {...styleColumn, width: this.props.fixedSelfWidth};
		if (!!fixedSelfHeight) styleColumn = {...styleColumn, height: this.props.fixedSelfHeight};
		if (!!justify) styleColumn = {...styleColumn, justifyContent: this.props.justify};
		if (!!align) styleColumn = {...styleColumn, alignItems: this.props.align};

		return !!this.props.style ? {...styleColumn, ...this.props.style} : styleColumn;
	}

	private get gapStyles() {
		if (this.props.pureBox || !isNumber(this.props.gap)) return '';

		return `margin-top: ${this.props.gap}px;`;
	}

	render = () => {
		return (
			<div id={this.props.areaId} style={this.propsToStyles} className={this.classNames}>
				{this.props.children}
				{!isNumber(this.props.gap) ? null : <style type="text/css">
					{`
						.${styles['flex']}.forcedGap-${+this._id}._spec > * + * {${this.gapStyles}}
					`}
				</style>}
			</div>
		);
	};
}