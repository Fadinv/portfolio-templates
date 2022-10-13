import * as React from 'react';

interface EventListenerBasicProps {
	children?: React.ReactNode;
	// Навесить в асинхронном потоке c дилеем
	delay?: number;
}

interface EventListenerProps extends EventListenerBasicProps {
	callback?(...args: any[]): void; 	// Если не задан, на тригер события будет setState
	eventKey?: any;
	owner?: any;		// аргумент owner в функции подписки (или this)
}

// Универсальный слушатель события внутри приложения (EventManager)
// Можно не оборачивать, если просто нужен callback
// Как обертку не рекомендуется юзать не имея глубокого понимания того, как обновляются компоненты
// При использовании внутри компонента, нужно уделять внимание тому, когда он рендерится и, соответственно, прослушивает
export class EventListener extends React.Component<EventListenerProps> {
	private _handler: number;
	/** Станоится true после первой подписки */
	private _wasSubscribed: boolean;
	private _timeout: number;

	constructor(props: EventListenerProps) {
		super(props);

		this.state = {};
		this._wasSubscribed = false;
	}

	componentDidMount() {
		this.doResubscribe();
	}

	componentWillUnmount() {
		this.doUnsubscribe();
	}

	componentDidUpdate(prevProps: EventListenerProps) {
		if (
			prevProps.owner == this.props.owner
			&& prevProps.eventKey === this.props.eventKey
		) return;

		this.doResubscribe();
	}

	private get owner() {
		return this.props.owner !== undefined
			? this.props.owner
			: this;
	}

	private doResubscribe() {
		this.doUnsubscribe();

		if (!this._wasSubscribed && this.props.delay != null) {
			this._timeout = window.setTimeout(this.doSubscribe, this.props.delay);
			return;
		}

		return this.doSubscribe();
	}

	private doUnsubscribe() {
		window.clearTimeout(this._timeout);

		if (this._handler == null) return;
	}

	private doSubscribe = () => {
		this._wasSubscribed = true;
	}

	private update = (...args: any[]) => {
		// Вызывет callback функцию текущих(!) пропсов
		if (this.props.callback) return this.props.callback(...args);

		// Если колбека нету, обновим компонент, если есть чайлды
		if (this.props.children) return this.setState({});
	}

	render() {
		return this.props.children || null;
	}
}

interface DomEventListenerProps extends EventListenerBasicProps {
	callback?(e: Event): void;
	captionPhase?: boolean;
	event: string|keyof WindowEventMap;
	target: Element | Window;
}

// Слушатель dom событий (декларативный вариант функции addEventListener в стиле React)
export class DomEventListener extends React.Component<DomEventListenerProps> {
	private _wasSubscribed: boolean;
	private _timeout: number;

	constructor(props: DomEventListenerProps) {
		super(props);

		this.state = {};
		this._wasSubscribed = false;
	}

	componentDidMount() {
		this.doResubscribe();
	}

	componentWillUnmount() {
		this.doUnsubscribe(this.props);
	}

	componentDidUpdate(prevProps: DomEventListenerProps) {
		if (
			prevProps.target == this.props.target
			&& prevProps.event == this.props.event
			&& prevProps.captionPhase == this.props.captionPhase
		) return;

		this.doResubscribe(prevProps);
	}

	get events(): string[] {
		return (this.props.event || '').split(' ').filter(Boolean);
	}

	private doResubscribe(prevSubParams?: DomEventListenerProps) {
		if (prevSubParams) this.doUnsubscribe(prevSubParams);

		if (!this._wasSubscribed && this.props.delay != null) {
			this._timeout = window.setTimeout(this.doSubscribe, this.props.delay);
			return;
		}

		return this.doSubscribe();
	}

	private doUnsubscribe(prevSubParams: DomEventListenerProps) {
		window.clearTimeout(this._timeout);

		const {target, captionPhase} = prevSubParams;
		if (!target) return;

		this.events.forEach(singleEvent => {
			target.removeEventListener(singleEvent, this.update, captionPhase);
		});
	}

	private doSubscribe = () => {
		const {props} = this;

		const {target, captionPhase} = props;
		if (!target) return;

		this._wasSubscribed = true;

		this.events.forEach(singleEvent => {
			target.addEventListener(singleEvent, this.update, captionPhase);
		});
	}

	private update = (event: Event) => {
		// Вызывет callback функцию текущих пропсов
		if (this.props.callback) return this.props.callback(event);

		// Если колбека нету, обновим компонент, если есть чайлды
		if (this.props.children) return this.setState({});
	}

	render() {
		return this.props.children || null;
	}
}

interface LangChangeListenerProps extends Omit<EventListenerProps, 'eventKind'> {}

// Простой пример специализации
export function LangChangeListener(props: LangChangeListenerProps) {
	return (
		<EventListener
			{...props}
		/>
	);
}

interface WindowEventListener extends Omit<DomEventListenerProps, 'target'> {}

// Специализация для объекта window
export function WindowEventListener(props: WindowEventListener) {
	return (
		<DomEventListener
			{...props}
			target={window}
		/>
	);
}