
import React from 'react'
import {withRouter} from 'react-router-dom'

@(withRouter as any)
export default class ScrollToTop extends React.Component<any> {

	componentDidUpdate (prevProps: any) {
		const {pathname: previousPathname} = prevProps.location
		const {pathname: currentPathname} = this.props.location

		if (currentPathname !== previousPathname) {
			window.scrollTo(0, 0)
		}
	}

	render () {
		return this.props.children
	}
}
