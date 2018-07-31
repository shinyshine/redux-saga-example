// react
import React from 'react'
import ReactDom from 'react-dom'

// redux
import { Provider } from 'react-redux'
import configureStore from './redux/store'
const store = configureStore()


// router
import { Router } from 'react-router-dom'
import createHistory from 'history/createBrowserHistory'
const browserHistory = createHistory()


// component
import Main from './views/pages/main'
const rootElement = document.getElementById('app')

function render(Component) {
	ReactDom.render(
		<Provider store={store}>
			<Router history={browserHistory}>
				<div>
					<Component/>
				</div>
			</Router>
		</Provider>,
		rootElement
	)
}

render(Main)


