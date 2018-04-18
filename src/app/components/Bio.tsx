
import React from 'react'
import {NavigationActionConfig, NavigationActionType, INavigationAction} from 'app/domain/navigation-config'
export {NavigationActionType}

export enum Screen {
	Summary = 'summary',
	Navigation = 'navigation',
}

interface IProps {
	screen: Screen,
	isLast: boolean,
	isFixed: boolean,

	setScreen: (screen: Screen) => void,
	onNavigationAction: (actionType: NavigationActionType) => void,
}

export default class Bio extends React.PureComponent<IProps> {

	Summary = () => {
		const {setScreen} = this.props

		return (
			<div className='text-block'>
				<p className='greeting'>
					Hi, I'm Jakub.
				</p>
				<p>
					I am a senior software engineer <br/>
					currently based in Brno, Czech republic.
				</p>
				<p>
					My primary field is the development of front-end for web applications.
					I focus especially on the architecture of the codebase and quality of it's design.
				</p>
				<p>
					What differs me from others is my <br/>
					multi-disciplined approach to work.<br/>
					Besides development, I have experience with graphic design, product analysis and project management.<br/>
					I like to explore new technologies and I'm always for a good team-work.
				</p>
				<span className='cta-link' onClick={() => setScreen(Screen.Navigation)}>
					Interested in more?
				</span>
			</div>
		)
	}

	Navigation = () => {
		const {setScreen} = this.props

		return (
			<div className='navigation'>
				<div className='icon-close' onClick={() => setScreen(Screen.Summary)}>
					<i className='fa-icon back'/>
				</div>
				<h1 className='title'>Let me show you more</h1>
				<div className='cta-box primary'>
					{NavigationActionConfig
						.filter((item) => item.primary)
						.map((item, i) => <this.PrimaryActionButton key={i} button={item}/>)
					}
				</div>
				<div className='cta-box secondary'>
					{NavigationActionConfig
						.filter((item) => !item.primary)
						.map((item, i) => <this.SecondaryActionButton key={i} button={item} />)
					}
				</div>
			</div>
		)
	}

	PrimaryActionButton = ({button}: {button: INavigationAction}) => {
		const {onNavigationAction} = this.props

		return (
			<div className='item primary-item' onClick={() => onNavigationAction(button.actionType)}>
				<i className={cn({'icon': true, [button.actionType]: true})}/>
				<div className='label'>
					{button.label}
				</div>
				<span className='description'>
					{button.description}
				</span>
			</div>
		)
	}

	SecondaryActionButton = ({button}: {button: INavigationAction}) => {
		const {onNavigationAction} = this.props

		return (
			<div className='item secondary-item' onClick={() => onNavigationAction(button.actionType)}>
				<i className={cn({'icon': true, [button.actionType]: true})}/>
				<div className='label'>
					{button.label}
				</div>
			</div>
		)
	}

	render () {
		const {screen, isLast, isFixed} = this.props

		return (
			<div
				className={cn({
					'section': true,
					'section-bio': true,
					'last-section': isLast,
					'navigation-active': (screen === Screen.Navigation),
				})}
			>
				<div
					className={cn({
						'bg-image': true,
						'fixed': isFixed,
						'blurred': (screen === Screen.Navigation),
					})}
				/>

				<div className='content-overlay'>
					{(screen === Screen.Summary) && (
						<this.Summary/>
					)}
					{(screen === Screen.Navigation) && (
						<this.Navigation/>
					)}
				</div>

			</div>
		)
	}
}
