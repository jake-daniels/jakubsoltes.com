
export {}

import {classNames, PageScroll, IPageScroll} from 'app/domain/utility'

const _global = (window as any)

declare global {

	interface IRouterProps {
		location: any,
		history: any,
		match: any,
		staticContext?: any,
	}

	function cn (classes: Object): string

	const APP: {
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
	}

	const PageScroll: IPageScroll
}

_global.cn = classNames

_global.PageScroll = new PageScroll()

_global.APP = {
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
}
