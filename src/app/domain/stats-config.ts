
export enum EStat {
	Analysis = 'analysis',
	Chat = 'chat',
	Structure = 'structure',
	Learn = 'learn',
	Team = 'team',
	Detail = 'detail',
	Leader = 'leader',
	Creative = 'creative',
	Time = 'time',
	Art = 'art',
}

export interface IStat {
	id: EStat,
	label: string,
	description: string,
	position: StatPosition,
}

export enum StatPosition {
	Left = 'left',
	Right = 'right',
}

export const StatsConfig = [
	{
		id: EStat.Analysis,
		label: 'analytic thinker',
		description: 'The more difficult the problem is, the greater satisfaction comes with the solution.',
		position: StatPosition.Left,
	},
	{
		id: EStat.Chat,
		label: 'effective communicator',
		description: 'Nothing can beat personal contact, confidence and open mind.',
		position: StatPosition.Right,
	},
	{
		id: EStat.Structure,
		label: 'well organized',
		description: 'Small OCD can be a good thing. I like to keep my projects cleaned up.',
		position: StatPosition.Left,
	},
	{
		id: EStat.Learn,
		label: 'quick learner',
		description: 'The importance of learning is in application of the knowledge.',
		position: StatPosition.Left,
	},
	{
		id: EStat.Team,
		label: 'team player',
		description: 'Within a team I can achieve things that wouldn\'t be possible while working alone.',
		position: StatPosition.Right,
	},
	{
		id: EStat.Detail,
		label: 'detail oriented',
		description: 'The quality is in the details. That was proven many times in my life.',
		position: StatPosition.Left,
	},
	{
		id: EStat.Leader,
		label: 'leadership tendency',
		description: 'Motivation is the key when there\'s need for lead.',
		position: StatPosition.Right,
	},
	{
		id: EStat.Creative,
		label: 'creative mind',
		description: 'Creative approach results in best solutions.',
		position: StatPosition.Right,
	},
	{
		id: EStat.Time,
		label: 'time management addict',
		description: 'I\'m interested in many activities. Tracking my time helps me actually do them.',
		position: StatPosition.Left,
	},
	{
		id: EStat.Art,
		label: 'aesthetic sense',
		description: '"Earth" without "art" would be just "Eh".',
		position: StatPosition.Right,
	},
]
