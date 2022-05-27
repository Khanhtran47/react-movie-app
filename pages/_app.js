import { Fragment } from "react"

import Header from "../src/components/header/Header"
import Footer from "../src/components/footer/Footer"

import "swiper/css"
import "../src/assets/boxicons-2.0.7/css/boxicons.min.css"

import "../styles/App.scss"
import "../styles/button.scss"
import "../styles/detail.scss"
import "../styles/footer.scss"
import "../styles/header.scss"
import "../styles/hero-slide.scss"
import "../styles/input.scss"
import "../styles/modal.scss"
import "../styles/movie-card.scss"
import "../styles/movie-grid.scss"
import "../styles/movie-list.scss"
import "../styles/page-header.scss"

function MyApp({ Component, pageProps }) {
  return (
    <Fragment>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </Fragment>
  )
}

export default MyApp
