import apiConfig from "../../api/apiConfig"

const CastList = (props) => {
  // const [casts, setCasts] = useState([])

  // useEffect(() => {
  //   const getCredits = async () => {
  //     const res = await tmdbApi.credits(props.category, props.id)
  //     setCasts(res.cast.slice(0, 5))
  //   }
  //   getCredits()
  // }, [category, props.id])
  return (
    <div className="casts">
      {props.casts.map((item, i) => (
        <div key={i} className="casts__item">
          <div
            className="casts__item__img"
            style={{
              backgroundImage: `url(${apiConfig.w500Image(item.profile_path)})`,
            }}
          ></div>
          <p className="casts__item__name">{item.name}</p>
        </div>
      ))}
    </div>
  )
}

export default CastList
