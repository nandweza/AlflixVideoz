import React from 'react'
import "./navbar.scss"
import { ArrowDropDown, Search } from "@material-ui/icons"
import { Notifications } from "@material-ui/icons"
import { useState } from 'react'

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  window.onscroll = () => {
    setIsScrolled(window.pageYOffset === 0 ? false : true);
    return () => (window.onscroll = null);
  };
  return (
    <div className={isScrolled ? 'navbar scrolled' : 'navbar'}>
      <div className="container">
        <div className="left">
          <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMsAAABzCAMAAAABvAYZAAAAaVBMVEUAAADjCRTnCRQ2AgXVCBLuCRXJCBKlBg64BxCPBgy+BxFaAwhyBArABxAaAQJVBAdMAwdlBAkhAQMQAAB+BQsuAgTQCBLcCBRQAwdBAgYKAAGfBg55BQtqBAklAQOyBxCFBQspAQOXBg2QcTwlAAAEDUlEQVR4nO2Z25prMBSAkxBF6UFb0apS7/+QW1biEMyMjoyL/a3/YiYixF8rR4QgCIIgCIIgCIIgCIIgCIIgCIIgCIIgyAdcHMllePCG9M0xkUWcCQ9CDqOsW1MwGd61pTtLLndIGyecw2qXLHVdVxTq4OTJgxzSoWtyb/LEKM8NE0IKM1eUjV8l8+jRrApqKuHhVUmdf5InXO++2uVIWYOn7yqaNN9B2mMmsio2xmtcIm7m+Y1LIPP43qwKavIh6cskv6r8HC4rV6s0LoD6UU5uk2StCx2iXKiJdjHzwEWWnLrIs5B8yvMshvRNQOGTLRcWbOuSuHArKFBxuNN6ldYlTuZdzBhT0aSfWZJ2Ll05vsSF5PIiDi0TtHhhzYXy+7xL3CF7HU8mQrhAQOaudWFeV7Be4uLARbRJRRBu6c2iSz7nAr/7BCjkd4fgMnruH11IDCUicglZH+N2XJg77+LMXAKFwm44UC7nD12uoBCSkwrll0UXyqJtXW4uVHsqeV+lNZfdti6khBdTC6g8s+viOtu6OKr7gz8WxsmhC/SKW7qQtButIL5tushReOry/juXqnVhqR2V3oXSZDq+uNUVMEayORcWl76kPC52OYk2IirrLk0f/9W4z+OfXLpxP1rsolq/bKlzL//3Lm1n/8V8jP3s0pYslrtk6kKWW1JRLgxGYZpt66JmYlRYmCEPXWrZqfDgvt7lgxgjOwgHGzPkgQsPclmPcH7vIjSfvBd1czHX769xKeBfNOnHrhFg9LizfXJBLsBjuctTt5fKsgvELgtT02V+Km5pfHnEuh8LR3scK11qFbvq3huN++e2QhvLY8Ml41u7lMys0J7LIWXburwG3Z9lF5Jv7FIP5slPyy77bWMMun8q1BDj22n9nUs3B7fXj43a9Mwa2dPbVOv3LE2XgM+4nI/n4lnVuzLuq1vqQhmnwk3DclffJy6p3kmC0OZ2pmS9izN1aYKgeaAGvT/2oQvt5tnF2OXY7intISGIDXoX0o5dX+9bfu6iUGeHLnG7k3RQe0pWVpYDFx1kW7hksA6DGTIUtbPiH7johd6syzDGhAy5gYucV9KRi7H3P3XJe4E37bQsuugg611UrENzEW7vcq2ez2j/aA/fxyzLjuZmXVYFQZ3vmnWz57pCtxfWfbM4qK19dUsf0pVllyuXL0B/f4mFSOMyD65Fdr+9X8nju7t8xeNySJLXW33zyss4pfAu1GvTC5fMWusfujw4p64Xqk884y90loCf5FrvfK/9GJdANLP9d1ctA76Lcb01fTw5t2T9d8MlXJJb+2MFMpq5hdafyTiK7Iy7v+SQRVVe+uuXl5fXrxqCfZK/iWkEQRAEQRAEQRAEQRAEQRAEQRAEQRDkv+UfY+M/1uDAbDwAAAAASUVORK5CYII=" alt="" />
          <span>Home</span>
          <span>Series</span>
          <span>Movies</span>
          <span>New and Popular</span>
          <span>My List</span>
        </div>
        <div className="right">
          <Search className="icon"/>
          <span>KID</span>
          <Notifications className="icon"/>
          <img src="https://avatars.githubusercontent.com/u/63627595?v=4" alt="" />
          <div className="profile">
            <ArrowDropDown className="icon"/>
            <div className="options">
              <span>Settings</span>
              <span>Logout</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
