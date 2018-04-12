
import UUID from 'uuid'
import $ from 'jquery'

export function classNames (classes: Object): string {
	return Object.keys(classes)
		.reduce(
			(result, key) => {
				return (classes[key]) ? result + ` ${key}` : result
			},
			'',
		)
		.trim()
}

export interface IEventSource {
	subscribe: (callback: Function) => string,
	unsubscribe: (id: string) => void,
}

export class EventSource implements IEventSource {

	constructor () {
		this.actions = []
	}

	protected actions: Array<{id: string, callback: Function}>

	protected fire (...args: any[]) {
		this.actions.forEach((action) => {
			action.callback(...args)
		})
	}

	public subscribe (callback: Function) {
		const id = UUID.v1()
		this.actions.push({id, callback})
		return id
	}

	public unsubscribe (id: string) {
		this.actions = this.actions.filter((item) => item.id !== id)
	}
}

interface IPositions {
	Intro: number,
	Bio: number,
	Stats: number,
	Skills: number,
	Experience: number,
	Hobby: number,
}

export interface IPageScroll extends IEventSource {
	scroll: (position: number, options?: {time?: number, silent?: boolean}) => void,
	getPositions: () => IPositions,
	getScreenHeight: () => number,
}

export class PageScroll extends EventSource implements IPageScroll {

	protected supressEvents: boolean
	protected lastPosition: number
	protected screenHeight: number
	protected slantHeight: number

	constructor () {
		super()

		this.supressEvents = false
		this.lastPosition = 0
		this.onWindowResize()	// init screen height

		window.addEventListener('scroll', this.onWindowScroll)
		window.addEventListener('resize', this.onWindowResize)
	}

	protected onWindowScroll = () => {
		if (!this.supressEvents) {
			super.fire(document.documentElement.scrollTop, this.lastPosition)
			this.lastPosition = document.documentElement.scrollTop
		}
	}

	protected onWindowResize = () => {
		this.screenHeight = window.innerHeight
		this.slantHeight = window.innerHeight * 0.2
	}

	public scroll (position: number, options: {time?: number, silent?: boolean} = {}) {
		if (options.silent) {
			this.supressEvents = true
		}

		if (options.time) {
			$('html, body').animate({scrollTop: position}, options.time)
		} else {
			window.scrollTo(0, position)
		}

		if (options.silent) {
			// wait for render thread to catch up
			window.setTimeout(() => this.supressEvents = false, 10)
		}
	}

	public getPositions (): IPositions {
		return {
			Intro: 0,
			Bio: this.screenHeight + this.slantHeight,
			Stats: this.screenHeight * 2 + this.slantHeight * 2,
			Skills: 0,
			Experience: this.screenHeight,
			Hobby: 0,
		}
	}

	public getScreenHeight () {
		return this.screenHeight
	}
}
