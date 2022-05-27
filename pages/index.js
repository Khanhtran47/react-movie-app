import Link from "next/link"
import Head from "next/head"

import HeroSlide from "../src/components/hero-slide/HeroSlide"
import MovieList from "../src/components/movie-list/MovieList"

import { fetchDataHomePage } from "../helpers/fetchHelper"
import { category, movieType, tvType } from "../src/api/tmdbApi"

const Home = (props) => {
  return (
    <>
      <Head>
        <title>React Movie App</title>
      </Head>
      <HeroSlide movieItems={props.popularMovies.slice(1, 6)} />
      <div className="container">
        <div className="section mb-3">
          <div className="section_header mb-2">
            <h2>Trending Movies</h2>
            <Link href="/movie">
              <span>
                <button className="btn btn-outline small">View more</button>
              </span>
            </Link>
          </div>
          <MovieList
            category={category.movie}
            type={movieType.popular}
            items={props.popularMovies}
          />
        </div>
        <div className="section mb-3">
          <div className="section_header mb-2">
            <h2>Top Rated Movies</h2>
            <Link href="/movie">
              <button className="btn btn-outline small">View more</button>
            </Link>
          </div>
          <MovieList
            category={category.movie}
            type={movieType.top_rated}
            items={props.topRatedMovies}
          />
        </div>
        <div className="section mb-3">
          <div className="section_header mb-2">
            <h2>Trending TV</h2>
            <Link href="/movie">
              <button className="btn btn-outline small">View more</button>
            </Link>
          </div>
          <MovieList category={category.tv} type={tvType.popular} items={props.popularTvShows} />
        </div>
        <div className="section mb-3">
          <div className="section_header mb-2">
            <h2>Top Rated TV</h2>
            <Link href="/movie">
              <button className="btn btn-outline small">View more</button>
            </Link>
          </div>
          <MovieList category={category.tv} type={tvType.top_rated} items={props.topRatedTvShows} />
        </div>
      </div>
    </>
  )
}

export const getStaticProps = async () => {
  // fetch data - this is executed in backend
  const data = await fetchDataHomePage(process.env.REACT_APP_MOVIE_API_KEY)

  return {
    props: {
      popularMovies: data.popularMovies,
      topRatedMovies: data.topRatedMovies,
      popularTvShows: data.popularTvShows,
      topRatedTvShows: data.topRatedTvShows,
    },
    revalidate: 3600,
  }
}

export default Home
