
import React from 'react'

export default class Footer extends React.PureComponent {

	render () {
		return (
			<div className='footer'>

				<p className='line'>
					Additional methods for stalking:
					<span className='social-icon'>
						<i className='icon linkedin' />
						<a className='link' target='_blank' href='https://www.linkedin.com/in/jakubsoltes'>in/jakubsoltes</a>
					</span>
					<span className='social-icon'>
						<i className='icon github' />
						<a className='link' target='_blank' href='https://github.com/jake-daniels'>jake-daniels</a>
					</span>
				</p>

				<p className='line'>
					No animals were harmed in making of this website.
				</p>

				<p className='line'>
					Created with ♥ in VS Code.
					Source code hosted on <a className='link' target='_blank' href='https://github.com/jake-daniels/jakubsoltes.com'>GitHub</a>.
				</p>

			</div>
		)
	}
}
