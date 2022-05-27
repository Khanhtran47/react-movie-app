import PropTypes from "prop-types"
import { SwiperSlide, Swiper } from "swiper/react"

import MovieCard from "../movie-card/MovieCard"

const MovieList = (props) => {
  // const [items, setItems] = useState([])

  // useEffect(() => {
  //   const getList = async () => {
  //     let response = null
  //     const params = {}

  //     if (props.type !== "similar") {
  //       switch (props.category) {
  //         case category.movie:
  //           response = await tmdbApi.getMoviesList(props.type, { params })
  //           break
  //         default:
  //           response = await tmdbApi.getTvList(props.type, { params })
  //       }
  //     } else {
  //       response = await tmdbApi.similar(props.category, props.id)
  //     }
  //     setItems(response.results)
  //   }
  //   getList()
  // }, [props.type, props.category, props.id])

  return (
    <div className="movie-list">
      <Swiper grabCursor={true} spaceBetween={10} slidesPerView={"auto"}>
        {props.items.map((item, i) => (
          <SwiperSlide key={i}>
            <MovieCard item={item} category={props.category} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}

MovieList.propTypes = {
  category: PropTypes.string.isRequired,
}

export default MovieList
