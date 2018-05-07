
import React from 'react'
import {Route, Switch, withRouter} from 'react-router-dom'
import * as EmailJS from 'emailjs-com'
// import ReactGA from 'react-ga'

// Pages
import Me from 'app/pages/Me'
import Work from 'app/pages/Work'
import Hobby from 'app/pages/Hobby'

// Components
import NavBar from 'app/components/NavBar'
import Footer from 'app/components/Footer'
import Contact, {IContactData} from 'app/components/Contact'

interface IProps extends IRouterProps {}
interface IState {
	isContactVisible: boolean,
}

class PageController extends React.Component<IProps, IState> {

	constructor (props: IProps) {
		super(props)
		// Google Analytics
		// ReactGA.initialize('UA-117837028-1')
		// props.history.listen((location, action) => ReactGA.pageview(location.pathname))
	}

	state: IState = {
		isContactVisible: false,
	}

	showContact = () => this.setState({isContactVisible: true})

	hideContact = () => this.setState({isContactVisible: false})

	sendMessage = (data: IContactData) => {
		EmailJS.send(
			AppSettings.Email.serviceID,
			AppSettings.Email.templateID,
			{
				from_email: data.email,
				from_name: data.name,
				message_body: data.message,
			},
			AppSettings.Email.userID,
		)
	}

	downloadCV = () => {
		const link = document.createElement('a')
		link.href = AppSettings.CVPath
		link.download = AppSettings.CVFilename
		document.body.appendChild(link)
		link.click()
		document.body.removeChild(link)
	}

	render () {
		const {isContactVisible} = this.state

		const renderMePage = (props) => (
			<Me
				{...props}
				downloadCV={this.downloadCV}
				showContact={this.showContact}
			/>
		)

		return (
			<div className='app-page'>
				<NavBar
					showContact={this.showContact}
					onPageChange={this.hideContact}
				/>
				<Switch>
					<Route exact={true} path={AppSettings.Routes.Me} render={renderMePage}/>
					<Route exact={true} path={AppSettings.Routes.Work} component={Work} />
					<Route exact={true} path={AppSettings.Routes.Hobby} component={Hobby} />
					<Route render={renderMePage} />
				</Switch>
				<Footer />
				{isContactVisible && (
					<Contact
						onSend={this.sendMessage}
						onHide={this.hideContact}
					/>
				)}
			</div>
		)
	}
}

export default withRouter(PageController)