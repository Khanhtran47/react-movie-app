import Link from "next/link"

const Footer = () => {
  return (
    <div className="footer" style={{ backgroundImage: `url(${"/footer-bg.jpg"})` }}>
      <div className="footer__content container">
        <div className="footer__content__logo">
          <div className="logo">
            <img src="/tmovie.png" alt="" />
            <Link href="/">tMovies</Link>
          </div>
        </div>
        <div className="footer__content__menus">
          <div className="footer__content__menu">
            <Link href="/">Home</Link>
            <Link href="/">Contact us</Link>
            <Link href="/">Term of services</Link>
            <Link href="/">About us</Link>
          </div>
          <div className="footer__content__menu">
            <Link href="/">Live</Link>
            <Link href="/">FAQ</Link>
            <Link href="/">Premium</Link>
            <Link href="/">Privacy Policy</Link>
          </div>
          <div className="footer__content__menu">
            <Link href="/">Must Watch</Link>
            <Link href="/">Recent release</Link>
            <Link href="/">Top IMDB</Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
