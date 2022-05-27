import Link from "next/link"

import Button from "../button/Button"

import { category } from "../../api/tmdbApi"
import apiConfig from "../../api/apiConfig"

const MovieCard = (props) => {
  const item = props.item

  const link = "/" + category[props.category] + "/" + item.id

  const bg = apiConfig.w500Image(item.poster_path || item.backdrop_path)

  return (
    <Link href={link}>
      <span>
        <div className="movie-card" style={{ backgroundImage: `url(${bg})` }}>
          <Button>
            <i className="bx bx-play"></i>
          </Button>
        </div>
        <h3>{item.title || item.name}</h3>
      </span>
    </Link>
  )
}

export default MovieCard
