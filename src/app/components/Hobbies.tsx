
import React from 'react'
import {HobbyConfig, IHobby, EHobby} from 'app/domain/hobby-config'
import Gallery from 'app/components/Gallery'

enum EHexagonType {
	Title = 'title',
	Image = 'image',
	Text = 'text',
	Color = 'color',
}

const HEXAGONS_ORDER_EVEN = [EHexagonType.Title, EHexagonType.Image, EHexagonType.Text, EHexagonType.Color]
const HEXAGONS_ORDER_ODD = [EHexagonType.Color, EHexagonType.Title, EHexagonType.Image, EHexagonType.Text]

interface IProps {
	isFixed: boolean,
	isGalleryVisible: boolean,
	showGallery: () => void,
	closeGallery: () => void,
}

export default class Hobby extends React.PureComponent<IProps> {

	getOrderedHexagons = (i: number) => {
		return (i % 2 === 0)
			? HEXAGONS_ORDER_EVEN
			: HEXAGONS_ORDER_ODD
	}

	onHexagonClicked = (type: EHexagonType, id: EHobby) => {
		if (type === EHexagonType.Color && id === EHobby.Draw) {
			PageScroll.scroll(PageScroll.getPositions().Hobby)
			this.props.showGallery()
		}
	}

	Hexagon = ({type, hobby}: {type: EHexagonType, hobby: IHobby}) => {
		return (
			<div
				className={cn({'hexagon': true, [type]: true, [hobby.id]: true})}
				onClick={() => this.onHexagonClicked(type, hobby.id)}
			>
				{(type === EHexagonType.Title) && (
					<div className='title'>{hobby.title}</div>
				)}
				{(type === EHexagonType.Image) && (
					<div className={cn({'image': true, [hobby.id]: true})}/>
				)}
				{(type === EHexagonType.Text) && (
					<div className='description'>{hobby.description}</div>
				)}
			</div>
		)
	}

	Row = ({index, hobby}: {index: number, hobby: IHobby}) => {
		const hexagons = this.getOrderedHexagons(index)
		return (
			<div className={cn({'row': true, [hobby.id]: true})}>
				{hexagons.map((type, i) => (
					<this.Hexagon key={i} type={type} hobby={hobby} />
				))}
			</div>
		)
	}

	render () {
		const {isFixed, isGalleryVisible, closeGallery} = this.props

		return (
			<div className='page page-hobby'>
				<div className='section section-hobby'>

					<div
						className={cn({
							'bg-image': true,
							'fixed': isFixed,
						})}
					/>

					<div className='content'>
						<h1 className='section-title'> What do I do outside the office? </h1>
						<div className='hobbies'>
							{HobbyConfig.map((hobby, i) => (
								<this.Row key={i} index={i} hobby={hobby}/>
							))}
						</div>
					</div>

					{isGalleryVisible && <Gallery onHide={closeGallery}/>}

				</div>
			</div>
		)
	}
}
