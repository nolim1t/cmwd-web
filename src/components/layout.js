import React from "react"
import { Link } from "gatsby"
import Logo from "./logo"

const Layout = props => {
  const { title, children } = props
  const [toggleNav, setToggleNav] = React.useState(false)
  return (
    <div className={`site-wrapper ${toggleNav ? `site-head-open` : ``}`}>
      <header className="site-head">
        <div className="site-head-container">
          <a
            className="nav-burger"
            href={`#`}
            onClick={() => setToggleNav(!toggleNav)}
          >
            <div
              className="hamburger hamburger--collapse"
              aria-label="Menu"
              role="button"
              aria-controls="navigation"
            >
              <div className="hamburger-box">
                <div className="hamburger-inner" />
              </div>
            </div>
          </a>
          <nav id="swup" className="site-head-left">
            <ul className="nav" role="menu">
              {/* <li className="nav-home nav-current" role="menuitem">
                <Link to={`/`}>Home</Link>
              </li> */}
              {/* <li className="nav-about" role="menuitem">
                <Link to={`/about`}>About</Link>
              </li>
              <li className="nav-elements" role="menuitem">
                <Link to={`/elements`}>Elements</Link>
              </li> */}
              {/* <li className="nav-tags" role="menuitem">
                <Link to={`/tags`}>Tags</Link>
              </li> */}
            </ul>
          </nav>
          <div className="site-head-center">
            <Logo title={title} />
          </div>
          <div className="site-head-right">
            <div className="right-links">
              <a
                href="https://t.me/joinchat/I4kEEhwAe_iI3mC8igyBxQ"
                title="Reflow Labs"
                target="_blank"
                rel="noopener noreferrer"
              >
                Telegram
              </a>
              <a
                href="https://www.incubator.yellow.com/coworking"
                title="Twitter"
                target="_blank"
                rel="noopener noreferrer"
              >
                Yellow
              </a>
              <a
                href="https://github.com/ReflowLabs/cmwd-web"
                title="GitHub"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
              <Link
                to={`/rss.xml`}
                title="RSS"
                target="_blank"
                rel="noopener noreferrer"
              >
                RSS
              </Link>
            </div>
          </div>
        </div>
      </header>
      <main id="site-main" className="site-main">
        <div id="swup" className="transition-fade">
          {children}
        </div>
      </main>
      <footer className="site-foot">
        <Link to={`/`}>{title}</Link>
        {/* <br />
        {`Made with <3 by `}
        <a href="https://reflow.dev" target="_blank" rel="noopener noreferrer">
          Reflow Labs
        </a> */}
      </footer>
    </div>
  )
}

export default Layout
