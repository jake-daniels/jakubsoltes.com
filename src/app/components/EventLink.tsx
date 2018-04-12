
import React from 'react'

interface IProps {
	href: string,
	children?: any,
}

const EventLink: React.SFC<IProps> = ({href, children}: IProps) => {
	return (
		<span>
			&nbsp;
			<a target='_blank' href={href}>
				{children}
			</a>
			&nbsp;
		</span>
	)
}

export default EventLink
