import "./navbar/NavbarItem.css"
import ksa from "./image/ksa.png"
import aboutus from "./image/aboutus.jpg"
import { Link } from "react-router-dom"

function Banner() {
  return (
    <>
      <section className="banner-container">
        <div className="banner">
          <img src={ksa} alt=""  width={50} height={50}/>
          <div className="content">
            <h3>صناعات وطنية </h3>
         
            <Link to="/product-saudi" className="btn">
           أقرأ
            </Link>
          </div>
        </div>
        <div className="banner">
          <img src={aboutus} alt="" />
          <div className="content">
            <h3>أقسام المتاجر</h3>
         
            <Link to="/product-store" className="btn">
            تسوق
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}

export default Banner
