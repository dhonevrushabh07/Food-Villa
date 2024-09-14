const FoodItem = (props) => {
    console.log("props", props)
    // console.log(price)
    // console.log(finalPrice)
    // console.log(description)
    const finalPrice = props?.props?.finalPrice / 100
    const price = props?.props?.price / 100
    const percentOff = Math.round(finalPrice / price * 100)
    return (
        <div className="item-container">
            <div className="food-item">
                {/* <img src={IMG_CDN_URL + cloudinaryImageId} alt="image" style={{ width: "100%", height: "200px" }} /> */}
                <h2 className="font-bold text-xl">{props.props.name}</h2>
                {
                    isNaN(finalPrice) ? "" : <h4 className="font-bold">finalPrice :{finalPrice}</h4>
                }
                {
                    isNaN(price) ? "" : <h3 className="text-wrap"> price :{price}</h3>
                }
                {
                    isNaN(percentOff) ? "" : <h4>{percentOff}% off</h4>
                }

                {/* <h5 className="font-bold">{props.props.description}</h5> */}

            </div>
        </div>
    )
}
export default FoodItem