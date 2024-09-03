
import { IMG_CDN_URL } from "./constants";

const RestarantCard = ({ name, cloudinaryImageId, cuisines, avgRatingString }) => {
    return (
        <div className="card">
            <img src={IMG_CDN_URL + cloudinaryImageId} alt="image" />
            <h2>{name}</h2>
            <h3>{cuisines.join(",")}</h3>
            <h4>{avgRatingString} stars</h4>
        </div>
    )
}

export default RestarantCard;