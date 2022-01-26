import { useState } from "react"
import { Link } from "react-router-dom"
import AddOrder from "./AddOrder"
import "./navbar/NavbarItem.css"
import RatingStars from "./RatingStars"
function Products(props) {
  const [show, setShow] = useState(false)
  const { product } = props

  return (
    <>
    
      <section className="product" id="product">
    
        <h1 className="heading">
        <Link to={`/seller/${product.userSeller._id}`}>
          المتجر {product.userSeller.nameStore} </Link> <br />
          <span>{product.title}</span>
        </h1>
       
        <div className="box-container">
          <div className="box">
            {product.quantity == 0 ? (
              <span className="discount" style={{ color: "red" }}>
                الكمية نفذت{" "}
              </span>
            ) : (
              <span className="discount">{product.quantity}الكمية المتوفرة </span>
            )}

            <div className="icons">
              <a href="#" className="fa fa-heart"></a>
              <a href="#" className="fa fa-share"></a>
              <Link to={`/product/${product._id}`} className="fa fa-eye"></Link>
            </div>
            <img src={product.image} alt="" />
            <h3>{product.description}</h3>
            <div className="stars">
              <RatingStars productId={product._id} />
            </div>
            <div className="price" dir="ltr">
              {product.price} SR{" "}
            </div>
            {product.quantity == 0 ? (
              <a className="btn">أضف الى السلة</a>
            ) : (
              <a onClick={() => setShow(true)} className="btn">
                أضف الى السلة
              </a>
            )}
          </div>
        </div>
      </section>
      <AddOrder show={show} setShow={setShow} productId={product._id} />
    </>
  )
}

export default Products
