
import React from 'react'


interface IProps {
	showBio: () => void,
}

export default class Intro extends React.PureComponent<IProps> {

	render () {
		const {showBio} = this.props

		return (
			<div className='section section-intro'>

				<div className='bg-image'/>

				<div className='content-overlay'>

					<div className='text-wrapper'>
						<div className='text'>
							<h1>Jakub Šoltés</h1>
							<div className='separator'/>
							<h2>front-end web developer</h2>
						</div>
					</div>

					<div className='arrow' onClick={showBio}>
						<div className='icon'>
							<i className='fa-icon down' />
						</div>
					</div>

				</div>

			</div>
		)
	}
}
