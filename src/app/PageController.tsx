
import React from 'react'
import {Route, Switch} from 'react-router-dom'
import * as EmailJS from 'emailjs-com'

// Pages
import Me from 'app/pages/Me'
import Work from 'app/pages/Work'
import Hobby from 'app/pages/Hobby'

// Components
import NavBar from 'app/components/NavBar'
import Footer from 'app/components/Footer'
import Contact, {IContactData} from 'app/components/Contact'

import CV_PATH from '../files/Jakub-Soltes-CV.pdf'
const CV_FILENAME = 'Jakub-Soltes-CV'

interface IState {
	isContactVisible: boolean,
}

export default class Page extends React.Component<{}, IState> {

	state: IState = {
		isContactVisible: false,
	}

	showContact = () => this.setState({isContactVisible: true})

	hideContact = () => this.setState({isContactVisible: false})

	sendMessage = (data: IContactData) => {
		EmailJS.send(
			APP.Email.serviceID,
			APP.Email.templateID,
			{
				from_email: data.email,
				from_name: data.name,
				message_body: data.message,
			},
			APP.Email.userID,
		)
	}

	downloadCV = () => {
		const link = document.createElement('a')
		link.href = CV_PATH
		link.download = CV_FILENAME
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
				<NavBar showContact={this.showContact}/>
				<Switch>
					<Route exact={true} path={APP.Routes.Me} render={renderMePage} />
					<Route exact={true} path={APP.Routes.Work} component={Work} />
					<Route exact={true} path={APP.Routes.Hobby} component={Hobby} />
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