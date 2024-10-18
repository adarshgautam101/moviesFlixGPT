import { IMG_CDN_URL } from "../utils/constants"


const MovieCard = ({posterpath}) => {
  return (
    <div className="w-48 pr-3 ">
        <img src={IMG_CDN_URL+posterpath} alt="moviecard" />
    </div>
  )
}

export default MovieCard