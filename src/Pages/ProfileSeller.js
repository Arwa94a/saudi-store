import axios from "axios"
import {  useEffect, useState } from "react"

import { Link, useParams } from "react-router-dom"
import AddOrder from "../Components/AddOrder"
import RatingStars from "../Components/RatingStars"


function ProfileSeller() {
  const { sellerId } = useParams()
  const [show, setShow] = useState(false)

  const [profileSeller, setProfileSeller] = useState(null)

  const getSellerProf = async () => {
    const response = await axios.get(`http://localhost:7000/api/auth/seller/profile/seller/${sellerId}`)
    setProfileSeller(response.data)
  }
  useEffect(() => {
    getSellerProf()
  }, [])
  if (!profileSeller) return <h1>looding</h1>
  return (
    <>
      <h3>
        <h1>أسم المتجر</h1>
        {profileSeller.nameStore}
      </h3>
      <span> نبذة بسيطة عن المتجر</span>
      <h5>{profileSeller.aboutYourBusiness}</h5>
      <div className="wrapperSeller">
        <div className="left">
          <img src={profileSeller.photo} alt="user" width="100" />
          <h4>
            {profileSeller.firstName} {profileSeller.lastName}
          </h4>
        </div>
        <div className="right">
          <div className="info">
            <h3 style={{ color: "#ADD8E6", fontSize: "20px", fontWeight: "bolder" }}>المعلومات</h3>
            <span>الأسم</span>
            <h5>
              {profileSeller.firstName} {profileSeller.lastName}
            </h5>
            <span>السجل التجاري</span>
            <h5>{profileSeller.commercialRegister}</h5>
            <div className="info_data">
              <div className="data">
                <h4 style={{ color: "#ADD8E6", fontSize: "20px", fontWeight: "bolder" }}>البريد الإلكتروني</h4>
                <p>{profileSeller.email}</p>
              </div>
              <br />
              <div className="data">
                <h4 style={{ fontsize: "40px", color: "#ADD8E6", fontWeight: "bolder" }}>رقم الجوال</h4>
                <p>{profileSeller.phone}</p>
              </div>
            </div>
          </div>

          <div className="social_media">
            <ul>
              <li>
                <a href="#">
                  <i className="fab fa-facebook-f"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fab fa-twitter"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fab fa-instagram"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>



     
    {profileSeller.products.map(product=>(
<>
<section className="product" id="product">
<h1 className="heading">
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
              <RatingStars productId={product._id} key={product._id} />
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

    ))}
      
    </>
  )
}

export default ProfileSeller
