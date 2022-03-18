import './style.css'

export function Nav() {
	return (
		<ul className="nav">
			<li className="nav__item">inf.</li>
			<li className="nav__item nav__item-menu"><a href="/" className="nav__item-link">Home</a></li>
			<li className="nav__item nav__item-menu"><a href="/threads" className="nav__item-link">Threads</a></li>
			<li className="nav__item nav__item-menu"><a href="/blog" className="nav__item-link">Blog</a></li>
		</ul>
	)
}
