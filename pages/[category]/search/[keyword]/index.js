import Head from "next/head"
import { useRouter } from "next/router"

import PageHeader from "../../../../src/components/page-header/PageHeader"
import MovieGrid from "../../../../src/components/movie-grid/MovieGrid"

import { category as cate } from "../../../../src/api/tmdbApi"

const Catalog = () => {
  const router = useRouter()
  const { category } = router.query

  return (
    <>
      <Head>
        <title>React Movie App</title>
      </Head>
      <PageHeader>{category === cate.movie ? "Movies" : "TV Series"}</PageHeader>
      <div className="container">
        <div className="section mb-3">
          <MovieGrid category={category} />
        </div>
      </div>
    </>
  )
}

export default Catalog
