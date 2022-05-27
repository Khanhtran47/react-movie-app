const BASE_URL = "https://api.themoviedb.org/3/"
const API_KEY = process.env.REACT_APP_MOVIE_API_KEY

/**
 * Custom api for page /movie and /tv
 * Send request to TMDB on server side instead of client side
 * req.query
 * ?category: 'movie' | 'tv'
 * ?query: string
 * ?page: number | undefined
 */
const handler = async (req, res) => {
  const { category, query, page } = req.query
  if (req.method === "GET" && category && query) {
    let url = `${BASE_URL}search/${category}?api_key=${API_KEY}&query=${query}`
    if (page) {
      url = url + `&page=${page}`
    }

    const response = await fetch(url)
    const data = await response.json()

    return res.status(200).json({
      data: data.results,
      total_pages: data.total_pages,
    })
  }
  return res.status(500).json({
    message: "Invalid request",
  })
}

export default handler
