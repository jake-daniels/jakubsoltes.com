
import React from 'react'
import Skills, {ESkill} from 'app/components/Skills'
import Experience, {EEvent} from 'app/components/Experience'


interface IProps extends IRouterProps {}

interface IState {
	visibleSkills: Array<ESkill | null>,
	activeSkillIndex: number,
	activeEvent: EEvent,
}

export default class Work extends React.PureComponent<IProps, IState> {

	state: IState = {
		visibleSkills: [],
		activeSkillIndex: 0,
		activeEvent: EEvent.RoiHunter,
	}

	focusSkill = (skill: ESkill) => {
		const {visibleSkills, activeSkillIndex} = this.state
		const nextSkillIndex = (activeSkillIndex + 1) % 2
		visibleSkills[nextSkillIndex] = skill
		this.setState({visibleSkills, activeSkillIndex: nextSkillIndex})
	}

	focusEvent = (event: EEvent) => {
		this.setState({activeEvent: event})
	}

	showExperiences = () => {
		PageScroll.scroll(PageScroll.getPositions().Experience, {time: AppSettings.DefaultScrollTime})
	}

	render () {
		const {visibleSkills, activeSkillIndex, activeEvent} = this.state

		return (
			<div className='page page-work'>

				<Skills
					visibleSkills={visibleSkills}
					activeSkillIndex={activeSkillIndex}
					focusSkill={this.focusSkill}
					showExperiences={this.showExperiences}
				/>

				<Experience
					activeEvent={activeEvent}
					focusEvent={this.focusEvent}
				/>

			</div>
		)
	}
}
