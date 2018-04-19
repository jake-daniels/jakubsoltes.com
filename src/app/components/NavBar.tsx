
import React from 'react'
import {Link} from 'react-router-dom'

interface IProps {
	onPageChange: () => void,
	showContact: () => void,
}

export default class NavBar extends React.PureComponent<IProps> {

	render () {
		const {onPageChange, showContact} = this.props

		return (
			<div className='navbar'>

				<label className='action'>
					<Link to={AppSettings.Routes.Me} onClick={onPageChange}> Me </Link>
				</label>

				<span className='separator'>/</span>

				<label className='action'>
					<Link to={AppSettings.Routes.Work} onClick={onPageChange}> Work </Link>
				</label>

				<span className='separator'>/</span>

				<label className='action'>
					<Link to={AppSettings.Routes.Hobby} onClick={onPageChange}> Hobby </Link>
				</label>

				<span className='separator'>/</span>

				<label className='action' onClick={showContact}>
					<a> Contact </a>
				</label>

			</div>
		)
	}
}
