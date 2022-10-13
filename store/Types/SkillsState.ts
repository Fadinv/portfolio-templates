export interface SkillsState {
	items: SkillItem[];
}

interface SkillItem {
	caption: string;
	list: SkillListItem[];
}

interface SkillListItem {
	caption: string;
}