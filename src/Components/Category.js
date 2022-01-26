import "./navbar/NavbarItem.css"
import food from "./image/Foodlogo.png"
import clothes from "./image/clothes.jpg"
import { Link } from "react-router-dom"
function Category() {
  return (
    <>
      <h1 className="heading">
        
        تسوق على حسب <span>الأصناف</span>
      </h1>
      <section className="category" id="category">
        <div className="box-container">
          <div className="box">
            <h3 style={{color:"#8B4513", fontWeight: "bolder"}}>المنسوجات</h3>

            <img src={clothes} alt="" />
            <Link to="/clothes" className="btn">
              تسوق
            </Link>
          </div>
        </div>

        <div className="box-container">
          <div className="box">
            <h3 style={{color:"#DEB887", fontWeight: "bolder"}}>قسم المأكولات </h3>

            <img src={food} alt="" />
            <Link to="/foods" className="btn">
              تسوق
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}

export default Category
