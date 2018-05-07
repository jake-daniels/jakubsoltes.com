
import React from 'react'
import * as ReactDOM from 'react-dom'
import {BrowserRouter} from 'react-router-dom'

import ScrollToTop from 'app/components/ScrollToTop'
import PageController from 'app/PageController'


import './globals'
import 'styles/App.css'

class App extends React.Component {
	render () {
		return (
			<BrowserRouter>
				<ScrollToTop>
					<PageController />
				</ScrollToTop>
			</BrowserRouter>
		)
	}
}

ReactDOM.render(
	<App/>,
	document.getElementById('root') as HTMLElement,
)
