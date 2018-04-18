
import React from 'react'
import Link from 'app/components/EventLink'

const Links = {
	FIT: <Link href='http://www.fit.vutbr.cz/'>Faculty of Information Technology</Link>,
	VUT: <Link href='https://www.vutbr.cz/'>Brno University of Technology</Link>,
	inQool: <Link href='https://inqool.cz/'>inQool</Link>,
	ARTSTAQ: <Link href='https://www.artstaq.com/'>ARTSTAQ</Link>,
	FI: <Link href='https://fi.muni.cz/'>Faculty of Informatics</Link>,
	MUNI: <Link href='https://www.muni.cz/'>Masaryk University</Link>,
	SSME: <Link href='http://ssme.fi.muni.cz/en/student/about-ssme'>Service science, Management and Engineering</Link>,
	ROIHunter: <Link href='https://www.roihunter.com/'>ROI Hunter</Link>,
	AsyncRender: <Link href='https://reactjs.org/blog/2018/03/01/sneak-peek-beyond-react-16.html'>Async Rendering</Link>,
	ReactNative: <Link href='https://facebook.github.io/react-native/'>React Native</Link>,
	MobX: <Link href='https://mobx.js.org/'>MobX</Link>,
	ReduxSaga: <Link href='https://redux-saga.js.org/'>Redux-Saga</Link>,
	RxJS: <Link href='http://reactivex.io/'>RxJS</Link>,
	GraphQL: <Link href='http://graphql.org/'>GraphQL</Link>,
	Relay: <Link href='https://facebook.github.io/relay/'>Relay</Link>,
	Apollo: <Link href='https://www.apollographql.com/'>Apollo</Link>,
	NEXTjs: <Link href='https://learnnextjs.com/'>NEXT.js</Link>,
	ProgressiveWebApps: <Link href='https://developers.google.com/web/progressive-web-apps/'>Progressive Web Apps</Link>,
	WebSockets: <Link href='https://developer.mozilla.org/en-US/docs/Web/API/WebSockets_API'>Web Sockets</Link>,
}

export enum EEvent {
	Born = 'born',
	Start = 'start',
	HighSchool = 'high-school',
	IInventions = 'i-inventions',
	FitVut = 'fit-vut',
	InQool = 'inqool',
	FiMuni = 'fi-muni',
	RoiHunter = 'roihunter',
	Now = 'now',
}

export interface IEvent {
	id: EEvent,
	year: number,
	title: string,
	subtitle?: JSX.Element,
	description: JSX.Element,
}

export const EventsConfig: IEvent[] = [
	{
		id: EEvent.Born,
		year: 1990,
		title: 'It all started here...',
		description: (
			<span>
				The year, when the first public web page was created.<br/>
				Also the year, when the future web developer was born.<br/>
				Coincidence? I don't think so.
			</span>
		),
	},
	{
		id: EEvent.Start,
		year: 2003,
		title: 'My first computer',
		description: (
			<span>
				At this point, my passion for information technologies ignited.
				<br />
				I always liked solving puzzles and math was already my second language.
				<br />
				All I needed was one small step towards the programming.
			</span>
		),
	},
	{
		id: EEvent.HighSchool,
		year: 2009,
		title: 'High school finished',
		description: (
			<span>
				Luckily, the high school I visited gave the students an opportunity
				to choose their field of focus. For me, the choice was obvious.
				In my IT lectures, I learned basics of Pascal, Visual Basic and C.
			</span>
		),
	},
	{
		id: EEvent.IInventions,
		year: 2010,
		title: 'Software Developer',
		subtitle: (
			<span>i-Inventions</span>
		),
		description: (
			<span>
				Right after I started a college, I decided to gain some real work experience.
				I was hired as a C# developer and I worked on desktop applications
				specialized in computer vision. I learned a lot about software design and architecture principles.
				Martin Fowler has become my hero since then.
			</span>
		),
	},
	{
		id: EEvent.FitVut,
		year: 2013,
		title: 'Bachelor degree',
		subtitle: (
			<span>
				{Links.FIT} at {Links.VUT}
			</span>
		),
		description: (
			<span>
				My bachelor studies gave me a great understanding of how information technologies work.
				I tried over 10 different programming languages and acquired a broad overview in different fields of IT.
				For my bachelor thesis I developed an application for tree stability measurement.
			</span>
		),
	},
	{
		id: EEvent.InQool,
		year: 2014,
		title: 'Front-end Developer & Product Analyst',
		subtitle: (
			<span>
				{Links.inQool}
			</span>
		),
		description: (
			<span>
				This company really pushed me forward. They let me find out
				what are my strengths and what I should focus on.
				After several minor projects I was given an opportunity
				to work on {Links.ARTSTAQ} - an awesome project,
				which tries to establish a new trend in art trading.
				After the initial phase as the product analyst
				I became the lead web developer of this project.
				I mastered React and Redux and improved my software architecture skills.
			</span>
		),
	},
	{
		id: EEvent.FiMuni,
		year: 2016,
		title: 'Master degree',
		subtitle: (
			<span>
				{Links.FI} at {Links.MUNI}
			</span>
		),
		description: (
			<span>
				I wanted my master studies to be as close to real work-life as possible.
				That's why I chose the newest programme in the faculty - {Links.SSME}.
				I was given an overview of many fields related to IT services such as
				business, marketing, management, finance, social science and communication skills.
				The aim of this programme is to produce multi-disciplinary skilled individuals.
			</span>
		),
	},
	{
		id: EEvent.RoiHunter,
		year: 2016,
		title: 'Senior Front-end Developer',
		subtitle: (
			<span>
				{Links.ROIHunter}
			</span>
		),
		description: (
			<span>
				I started working at ROI Hunter in November 2016.
				I had no experience with Facebook marketing at that time.
				Right after I gained the required knowledge about domain,
				I could start helping with the improvement of platform's architecture.
				I learnt a lot about building fairly large web applications.
				Since the start of this year I am responsible for a standalone module,
				which serves as an editor of image templates for Facebook ads.
			</span>
		),
	},
	{
		id: EEvent.Now,
		year: 2018,
		title: 'Today',
		subtitle: (
			<span>What I'm interested in now?</span>
		),
		description: (
			<span>
				Right now I'm quite excited about {Links.AsyncRender} in React.
				As the mobile platform is on the rise, {Links.ReactNative} could be a good choice.
				I'm curious about {Links.MobX} as an alternative to Redux from small projects.
				I have been planning to take a look at {Links.ReduxSaga} and {Links.RxJS} for some time now.
				{Links.GraphQL} really got my attention together with {Links.Relay} and {Links.Apollo} as the client-side solutions.
				I've never had the need to use serve-side rendering, but {Links.NEXTjs} looks promising.
				I would like to dive more into {Links.ProgressiveWebApps} and {Links.WebSockets}.
				Basically, I want to explore new technologies that solves real issues and offer great developer experience.
			</span>
		),
	},
]
