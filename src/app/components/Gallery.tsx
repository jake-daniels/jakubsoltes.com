
import React from 'react'
import Slider from 'react-slick'


const SLIDER_SETTINGS = {
	dots: true,
	infinite: true,
	speed: 500,
	slidesToShow: 1,
	slidesToScroll: 1,
}

const IMAGE_PATHS = Array(9)
	.fill(null)
	.map((_, i) => require(`../../images/gallery/${i + 1}.jpg`))

interface IProps {
	onHide: () => void,
}

export default class Gallery extends React.PureComponent<IProps> {

	slider: Slider | null = null

	componentDidMount () {
		document.body.style.overflow = 'hidden'
		window.addEventListener('keydown', this.onKeyDown)

	}

	componentWillUnmount () {
		document.body.style.overflow = 'visible'
		window.removeEventListener('keydown', this.onKeyDown)
	}

	onKeyDown = (e) => {
		if (e.key === 'Escape') {
			this.props.onHide()
		}
		if (e.key === 'ArrowLeft') {
			this.slider.slickPrev()
		}
		if (e.key === 'ArrowRight') {
			this.slider.slickNext()
		}
	}

	render () {
		const {onHide} = this.props

		return (
			<div className='gallery'>

				<div className='icon-close' onClick={onHide}>
					<i className='fa-icon back' />
				</div>

				<div className='slider'>
					<Slider {...SLIDER_SETTINGS} ref={(ref) => this.slider = ref}>
						{IMAGE_PATHS.map((path, i) => (
							<div key={i} className='item'>
								<img src={path}/>
							</div>
						))}
					</Slider>
				</div>

			</div>
		)
	}
}