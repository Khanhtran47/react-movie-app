import Head from "next/head"
import { useRouter } from "next/router"

import CastList from "../../src/components/detail/CastList"
import VideoList from "../../src/components/detail/VideoList"
import MovieList from "../../src/components/movie-list/MovieList"

import { fetchDataItem } from "../../helpers/fetchHelper"
import apiConfig from "../../src/api/apiConfig"

const Detail = (props) => {
  const router = useRouter()
  const { category } = router.query

  return (
    <>
      <Head>
        <title>React Movie App</title>
      </Head>
      {props.item && (
        <>
          <div
            className="banner"
            style={{
              backgroundImage: `url(${apiConfig.originalImage(
                props.item.backdrop_path || props.item.poster_path
              )})`,
            }}
          ></div>
          <div className="mb-3 movie-content container">
            <div className="movie-content__poster">
              <div
                className="movie-content__poster__img"
                style={{
                  backgroundImage: `url(${apiConfig.originalImage(
                    props.item.poster_path || props.item.backdrop_path
                  )})`,
                }}
              ></div>
            </div>
            <div className="movie-content__info">
              <h1 className="title">{props.item.title || props.item.name}</h1>
              <div className="genres">
                {props.item.genres &&
                  props.item.genres.slice(0, 5).map((genre, i) => (
                    <span key={i} className="genres__item">
                      {genre.name}
                    </span>
                  ))}
              </div>
              <p className="overview">{props.item.overview}</p>
              <div className="cast">
                <div className="section__header">
                  <h2>Casts</h2>
                </div>
                <CastList casts={props.casts} category={props.item.category} id={props.item.id} />
              </div>
            </div>
          </div>
          <div className="container">
            <div className="section mb-3">
              <VideoList videos={props.videos} category={props.item.category} id={props.item.id} />
            </div>
            <div className="section mb-3">
              <div className="section__header mb-2">
                <h2>Similar</h2>
              </div>
              <MovieList items={props.similar} category={category} id={props.item.id} />
            </div>
          </div>
        </>
      )}
    </>
  )
}

export const getStaticPaths = async () => {
  return {
    fallback: "blocking",
    paths: [],
  }
}

export const getStaticProps = async (context) => {
  const { category, id } = context.params

  const data = await fetchDataItem(process.env.REACT_APP_MOVIE_API_KEY, category, id)

  return {
    props: {
      item: data.item_data,
      casts: data.casts,
      videos: data.videos,
      similar: data.similar,
    },
    revalidate: 3600,
  }
}

export default Detail
