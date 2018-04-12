
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
					<Link to={APP.Routes.Me}> Me </Link>
				</label>

				<span className='separator'>/</span>

				<label className='action'>
					<Link to={APP.Routes.Work}> Work </Link>
				</label>

				<span className='separator'>/</span>

				<label className='action'>
					<Link to={APP.Routes.Hobby}> Hobby </Link>
				</label>

				<span className='separator'>/</span>

				<label className='action' onClick={showContact}>
					<a> Contact </a>
				</label>

			</div>
		)
	}
}
