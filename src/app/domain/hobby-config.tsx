
import React from 'react'

export enum EHobby {
	Dance = 'dance',
	Draw = 'draw',
	Exercise = 'exercise',
	Play = 'play',
	Chill = 'chill',
}

export interface IHobby {
	id: EHobby,
	title: string,
	description: JSX.Element,
}

export const HobbyConfig = [
	{
		id: EHobby.Dance,
		title: 'I dance',
		description: (
			<span>
				I started dancing on swing music in 2015 and
				it quickly became one of my biggest passions.
				Whether it is Lindy Hop, Charleston or Collegiate Shag,
				I can't resist the urge to move to that syncopated rhythm.
				I simply love those upbeat melodies and playful moods.
				30's fashion is the cherry on top.
			</span>
		),
	},
	{
		id: EHobby.Draw,
		title: 'I draw',
		description: (
			<span>
				If I were to name one activity, in which I'm completely
				losing the perception of time, it would be drawing.
				I can spend the entire day drawing without feeling tired of it.
			</span>
		),
	},
	{
		id: EHobby.Exercise,
		title: 'I exercise',
		description: (
			<span>
				After hours spent sitting behind the screen, nothing can refresh me
				as much as exercising. I love playing badminton for it's dynamic nature.
				I regularly swim and run because it calms me.
				And when I want to release excessive energy, weight-lifting is a way to go.
			</span>
		),
	},
	{
		id: EHobby.Play,
		title: 'I play',
		description: (
			<span>
				I have been playing the guitar since I was 15 when I started a high school rock band.
				Even though I don't have much time to play now,
				my passion for music roots deep in my soul.
				In the future, I would like to learn to play on piano.
			</span>
		),
	},
	{
		id: EHobby.Chill,
		title: 'I chill',
		description: (
			<span>
				My favorite way to relax are long walks with my wife.
				And when we don't feel like doing anything, we cook some food and watch a movie.
				I also like to play chess in spite of being terrible at it
				and I never say no to a good read.
			</span>
		),
	},
]
