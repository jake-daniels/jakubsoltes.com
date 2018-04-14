
import React from 'react'
import URI from 'urijs'
import isEqual from 'lodash/isEqual'

import Intro from 'app/components/Intro'
import Bio, {Screen as BioScreen, NavigationActionType} from 'app/components/Bio'
import Stats, {EStat} from 'app/components/Stats'


interface IProps extends IRouterProps {
	downloadCV: () => void,
	showContact: () => void,
}

interface IState {
	bioScreen: BioScreen,
	isBioFixed: boolean,
	isStatsFixed: boolean,
	isStatsVisible: boolean,
	revealedStats: EStat[],
}

export default class Me extends React.PureComponent<IProps, IState> {

	scrollSubscription: string = ''

	state: IState = {
		bioScreen: BioScreen.Summary,
		isBioFixed: true,
		isStatsFixed: true,
		isStatsVisible: false,
		revealedStats: [],
	}

	// Lifecycle

	componentDidMount () {
		this.scrollSubscription = PageScroll.subscribe(this.onScroll)
		this.inspectLocation(this.props.location)
	}

	componentWillReceiveProps (nextProps: IProps) {
		this.inspectLocation(nextProps.location)
	}

	componentWillUnmount () {
		PageScroll.unsubscribe(this.scrollSubscription)
	}

	// Methods

	inspectLocation = (location: any) => {
		// clear URL
		if (location.pathname !== AppSettings.Routes.Me) {
			this.props.history.push({pathname: AppSettings.Routes.Me})
		}

		const {bio, stats} = URI.parseQuery(location.search)

		this.setState({
			bioScreen: bio || BioScreen.Summary,
			isStatsVisible: Boolean(stats),
		})
	}

	onScroll = (position: number) => {
		const currentState = {
			isBioFixed: this.state.isBioFixed,
			isStatsFixed: this.state.isStatsFixed,
		}
		const nextState = {
			isBioFixed: this.isBioFixed(position),
			isStatsFixed: this.isStatsFixed(position),
		}
		if (!isEqual(currentState, nextState)) {
			this.setState({...nextState})
		}
	}

	isBioFixed = (position: number) => {
		const {isStatsVisible} = this.state
		if (!isStatsVisible) {
			return !(position > PageScroll.getPositions().Bio)
		} else {
			return !(position > PageScroll.getPositions().Stats - PageScroll.getScreenHeight())
		}
	}

	isStatsFixed = (position: number) => {
		const {isStatsVisible} = this.state
		if (!isStatsVisible) {
			return true
		} else {
			return !(position > PageScroll.getPositions().Stats)
		}
	}

	// Navigation

	showBio = () => {
		PageScroll.scroll(PageScroll.getPositions().Bio, {time: AppSettings.DefaultScrollTime})
	}

	setBioScreen = (screen: BioScreen) => {
		const {location, history} = this.props

		history.push({
			pathname: location.pathname,
			search: URI(location.search).setSearch({bio: screen}).search(),
		})

		if (screen === BioScreen.Navigation) {
			PageScroll.scroll(PageScroll.getPositions().Bio)
		}
	}

	onNavigationAction = (actionType: NavigationActionType) => {
		const config = {
			[NavigationActionType.Stats]: this.showStats,
			[NavigationActionType.Work]: this.showWork,
			[NavigationActionType.Hobby]: this.showHobby,
			[NavigationActionType.Download]: this.downloadCV,
			[NavigationActionType.Message]: this.sendMessage,
		}
		const onAction = config[actionType]
		onAction()
	}

	showStats = () => {
		const {location, history} = this.props

		history.push({
			pathname: location.pathname,
			search: URI(location.search).setSearch({stats: true}).search(),
		})

		PageScroll.scroll(PageScroll.getPositions().Stats, {time: AppSettings.DefaultScrollTime})
	}

	showWork = () => {
		this.props.history.push(AppSettings.Routes.Work)
	}

	showHobby = () => {
		this.props.history.push(AppSettings.Routes.Hobby)
	}

	downloadCV = () => {
		this.props.downloadCV()
	}

	sendMessage = () => {
		this.props.showContact()
	}

	revealStat = (id: EStat) => {
		const revealedStats = [...this.state.revealedStats, id]
		this.setState({revealedStats})
	}

	// Render

	render () {
		const {isBioFixed, isStatsFixed, bioScreen, isStatsVisible, revealedStats} = this.state

		return (
			<div className='page page-me'>

				<Intro showBio={this.showBio}/>

				<Bio
					screen={bioScreen}
					isLast={!isStatsVisible}
					isFixed={isBioFixed}
					setScreen={this.setBioScreen}
					onNavigationAction={this.onNavigationAction}
				/>

				{isStatsVisible && (
					<Stats
						isFixed={isStatsFixed}
						revealed={revealedStats}
						reveal={this.revealStat}
					/>
				)}

			</div>
		)
	}
}
