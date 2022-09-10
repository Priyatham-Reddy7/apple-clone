import "./navbar.scss"
import { AiFillApple } from "react-icons/ai"
import { AiOutlineSearch } from "react-icons/ai"
import { BsBag } from "react-icons/bs"
import { IoIosArrowForward } from "react-icons/io"

const Navbar = () => {
    return (
        <>
            <div className="navbar">
                <div className="nav-links">
                    <span className="nav nav-icons">
                        <AiFillApple />
                    </span>
                    <a href="#" className="nav">
                        Store
                    </a>
                    <a href="#" className="nav">
                        Mac
                    </a>
                    <a href="#" className="nav">
                        iPad
                    </a>
                    <a href="#" className="nav">
                        iPhone
                    </a>
                    <a href="#" className="nav">
                        Watch
                    </a>
                    <a href="#" className="nav">
                        Airpods
                    </a>
                    <a href="#" className="nav">
                        TV & Home
                    </a>
                    <a href="#" className="nav">
                        Only on Apple
                    </a>
                    <a href="#" className="nav">
                        Accessories
                    </a>
                    <a href="#" className="nav">
                        Support
                    </a>
                    <span className="nav-icons nav">
                        <AiOutlineSearch />
                    </span>
                    <span className="nav-icons nav">
                        <BsBag />
                    </span>
                </div>
            </div>
            <div className="offer">
                <span className="offer-text">
                    Get 5% instant Cashback up to ₹6000 with qualifying HDFC
                    Bank credit cards on orders over ₹54900.‡{" "}
                </span>
                <a href="#" className="offer-hypertext">
                    Learn More
                    {/* <span>
                        <IoIosArrowForward />
                    </span> */}
                </a>
            </div>
        </>
    )
}

export default Navbar
