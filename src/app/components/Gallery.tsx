
import React from 'react'
import Slider from 'react-slick'


const SLIDER_SETTINGS = {
	dots: true,
	infinite: true,
	speed: 500,
	slidesToShow: 1,
	slidesToScroll: 1,
}

const IMAGES_COUNT = 9
const IMAGES_PATHS = Array(IMAGES_COUNT)
	.fill(null)
	.map((_, i) => require(`../../images/gallery/${i + 1}.jpg`))

interface IProps {
	onHide: () => void,
}

export default class Gallery extends React.PureComponent<IProps> {

	slider = React.createRef<Slider>()

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
			this.slider.current.slickPrev()
		}
		if (e.key === 'ArrowRight') {
			this.slider.current.slickNext()
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
					<Slider {...SLIDER_SETTINGS} ref={this.slider}>
						{IMAGES_PATHS.map((path, i) => (
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