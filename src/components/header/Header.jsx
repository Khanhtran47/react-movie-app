import { useRef, useEffect } from "react"

import Link from "next/link"
import { useRouter } from "next/router"

const headerNav = [
  {
    display: "Home",
    path: "/",
  },
  {
    display: "Movies",
    path: "/movie",
  },
  {
    display: "TV Series",
    path: "/tv",
  },
]

const Header = () => {
  const { pathname } = useRouter()
  const headerRef = useRef(null)

  const active = headerNav.findIndex((e) => e.path === pathname)

  useEffect(() => {
    const shrinkHeader = () => {
      if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        headerRef.current.classList.add("shrink")
      } else {
        headerRef.current.classList.remove("shrink")
      }
    }
    window.addEventListener("scroll", shrinkHeader)
    return () => {
      window.removeEventListener("scroll", shrinkHeader)
    }
  }, [])

  return (
    <div ref={headerRef} className="header">
      <div className="header__wrap container">
        <div className="logo">
          <img src="/tmovie.png" alt="" />
          <Link href="/">tMovies</Link>
        </div>
        <ul className="header__nav">
          {headerNav.map((e, i) => (
            <li key={i} className={`${i === active ? "active" : ""}`}>
              <Link href={e.path}>{e.display}</Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default Header
