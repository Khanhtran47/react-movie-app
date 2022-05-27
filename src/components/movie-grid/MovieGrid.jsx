import { useState, useEffect, useCallback } from "react"
import { useRouter } from "next/router"

import MovieCard from "../movie-card/MovieCard"
import Input from "../input/Input"

import { category, movieType } from "../../api/tmdbApi"

const MovieGrid = (props) => {
  const router = useRouter()
  const [items, setItems] = useState([])

  const [page, setPage] = useState(1)
  const [totalPage, setTotalPage] = useState(0)

  const { keyword } = router.query

  useEffect(() => {
    const getList = async () => {
      let response = null
      if (keyword === undefined) {
        switch (props.category) {
          case category.movie:
            response = await fetch(
              `/api/items?category=${category.movie}&type=${movieType.upcoming}`
            )
            break
          default:
            response = await fetch(`/api/items?category=${category.tv}&type=${movieType.popular}`)
        }
      } else {
        response = await fetch(`/api/search?category=${props.category}&query=${keyword}`)
      }
      const data = await response.json()
      setItems(data.data)
      setTotalPage(data.total_pages)
    }
    getList()
  }, [props.category, keyword])

  const loadMore = async () => {
    let response = null
    if (keyword === undefined) {
      switch (props.category) {
        case category.movie:
          response = await fetch(
            `/api/items?category=${category.movie}&type=${movieType.upcoming}&page=${page + 1}`
          )
          break
        default:
          response = await fetch(
            `/api/items?category=${category.tv}&type=${movieType.popular}&page=${page}`
          )
      }
    } else {
      response = await fetch(
        `/api/search?category=${props.category}&query=${keyword}&page=${page + 1}`
      )
    }
    const data = await response.json()
    setItems([...items, ...data.data])
    setPage(page + 1)
  }

  return (
    <>
      <div className="section mb-3">
        <MovieSearch category={props.category} keyword={keyword} />
      </div>
      <div className="movie-grid">
        {items.map((item, i) => (
          <MovieCard category={props.category} item={item} key={i} />
        ))}
      </div>
      {page < totalPage ? (
        <div className="movie-grid__loadmore">
          <button className="btn btn-outline small" onClick={loadMore}>
            Load more
          </button>
        </div>
      ) : null}
    </>
  )
}

const MovieSearch = (props) => {
  const router = useRouter()

  const [keyword, setKeyword] = useState(props.keyword ? props.keyword : "")

  const goToSearch = useCallback(() => {
    if (keyword.trim().length > 0) {
      router.push(`/${category[props.category]}/search/${keyword}`)
    }
  }, [keyword, props.category, router])

  useEffect(() => {
    const enterEvent = (e) => {
      e.preventDefault()
      if (e.keyCode === 13) {
        goToSearch()
      }
    }
    document.addEventListener("keyup", enterEvent)
    return () => {
      document.removeEventListener("keyup", enterEvent)
    }
  }, [keyword, goToSearch])

  return (
    <div className="movie-search">
      <Input
        type="text"
        placeholder="Enter keyword"
        value={keyword}
        onChange={(e) => setKeyword(e.target.value)}
      />
      <button className="btn small" onClick={goToSearch}>
        Search
      </button>
    </div>
  )
}

export default MovieGrid
