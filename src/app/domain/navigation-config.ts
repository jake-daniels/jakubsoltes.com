
export enum NavigationActionType {
	Work = 'work',
	Hobby = 'hobby',
	Stats = 'stats',
	Download = 'download',
	Message = 'message',
}

export interface INavigationAction {
	label: string,
	description: string,
	actionType: NavigationActionType,
	primary: boolean,
}

export const NavigationActionConfig = [
	{
		label: 'Characteristics',
		description: 'Find out what kind of person I am.',
		actionType: NavigationActionType.Stats,
		primary: true,
	},
	{
		label: 'Work',
		description: 'Discover my skills and experience.',
		actionType: NavigationActionType.Work,
		primary: true,
	},
	{
		label: 'Hobbies',
		description: 'Check out how I enjoy life.',
		actionType: NavigationActionType.Hobby,
		primary: true,
	},
	{
		label: 'Download my CV',
		description: '',
		actionType: NavigationActionType.Download,
		primary: false,
	},
	{
		label: 'Send me a message',
		description: '',
		actionType: NavigationActionType.Message,
		primary: false,
	},
]
