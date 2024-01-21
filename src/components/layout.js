import * as React from "react"
import { Link } from "gatsby"

const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  const isRootPath = location.pathname === rootPath
  let header

  if (isRootPath) {
    header = (
      <h1 className="main-heading">
        <Link to="/">{title}</Link>
      </h1>
    )
  } else {
    header = (
      <Link className="header-link-home" to="/">
        {title}
      </Link>
    )
  }

  return (
    <div className="global-wrapper" data-is-root-path={isRootPath}>
      <header className="global-header">{header}</header>
      <nav>
        <ul>
          <li>
            <a href="/">HOME</a>
          </li>
          <li>
            <a href="/about">ABOUT</a>
          </li>
          <li>
            <a href="/gallery">GALLERY</a>
          </li>
          <li>
            <a href="/animation">ANIMATION</a>
            <ul class="sub-nav">
              <li class="nav-item">
                <a href="/animation">SHOWREELS</a>
              </li>
              <li class="nav-item">
                <a href="/tcd">TECHNOCOLOR DREAMS</a>
              </li>
              <li class="nav-item">
                <a href="/qb">QUAY BISCUIT</a>
              </li>
            </ul>
          </li>
          <li class="nav-item">
            <a href="/blog">BLOG</a>
          </li>            
          <li>
            <a href="/contact">CONTACT</a>
          </li>
        </ul>
      </nav>
      <main>{children}</main>
      <footer>
        © {new Date().getFullYear()}, Built with
        {` `}
        <a href="https://www.gatsbyjs.com">Gatsby</a>
      </footer>
    </div>
  )
}

export default Layout
