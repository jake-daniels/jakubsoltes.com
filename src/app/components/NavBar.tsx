
import React from 'react'
import {Link} from 'react-router-dom'

interface IProps {
	showContact: () => void,
}

export default class NavBar extends React.PureComponent<IProps> {

	render () {
		const {showContact} = this.props

		return (
			<div className='navbar'>

				<label className='action'>
					<Link to={AppSettings.Routes.Me}> Me </Link>
				</label>

				<span className='separator'>/</span>

				<label className='action'>
					<Link to={AppSettings.Routes.Work}> Work </Link>
				</label>

				<span className='separator'>/</span>

				<label className='action'>
					<Link to={AppSettings.Routes.Hobby}> Hobby </Link>
				</label>

				<span className='separator'>/</span>

				<label className='action' onClick={showContact}>
					<a> Contact </a>
				</label>

			</div>
		)
	}
}
