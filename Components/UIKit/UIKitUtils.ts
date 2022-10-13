// Проверяет что число является конечным числом
export const isNumber = (value: number): boolean => {
	return typeof value == 'number' && isFinite(value);
};