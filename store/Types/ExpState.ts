export interface ExpState {
	slider?: Slider[];
}

// Слайдер
export interface Slider {
	// Заголовок
	caption: string;
	// Изображения
	items: SliderItem[];
}

// Слайд
export interface SliderItem {
	// Абсолютный путь к изображению
	photo: string;
}