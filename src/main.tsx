import { render } from 'preact'
import Router from 'preact-router'
import { Home } from './pages/Home'
import './index.css'
import {Blog} from './pages/Blog'
import {Threads} from './pages/Threads'
import {Nav} from './components/Nav'

const Main = () => (
	<>
		<Nav/>
		<div className="container">
			<Router>
				<Home path="/"/>
				<Blog path="/blog"/>
				<Threads path="/threads"/>
			</Router>
		</div>
	</>
)
render(<Main />, document.getElementById('app')!)
