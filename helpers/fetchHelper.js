const BASE_URL = "https://api.themoviedb.org/3/"

export const fetchDataHomePage = async (api_key) => {
  // popular movie
  const pop_mv_url = `${BASE_URL}movie/popular?api_key=${api_key}&page=1`
  const pop_mv_res = await fetch(pop_mv_url)
  const pop_mv_data = await pop_mv_res.json()

  // top rated movie
  const top_mv_url = `${BASE_URL}movie/top_rated?api_key=${api_key}`
  const top_mv_res = await fetch(top_mv_url)
  const top_mv_data = await top_mv_res.json()

  // popular tv
  const pop_tv_url = `${BASE_URL}tv/popular?api_key=${api_key}`
  const pop_tv_res = await fetch(pop_tv_url)
  const pop_tv_data = await pop_tv_res.json()

  // top rated tv
  const top_tv_url = `${BASE_URL}tv/top_rated?api_key=${api_key}`
  const top_tv_res = await fetch(top_tv_url)
  const top_tv_data = await top_tv_res.json()

  return {
    popularMovies: pop_mv_data.results,
    topRatedMovies: top_mv_data.results,
    popularTvShows: pop_tv_data.results,
    topRatedTvShows: top_tv_data.results,
  }
}

export const fetchDataItem = async (api_key, category, id) => {
  // basic item data
  const item_url = `${BASE_URL}${category}/${id}?api_key=${api_key}`
  const item_res = await fetch(item_url)
  const item_data = await item_res.json()

  // casts
  const cre_url = `${BASE_URL}${category}/${id}/credits?api_key=${api_key}`
  const cre_res = await fetch(cre_url)
  const cre_data = await cre_res.json()

  // videos
  const videos_url = `${BASE_URL}${category}/${id}/videos?api_key=${api_key}`
  const videos_res = await fetch(videos_url)
  const videos_data = await videos_res.json()

  // similar
  const sim_url = `${BASE_URL}${category}/${id}/similar?api_key=${api_key}`
  const sim_res = await fetch(sim_url)
  const sim_data = await sim_res.json()

  return {
    item_data: item_data,
    casts: cre_data.cast.slice(0, 5),
    videos: videos_data.results.slice(0, 5),
    similar: sim_data.results,
  }
}
