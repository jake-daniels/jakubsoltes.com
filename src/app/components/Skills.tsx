
import React from 'react'
import {SkillsConfig, ISkill, ESkill} from 'app/domain/skills-config'
export {ESkill}

const SEGMENTS_COUNT = SkillsConfig.length
const SEGMENT_ANGLE = 360 / SEGMENTS_COUNT

interface IProps {
	visibleSkills: Array<ESkill | null>,
	activeSkillIndex: number,
	focusSkill: (id: ESkill) => void,
	showExperiences: () => void,
}

export default class Skills extends React.PureComponent<IProps> {

	getActiveSkill = () => {
		const {visibleSkills, activeSkillIndex} = this.props
		return visibleSkills[activeSkillIndex]
	}

	Stars = () => {
		return (
			<div className='stars'>
				<div className='stars-1'/>
				<div className='stars-2'/>
				<div className='stars-3'/>
			</div>
		)
	}

	Orbitals = () => {
		return (
			<div className='orbitals'>
				{Array(3).fill(null).map((_, i) => (
					<div key={i} className='orbit'>
						<div className='orbit-point top'/>
						<div className='orbit-point bottom'/>
						<div className='orbit-point right'/>
						<div className='orbit-point left'/>
					</div>
				))}
			</div>
		)
	}

	OrbSegments = () => {
		const {focusSkill} = this.props

		return (
			<div className='orb-segments'>
				{SkillsConfig.map((skill, index) => (
					<div
						key={index}
						className='segment'
						style={{transform: `rotate(${(index) * SEGMENT_ANGLE}deg)`}}
						onClick={() => focusSkill(skill.id)}
					>
						<i className={cn({'icon': true, [skill.id]: true})}/>
					</div>
				))}
			</div>
		)
	}

	OrbLines = () => {
		return (
			<div className='orb-lines'>
				{SkillsConfig.map((_, i) => (
					<div
						key={i}
						className='line'
						style={{transform: `rotate(${(i + 1) * SEGMENT_ANGLE}deg)`}}
					/>
				))}
			</div>
		)
	}

	OrbCore = () => {
		const activeSkill = this.getActiveSkill()
		const skillId = activeSkill || ''

		return (
			<div
				className={cn({
					'orb-core': true,
					'active': Boolean(activeSkill),
				})}
			>	<div className='logo-wrapper'>
					<i
						className={cn({
							'logo': true,
							[skillId]: true,
						})}
					/>
				</div>
			</div>
		)
	}

	SkillDetailContent = ({skill, isActive}: {skill: ISkill, isActive: boolean}) => {
		return (skill) && (
			<div className='content' style={{opacity: (isActive) ? 1 : 0}}>
				<h2 className='title'> {skill.title} </h2>
				<p className='description current'> {skill.description} </p>
			</div>
		)
	}

	SkillDetail = () => {
		const {visibleSkills, activeSkillIndex} = this.props

		const activeSkill = visibleSkills[activeSkillIndex]
		const details = visibleSkills.map((id) => SkillsConfig.find((skill) => skill.id === id) as ISkill)

		return (
			<div
				className={cn({
					'skill-detail': true,
					'active': Boolean(activeSkill),
				})}
			>
				{details.map((skill, i) => (
					<this.SkillDetailContent
						key={i}
						skill={skill}
						isActive={(activeSkillIndex === i)}
					/>
				))}
			</div>
		)
	}

	render () {
		const {showExperiences} = this.props

		const activeSkill = this.getActiveSkill()

		return (
			<div className='section section-skills'>

				<this.Stars/>

				<h1 className='main-title'>
					Explore my skills...
				</h1>

				<div
					id='orb'
					className={cn({
						'orb': true,
						'skill-active': Boolean(activeSkill),
					})}
				>
					<this.Orbitals/>
					<div className='orb-fan'>
						<this.OrbSegments/>
						<this.OrbLines/>
						<this.OrbCore/>
					</div>
				</div>

				<this.SkillDetail/>

				<div className='next-section-cta'>
					<span className='info'>
						...or run through what I've already done.
					</span>
					<div className='arrow' onClick={showExperiences}>
						<div className='icon'>
							<i className='fa-icon down' />
						</div>
					</div>
				</div>

			</div>
		)
	}
}

