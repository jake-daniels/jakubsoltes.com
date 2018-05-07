
import React from 'react'

export interface IProps {
	src: string,
	className?: string,
	placeholder?: string,
}

export default class LazyImage extends React.PureComponent<IProps> {

	image = React.createRef<HTMLImageElement>()
	loader = React.createRef<HTMLSpanElement>()

	componentDidMount () {
		this.loadImage()
	}

	private loadImage = () => {
		const node = this.image.current!
		const src = node.getAttribute('data-src') as string
		node.setAttribute('src', src)
		node.onload = () => this.showImage()
	}

	private showImage = () => {
		if (this.image.current) {
			this.image.current.removeAttribute('data-src')
			this.image.current.style.opacity = '1'
			if (this.loader.current) {
				this.loader.current.remove()
			}
		}
	}

	render () {
		const {src, className = '', ...otherProps} = this.props

		return (
			<div className={cn({'lazy-image-wrapper': true, [className]: true})}>

				<span ref={this.loader} className='lazy-image-loader'>
					<div className='spinner'>
						<div className='bounce1' />
						<div className='bounce2' />
						<div className='bounce3' />
					</div>
				</span>

				<img
					ref={this.image}
					data-src={src}
					{...otherProps}
				/>

			</div>
		)
	}
}
