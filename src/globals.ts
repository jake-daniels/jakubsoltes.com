
export {}

import {classNames, PageScroll, IPageScroll} from 'app/domain/utility'
import CV_PATH from './files/Jakub-Soltes-CV.pdf'

const _global = (window as any)

declare global {

	interface IRouterProps {
		location: any,
		history: any,
		match: any,
		staticContext?: any,
	}

	function cn (classes: Object): string

	const PageScroll: IPageScroll

	const AppSettings: {
		Routes: {
			Me: string,
			Work: string,
			Hobby: string,
		},
		Email: {
			userID: string,
			serviceID: string,
			templateID: string,
			myAddress: string,
		},
		DefaultScrollTime: number,
		CVPath: string,
		CVFilename: string,
	}
}

_global.cn = classNames

_global.PageScroll = new PageScroll()

_global.AppSettings = {
	Routes: {
		Me: '/',
		Work: '/what-i-do',
		Hobby: '/what-i-love',
	},
	Email: {
		userID: 'user_SlPruuGovIz22YpULIYjG',
		serviceID: 'jakub_soltes_smtp',
		templateID: 'contact_template',
		myAddress: 'jakub@jakubsoltes.com',
	},
	DefaultScrollTime: 750,
	CVPath: CV_PATH,
	CVFilename: 'Jakub-Soltes-CV',
}
