
import React from 'react'
import {StatsConfig, IStat, EStat, StatPosition} from 'app/domain/stats-config'
export {EStat}

interface IProps {
	isFixed: boolean,
	revealed: EStat[],
	reveal: (id: EStat) => void,
}

export default class Stats extends React.PureComponent<IProps> {

	Badge = ({stat}: {stat: IStat}) => {
		const {revealed, reveal} = this.props

		const isRevealed = revealed.some((id: EStat) => id === stat.id)

		return (
			<div
				className={cn({
					'badge': true,
					[stat.id]: true,
					'revealed': isRevealed,
				})}
				onClick={() => reveal(stat.id)}
			>

				<div className='coin'>
					<div className='outer-ring'/>
					<div className='circle'>
						<div className='front'>
							<i className='fa-icon question' />
						</div>
						<div className='back'>
							<i className={cn({'stat-icon': true, [stat.id]: true})}/>
						</div>
					</div>
				</div>

				{(isRevealed) && <div className='label'>{stat.label}</div>}

			</div>
		)
	}

	StatsPanel = ({position}: {position: StatPosition}) => {
		const {revealed} = this.props

		const stats = StatsConfig.filter((stat) => stat.position === position)

		return (
			<div className={cn({'descriptions': true, [position]: true})}>
				{stats.map((stat, i) => {
					const isRevealed = revealed.some((id) => id === stat.id)
					return (
						<div key={i} className={cn({'item': true, 'revealed': isRevealed})}>
							{stat.description}
						</div>
					)
				})}
			</div>
		)
	}

	BadgeBox = () => {
		return (
			<div className='badge-box'>
				<div className='badges'>
					{StatsConfig.map((stat, i) => (
						<this.Badge key={i} stat={stat}/>
					))}
				</div>
			</div>
		)
	}

	render () {
		const {isFixed} = this.props

		return (
			<div
				className={cn({
					'section': true,
					'section-stats': true,
					'fixed': isFixed,
				})}
			>
				<div className='bg-image'/>
				<div className='content-overlay'>
					<this.StatsPanel position={StatPosition.Left}/>
					<this.BadgeBox/>
					<this.StatsPanel position={StatPosition.Right}/>
				</div>
			</div>
		)
	}
}
