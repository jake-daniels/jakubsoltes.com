
import React from 'react'

export enum ESkill {
	HTML = 'html',
	CSS = 'css',
	JS = 'js',
	React = 'react',
	Redux = 'redux',
	DevBasics = 'dev-basics',
	Testing = 'testing',
	Graphics = 'graphic-design',
	Git = 'git',
	Architecture = 'architecture',
}

export interface ISkill {
	id: ESkill,
	title: string,
	description: JSX.Element,
}

export const SkillsConfig = [
	{
		id: ESkill.HTML,
		title: 'HTML',
		description: (
			<span>
				HTML represents the backbone of every web application.
				It matured over time and the latest HTML5 revealed the true power of this technology.
				Every web developer works with it on a daily basis and I'm not an exception.
			</span>
		),
	},
	{
		id: ESkill.CSS,
		title: 'CSS',
		description: (
			<span>
				{'"You are the {CSS} to my <HTML/>"'} says the popular t-shirt.
				Well, I'm more of a JS to your HTML but I don't mind styling components.
				Actually, with CSS3 features it's a nice break from complex logic in JavaScript.
			</span>
		),
	},
	{
		id: ESkill.JS,
		title: 'JavaScript',
		description: (
			<span>
				JavaScript is my primary language in development.
				This tool gives me the power to reveal a true potential of application front-end.
				I started with VanillaJS and learned a lot with its evolution up to ES8.
				Right now I'm exploring the charms of TypeScript and I'm a big fan of it so far.
			</span>
		),
	},
	{
		id: ESkill.React,
		title: 'React',
		description: (
			<span>
				React is possibly the best framework I have ever worked with and
				I'm not talking about JavaScript only. React is simple, yet powerful.
				It follows the principles of functional programming and
				with every new version of React I'm more assured
				it's a step in the right direction.
			</span>
		),
	},
	{
		id: ESkill.Redux,
		title: 'Redux',
		description: (
			<span>
				It started as a simple solution for state management problems in single-page applications.
				It ended up as one of the most popular libraries with a large ecosystem.
				Redux might not be the ultimate solution for state management but it's darn close.
				I love it.
			</span>
		),
	},
	{
		id: ESkill.DevBasics,
		title: 'SW Development 101',
		description: (
			<span>
				I feel that many front-end developers jumped quite quickly right
				into that fancy world of React and Angular. However, they lack basic development skills like
				design patterns, algorithmisation, sense of decomposition or data modeling.
				I have worked in IT for almost 10 years now and can't imagine development without this solid foundation.
			</span>
		),
	},
	{
		id: ESkill.Testing,
		title: 'Testing',
		description: (
			<span>
				Even though front-end testing is difficult and has its specifics,
				I was taught to test my code through the entire university and I've been doing it since then.
				I have experience with TDD, Unit testing and Performance testing.
			</span>
		),
	},
	{
		id: ESkill.Graphics,
		title: 'Graphic Design',
		description: (
			<span>
				My interest in graphic design helps me keep up with the latest trends in web design.
				Even though I've never been doing it professionally, I'm quite skilled in Adobe Photoshop.
				Therefore I'm able to do most of the front-end graphic work by myself.
			</span>
		),
	},
	{
		id: ESkill.Git,
		title: 'Git',
		description: (
			<span>
				In my opinion, Git is the perfect version control tool.
				Every front-end developer should have mastered it.
				And I don't mean only cloning a repository and basic work with branches.
				Cherry-pick, interactive rebase or squash are very useful tools in the box.
			</span>
		),
	},
	{
		id: ESkill.Architecture,
		title: 'SW Architecture',
		description: (
			<span>
				Design time has always been my favorite part of the development process.
				I love those days spent on product analysis and design of fundamental app structure.
				I may not know every little JS trick but when it comes application architecture, I'm the guy for it.
			</span>
		),
	},
]
