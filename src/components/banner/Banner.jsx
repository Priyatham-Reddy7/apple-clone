import "./banner.scss"
import iphone from "../../assets/images/iphone.png"
import { products } from "../../products"

const Banner = () => {
    return (
        <>
            {products.map((prod) => (
                <div
                    className={
                        prod.isBgBlack ? "banner bg-black" : "banner bg-white"
                    }
                    key={prod.id}
                >
                    <div className="content">
                        <h1>{prod.title}</h1>
                        <p>{prod.subText}</p>
                        <span>{prod.availableFrom}</span>
                        <div className="links">
                            <a href="#">Learn more</a>
                            <a href="#">Pre-order</a>
                        </div>
                        <div className="img-container">
                            <img src={prod.img} className="banner-img" />
                        </div>
                    </div>
                </div>
            ))}
        </>
    )
}

export default Banner
