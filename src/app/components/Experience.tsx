
import React from 'react'
import {EventsConfig, IEvent, EEvent} from 'app/domain/experience-config'
import $ from 'jquery'

export {EEvent}

interface IProps {
	activeEvent: EEvent,
	focusEvent: (event: EEvent) => void,
}

export default class Experience extends React.PureComponent<IProps> {

	scrollX: number = 0

	componentDidMount () {
		$('.section-experience').bind('mousewheel', this.onMouseWheel)
	}

	componentWillUnmount () {
		$('.section-experience').unbind('mousewheel', this.onMouseWheel)
	}

	onMouseWheel = (e) => {
		const SCROLL_THRESHOLD = 120

		const delta = (e.shiftKey)
			? e.originalEvent.wheelDelta
			: e.originalEvent.wheelDeltaX

		this.scrollX += delta

		if (Math.abs(this.scrollX) >= SCROLL_THRESHOLD) {
			if (this.scrollX > 0) {
				this.showPrevious()
			} else {
				this.showNext()
			}
			this.scrollX = 0
		}
	}

	showPrevious = () => {
		const {activeEvent, focusEvent} = this.props

		const activeEventIndex = EventsConfig.findIndex((event) => event.id === activeEvent)
		if (activeEventIndex > 0) {
			const previousEvent = EventsConfig[activeEventIndex - 1]
			focusEvent(previousEvent.id)
		}
	}

	showNext = () => {
		const {activeEvent, focusEvent} = this.props

		const activeEventIndex = EventsConfig.findIndex((event) => event.id === activeEvent)
		if (activeEventIndex < EventsConfig.length - 1) {
			const nextEvent = EventsConfig[activeEventIndex + 1]
			focusEvent(nextEvent.id)
		}
	}

	showStart = () => {
		const firstEvent = EventsConfig[0]
		this.props.focusEvent(firstEvent.id)
	}

	showEnd = () => {
		const lastEvent = EventsConfig[EventsConfig.length - 1]
		this.props.focusEvent(lastEvent.id)
	}

	Event = ({event}: {event: IEvent}) => {
		const {activeEvent, focusEvent} = this.props

		return (
			<div
				className={cn({
					'event': true,
					'active': (event.id === activeEvent),
					[event.id]: true,
				})}
			>
				<div className='icon-circle' onClick={() => focusEvent(event.id)}>
					<i className={cn({'icon': true, [event.id]: true})}/>
				</div>
				<div className='arrow' onClick={() => focusEvent(event.id)}>
					<div className='half top'/>
					<div className='half bottom'/>
					<div className='year'> {event.year} </div>
				</div>
				<div className='content'>
					<div className='title'> {event.title} </div>
					<div className='subtitle'> {event.subtitle} </div>
					<div className='description'> {event.description} </div>
				</div>
			</div>
		)
	}

	Navigation = () => {
		const {activeEvent} = this.props

		const activeEventIndex = EventsConfig.findIndex((event) => event.id === activeEvent)
		const showBack = (activeEventIndex > 1)
		const showForward = (activeEventIndex < EventsConfig.length - 2)

		return (
			<div className='navigation'>
				{(showBack) && (
					<div className='action back' onClick={this.showStart}>
						<i className='fa-icon backward' />
						Back in time
					</div>
				)}
				{(showForward) && (
					<div className='action forward' onClick={this.showEnd}>
						To the future
						<i className='fa-icon forward' />
					</div>
				)}
			</div>
		)
	}

	Timeline = () => {
		const {activeEvent} = this.props

		return (
			<div className='timeline'>

				<div className='baseline'/>

				<div
					className={cn({
						'events': true,
						'active': Boolean(activeEvent),
						[activeEvent]: Boolean(activeEvent),
					})}
				>
					{EventsConfig.map((event, i) => (
						<this.Event key={i} event={event}/>
					))}
				</div>
			</div>
		)
	}

	render () {
		return (
			<div className='section section-experience fixed'>

				<div className='bg-image'/>

				<div className='content-overlay'>
					<this.Navigation/>
					<this.Timeline/>
				</div>

			</div>
		)
	}
}
