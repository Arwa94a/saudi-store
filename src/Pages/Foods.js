import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import AddOrder from "../Components/AddOrder";
import RatingStars from "../Components/RatingStars";
import SaudiContext from "../uitls/SaudiContext";


function Foods() {
    const { products } =useContext(SaudiContext)
    const [show, setShow] = useState(false)
  const foods = products.filter(product => product.type == "Food")
    

    return ( <> {foods.map(product => (

        <section className="product" id="product">
            <h1 className="heading">
              المتجر {product.userSeller.nameStore} <br />
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
            <AddOrder show={show} setShow={setShow} productId={product._id} key={product._id} />
          </section>
         ))}
          
    </> );
}

export default Foods;