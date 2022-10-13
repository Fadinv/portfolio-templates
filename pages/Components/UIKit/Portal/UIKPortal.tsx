import React from 'react';
import ReactDom from 'react-dom';
import css from './Styles.module.sass';
import cn from 'classnames';

import {WindowEventListener} from ".//EventListener";

type VerticalLocation = 'up' | 'down';

interface UIKPortalProps {
	key?: string;
	// Направление открытия (по умолчанию down)
	verticalLocation?: VerticalLocation;
	// направление открытия автоматически расчитывается исходя из текущей позиции
	autoChangeLocation?: boolean;
	// высота родительского компонента
	parentComponentHeight?: number;
	// высота детей
	childrenComponentHeight?: number;
	// отступы портала по осям относительно первоначально рассчитаной позиции
	offset?: {
		x: number;
		y: number;
	}
	// Вызовется после изменения позиции порталируемого элемента
	// Нужно для получения корректной позиции элемента с рефа
	onChangePosition?(): void;
}

interface UIKPortalState {
	computedPosition: Pick<React.CSSProperties, 'top' | 'left' | 'width' | 'bottom'>
	verticalLocation: VerticalLocation;
}

export class UIKPortal extends React.PureComponent<React.PropsWithChildren<UIKPortalProps>, UIKPortalState> {

	private readonly positionRef: React.RefObject<HTMLDivElement> = React.createRef();
	private readonly childrenWrapRef: React.RefObject<HTMLDivElement> = React.createRef();

	constructor(props: React.PropsWithChildren<UIKPortalProps>) {
		super(props);
		this.state = {
			computedPosition: {
				width: null,
				top: null,
				left: null,
			},
			verticalLocation: this.props.verticalLocation,
		};
		this.recalculatePosition();
	}

	componentDidMount() {
		if (this.props.children) {
			// не самое лучшее решение, подумать
			this.setPortalLocation();
			this.recalculatePosition();
		}
	}

	componentDidUpdate(prevProps: Readonly<React.PropsWithChildren<UIKPortalProps>>) {
		if (!prevProps.children && this.props.children) {
			this.recalculatePosition();
		}
	}

	private setPortalLocation() {
		if (!this.props.autoChangeLocation) return;

		const {height: childrenWrapHeight} = this.childrenWrapRef.current?.getBoundingClientRect();
		const {y: dropDownYPos} = this.positionRef.current?.getBoundingClientRect();

		if (dropDownYPos + childrenWrapHeight + 12 >= window.innerHeight) {
			this.setState({verticalLocation: 'up'}, () => this.recalculatePosition());
		} else {
			this.setState({verticalLocation: 'down'}, () => this.recalculatePosition());
		}
	}

	private get computedPosition(): React.CSSProperties {
		const {computedPosition} = this.state;
		return {
			position: 'absolute',
			zIndex: 20,
			...computedPosition,
		};
	}

	private recalculatePosition = (): void => {
		const rect = this.positionRef.current?.getBoundingClientRect();
		const childrenWrapRect = this.childrenWrapRef.current?.getBoundingClientRect();
		const {computedPosition} = this.state;
		const {autoChangeLocation, parentComponentHeight, offset} = this.props;
		if (!rect) return;
		// Если все посчитано, то просто сообщим родителю
		if (rect.x == computedPosition.left && rect.y == computedPosition.top && !autoChangeLocation) {
			return this.props.onChangePosition?.();
		}
		const pos = autoChangeLocation
			? {bottom: window.innerHeight - rect.y + (parentComponentHeight || 0) + (offset?.y || 0)}
			: {top: rect.y - (childrenWrapRect.height || 0) - (parentComponentHeight || 0) - (offset?.y || 0)};
		switch (this.state.verticalLocation) {
			case "up": {
				this.setState({
					computedPosition: {
						...pos,
						left: rect.x,
						width: rect.width,
					},
				}, this.props.onChangePosition);
				return;
			}
			case "down":
			default: {
				this.setState({
					computedPosition: {
						top: rect.y + 2,
						left: rect.x,
						width: rect.width,
					},
				}, this.props.onChangePosition);
				return;
			}
		}
	}

	private handleParentPositionChange = (): void => {
		this.recalculatePosition();
		this.setPortalLocation();
	}

	private renderChildrenWithCalculatedPosition(): React.ReactNode {
		const {children} = this.props;
		return (
			<div
				ref={this.childrenWrapRef}
				style={this.computedPosition}
				data-source="UIKPortal"
			>
				{children}
			</div>
		);
	}

	private renderChildrenToBody(): JSX.Element {
		const {key} = this.props;
		return ReactDom.createPortal(
			this.renderChildrenWithCalculatedPosition(),
			window.document.body,
			key
		);
	}

	render() {
		if (!this.props.children) return null;
		const {verticalLocation} = this.props;
		return (
			<div
				ref={this.positionRef}
				className={cn(css.positionWrapper, verticalLocation == 'up' && css._up)}
			>
				{this.renderChildrenToBody()}
				<WindowEventListener event={'scroll'} callback={this.handleParentPositionChange} captionPhase/>
				<WindowEventListener event={'resize'} callback={this.handleParentPositionChange} captionPhase/>
			</div>
		);
	}
}