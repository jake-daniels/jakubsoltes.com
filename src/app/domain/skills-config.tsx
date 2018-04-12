
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
				It matured over time and the latest HTML5 revealed
				the true power of this technology. Every web developer works
				with it on daily basis and I'm not an exception.
			</span>
		),
	},
	{
		id: ESkill.CSS,
		title: 'CSS',
		description: (
			<span>
				{'"You are the {CSS} to my <HTML/>"'} says the popular t-shirt.
				Well, I'm more of a JS to your HTML, but I don't mind styling components.
				Actually, with CSS3 features it's fun and a pleasant break from complex logic in JavaScript.
			</span>
		),
	},
	{
		id: ESkill.JS,
		title: 'JavaScript',
		description: (
			<span>
				JavaScript is my primary language in development.
				This tool gives me the power to reveal a true potential of application frontend.
				I started with VanillaJS and learned a lot with it's evolution up to ES8.
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
				I'm not talking only about frameworks for JavaScript.
				React is simple, yet powerfull.
				It follows the principles of functional programming and
				I think it's a step in the right direction.
			</span>
		),
	},
	{
		id: ESkill.Redux,
		title: 'Redux',
		description: (
			<span>
				It started as a simple solution for state management problems in single-page applications.
				It ended as one of the most popular libraries in JS world with large ecosystem.
				Redux may not be the ultimate solution for state management, but it's darn close.
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
				design patterns, algorithmisation, sense of decomposition or data modelling.
				I work in IT for almost 10 years now and can't imagine development without this solid foundation.
			</span>
		),
	},
	{
		id: ESkill.Testing,
		title: 'Testing',
		description: (
			<span>
				Even though frontend testing is difficult and has it's specifics,
				I was teached to test my code through the entire university and I'm doing it since then.
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
				Even though I've never been doing it professionaly, I'm quite skilled in Adobe Photoshop.
				Therefore I'm able to do most of front-end graphic work by myself.
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
				Cherry-pick, interactive rebase or squash are very usefool tools in the box.
			</span>
		),
	},
	{
		id: ESkill.Architecture,
		title: 'SW Architecture',
		description: (
			<span>
				Design time has always been my favorite part of development process.
				I love those days spent by product analysis and design of fundamental app structure.
				I may not know every little JS trick but when it comes application architecture, I'm the guy for it.
			</span>
		),
	},
]
