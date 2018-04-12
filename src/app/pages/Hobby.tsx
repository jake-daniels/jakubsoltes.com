
import React from 'react'
import Hobbies from 'app/components/Hobbies'


interface IProps {}
interface IState {
	isHobbiesFixed: boolean,
	isGalleryVisible: boolean,
}

export default class Hobby extends React.PureComponent<IProps, IState> {

	scrollSubscription: string

	state: IState = {
		isHobbiesFixed: true,
		isGalleryVisible: false,
	}

	componentDidMount () {
		this.scrollSubscription = PageScroll.subscribe(this.onScroll)
	}

	componentWillUnmount () {
		PageScroll.unsubscribe(this.scrollSubscription)
	}

	onScroll = (position: number) => {
		const {isHobbiesFixed} = this.state
		const shouldBeFixed = (position < PageScroll.getScreenHeight())
		if (isHobbiesFixed !== shouldBeFixed) {
			this.setState({isHobbiesFixed: shouldBeFixed})
		}
	}

	showGallery = () => this.setState({isGalleryVisible: true})

	closeGallery = () => this.setState({isGalleryVisible: false})

	render () {
		const {isHobbiesFixed, isGalleryVisible} = this.state

		return (
			<div className='page page-hobby'>
				<Hobbies
					isFixed={isHobbiesFixed}
					isGalleryVisible={isGalleryVisible}
					showGallery={this.showGallery}
					closeGallery={this.closeGallery}
				/>
			</div>
		)
	}
}
