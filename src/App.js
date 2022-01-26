import { Route, Routes, useNavigate } from "react-router-dom"

import SaudiContext from "./uitls/SaudiContext"
import axios from "axios"
import { toast, ToastContainer } from "react-toastify"

import EmailVerified from "./Pages/EmailVerified"
import EmailVerifiedSeller from "./Pages/EmailVerifiedSeller"
import { useEffect, useState } from "react"
import Banner from "./Components/Banner"
import Category from "./Components/Category"
import Contact from "./Components/Contact"
import Footer from "./Components/Footer"
import NavbarItem from "./Components/navbar/NavbarItem"
import Home from "./Pages/Home"
import Login from "./Components/Login"
import OneProduct from "./Pages/OneProduct"
import LoginUser from "./Pages/LoginUser"
import ProfileUser from "./Pages/ProfileUser"
import SignUp from "./Pages/Signup"
import Cart from "./Pages/Cart"
import Clothes from "./Pages/Clothes"
import Foods from "./Pages/Foods"
import ProductSaudi from "./Pages/ProductSaudi"
import ProfileSeller from "./Pages/ProfileSeller"
import Services from "./Pages/Services"
function App() {
  const [profileSeller, setProfileSeller] = useState(null)
  const [profileUser, setProfileUser] = useState(null)
  const [orderUser, setOrderUser] = useState([])
  const [products, setProduct] = useState([])
  const [carts, setCarts] = useState([])

  const navigate = useNavigate()
  //--------------------------product---------------//
  const getProduct = async () => {
    try {
      const response = await axios.get("http://localhost:7000/api/product")
      setProduct(response.data)
    } catch (error) {
      if (error.response) toast.error(error.response.data)
      else console.log(error)
    }
  }
  //---------------------profile seller-----------------//
  const getSellerProf = async () => {
    const response = await axios.get("http://localhost:7000/api/auth/seller/profile", {
      headers: {
        Authorization: localStorage.tokenSaudi,
      },
    })
    setProfileSeller(response.data)
  }

  //---------------------like seller---------------------//
  const likeSeller = async sellerId => {
    try {
      const response = await axios.get(`http://localhost:7000/api/auth/seller/${sellerId}/likes`, {
        headers: {
          Authorization: localStorage.tokenSaudiUser,
        },
      })
      getSellerProf()
      toast.success(response.data)
    } catch (error) {
      if (error.response) toast.error(error.response.data)
      else console.log(error)
    }
  }
  //------------profile user--------------//

  const getProfileUser = async () => {
    const response = await axios.get("http://localhost:7000/api/auth/profile", {
      headers: {
        Authorization: localStorage.tokenSaudiUser,
      },
    })
    setProfileUser(response.data)
  }

  const editProfile = async e => {
    e.preventDefault()
    try {
      const form = e.target
      const profileBody = {
        firstName: form.elements.firstName.value,
        lastName: form.elements.lastName.value,
        username: form.elements.username.value,
        email: form.elements.email.value,
        phone: form.elements.phone.value,
        photo: form.elements.photo.value,
      }
      await axios.put(`http://localhost:7000/api/auth/profile`, profileBody, {
        headers: {
          Authorization: localStorage.tokenSaudiUser,
        },
      })
      getProfileUser()
      toast.success("edit success")
    } catch (error) {
      if (error.response) toast.error(error.response.data)
      else console.log(error)
    }
  }

  const deleteProfile = async profileId => {
    try {
      await axios.delete(`http://localhost:7000/api/auth/profile/${profileId}`, {
        headers: {
          Authorization: localStorage.tokenSaudiUser,
        },
      })
      toast.success("profile is deleted")
      getProfileUser()
      navigate("/login")
    } catch (error) {
      if (error.response) toast.error(error.response.data)
      else console.log(error)
    }
  }
  ///--------------------orders-------------//
  //myorder--->>user
  const getMyOder = async () => {
    try {
      const response = await axios.get("http://localhost:7000/api/auth/myorder", {
        headers: {
          Authorization: localStorage.tokenSaudiUser,
        },
      })
      setOrderUser(response.data)
    } catch (error) {
      if (error.response) toast.error(error.response.data)
      else console.log(error)
    }
  }

  const addOrder = async (e, productId) => {
    e.preventDefault()
    try {
      const form = e.target
      const orderBody = {
        quantity: form.elements.quantity.value,
        location: form.elements.location.value,
      }
      await axios.post(`http://localhost:7000/api/auth/${productId}/order`, orderBody, {
        headers: {
          Authorization: localStorage.tokenSaudiUser,
        },
      })
      getMyOder()
    } catch (error) {
      if (error.response) toast.error(error.response.data)
      else console.log(error)
    }
  }

  const editOrder = async (e, orderUserId) => {
    e.preventDefault()
    try {
      const form = e.target
      const orderBody = {
        quantity: form.elements.quantity.value,
      }
      await axios.put(`http://localhost:7000/api/auth/${orderUserId}`, orderBody, {
        headers: {
          Authorization: localStorage.tokenSaudiUser,
        },
      })
      getMyOder()
      toast.success("edit success")
    } catch (error) {
      if (error.response) toast.error(error.response.data)
      else console.log(error)
    }
  }

  const deleteOrder = async orderId => {
    try {
      await axios.delete(`http://localhost:7000/api/auth/delete/${orderId}`, {
        headers: {
          Authorization: localStorage.tokenSaudiUser,
        },
      })
      toast.success("order is deleted")
      getMyOder()
    } catch (error) {
      if (error.response) toast.error(error.response.data)
      else console.log(error)
    }
  }
  //---------------------feedback-------------------//

  const addFeedback = async (e ,orderId) => {
    e.preventDefault()
    try {
      const form = e.target
      const feedbackBody = {
        feedback: form.elements.feedback.value,
      }
      await axios.post(`http://localhost:7000/api/auth/${orderId}/add-feedback`, feedbackBody, {
        headers: {
          Authorization: localStorage.tokenSaudiUser,
        },
      })
      toast.success("your feedback sended")
      form.reset()
    } catch (error) {
      if (error.response) toast.error(error.response.data)
      else console.log(error)
    }
  }
  //-----------------------like products------------------//
  const likeProduct = async productId => {
    try {
      await axios.get(`http://localhost:7000/api/product/${productId}/likes`, {
        headers: {
          Authorization: localStorage.tokenSaudiUser,
        },
      })
    } catch (error) {
      if (error.response) toast.error(error.response.data)
      else console.log(error)
    }
  }
  //----------------------signup------------------//
  const signup = async e => {
    e.preventDefault()
    try {
      const form = e.target
      const userBody = {
        firstName: form.elements.firstName.value,
        lastName: form.elements.lastName.value,
        email: form.elements.email.value,
        username: form.username.value,
        password: form.elements.password.value,
        phone: form.elements.phone.value,
        photo: form.elements.photo.value,
      }
      await axios.post("http://localhost:7000/api/auth/signup", userBody)
      form.reset()
      console.log("signup success")
      navigate("/loginUser")
    } catch (error) {
      if (error.response) toast.error(error.response.data)
      else console.log(error)
    }
  }

  const signupSeller = async e => {
    e.preventDefault()
    try {
      const form = e.target
      const userBody = {
        firstName: form.elements.firstName.value,
        lastName: form.elements.lastName.value,
        email: form.elements.email.value,
        username: form.elements.username.value,
        password: form.elements.password.value,
        phone: form.elements.phone.value,
        aboutYourBusiness: form.elements.aboutYourBusiness.value,
        commercialRegister: form.elements.commercialRegister.value,
        nameStore: form.elements.nameStore.value,
        photo: form.elements.photo.value,
        type: form.elements.type.value,
      }
      await axios.post("http://localhost:7000/api/auth/seller/signup", userBody)
      form.reset()
      toast.success("Success Signup")
    } catch (error) {
      if (error.response) toast.error(error.response.data)
      else console.log(error)
    }
  }
  //--------------------------login-----------------//
  const login = async e => {
    e.preventDefault()
    try {
      const form = e.target
      const sellerBody = {
        email: form.elements.email.value,
        username: form.elements.username.value,
        password: form.elements.password.value,
      }
      form.reset()
      const response = await axios.post("http://localhost:7000/api/auth/seller/login", sellerBody)
      localStorage.tokenSaudi = response.data
    
      toast.success("login success")
  
      navigate("/")
    } catch (error) {
      if (error.response) toast.error(error.response.data)
      else console.log(error)
    }
  }

  const loginUser = async e => {
    e.preventDefault()
    try {
      const form = e.target
      const userBody = {
        email: form.elements.email.value,
        username: form.elements.username.value,
        password: form.elements.password.value,
      }
      const response = await axios.post("http://localhost:7000/api/auth/login", userBody)
      localStorage.tokenSaudiUser = response.data
      form.reset()
      toast.success("login success")
      navigate("/")
    } catch (error) {
      if (error.response) toast.error(error.response.data)
      else console.log(error)
    }
  }
  //-----------------password--------------------//
  const forgotPassword = async e => {
    e.preventDefault()
    try {
      const form = e.target
      const userBody = {
        email: form.elements.email.value,
      }
      await axios.post("http://localhost:7000/api/auth/forgot-password", userBody)
      toast.success("password resent link is sent, go check your email ")
    } catch (error) {
      if (error.response) toast.error(error.response.data)
      else console.log(error)
    }
  }
  const resetPassword = async (e, token) => {
    e.preventDefault()
    try {
      const form = e.target
      const password = form.elements.password.value
      const passwordConfirmation = form.elements.passwordConfirmation.value
      if (password !== passwordConfirmation) return toast.error("password is not matching")

      const userBody = {
        password,
      }
      await axios.post(`http://localhost:7000/api/auth/reset-password/${token}`, userBody)
      toast.success("password rest")
      
      navigate("/login")
    } catch (error) {
      if (error.response) toast.error(error.response.data)
      else console.log(error)
    }
  }
  //-------------logout---------------//
  const logout = async () => {
    localStorage.removeItem("tokenSaudiUser")
    localStorage.removeItem("tokenSaudi")
    navigate("/login")
  }
  //--------------------------rating-----------------//
  const addRating = async (productId, rating) => {
    try {
      const ratingBody = {
        rating,
      }
      await axios.post(`http://localhost:7000/api/product/${productId}/rating`, ratingBody, {
        headers: {
          Authorization: localStorage.tokenSaudiUser,
        },
      })
      getProduct()
      toast.success("Your rate is added")
    } catch (error) {
      if (error.response) toast.error(error.response.data)
      else console.log(error)
    }
  }
  //--------------------comments--------------------------//
  const addComment = async (e, productId) => {
    e.preventDefault()
    try {
      const form = e.target
      const commentBody = {
        comment: form.elements.comment.value,
      }

      form.reset()
      await axios.post(`http://localhost:7000/api/product/${productId}/comments`, commentBody, {
        headers: {
          Authorization: localStorage.tokenSaudiUser,
        },
      })
      getProduct()
      toast.success("Comment added")
    } catch (error) {
      if (error.response) toast.error(error.response.data)
      else console.log(error)
    }
  }
  //---------------------------cart-------------------//
  const addToCart = async (e, productId) => {
    e.preventDefault()

    const form = e.target
    const orderCartBody = {
      quantity: form.elements.quantity.value,
      productId: productId,
    }

    setCarts([...carts, orderCartBody])
    toast.success("add order to cart")
  }
  //----------------sendOrder-----//
  const sendOrder = async e => {
    e.preventDefault()
    try {
      const form = e.target
      const cartBody = {
        location: form.elements.location.value,
        orders: carts,
      }
      await axios.post("http://localhost:7000/api/auth/cart", cartBody, {
        headers: {
          Authorization: localStorage.tokenSaudiUser,
        },
      })
      toast.success("add order ")
      form.reset()
      setCarts([])
      getMyOder()
    } catch (error) {
      if (error.response) toast.error(error.response.data)
      else console.log(error)
    }
  }
  //-----------------search--------------//
  const productSearch = e => {
    e.preventDefault()
    const form = e.target
    const searchText = form.elements.productSearch.value
    const productFound = products.find(product => product.title === searchText)
    if (productFound) return navigate(`/product/${productFound._id}`)
    form.reset()
    toast.error("not found")
  }
  //----------------useEffect-------------//
  useEffect(() => {
    getProduct()
    if (localStorage.tokenSaudiUser) getMyOder()
    if (localStorage.tokenSaudiUser) getProfileUser()
    if(localStorage.tokenSaudi) getSellerProf()
  }, [])
  const store = {
    login,
    logout,
    loginUser,
    signup,
    signupSeller,
    forgotPassword,
    resetPassword,
    profileSeller,
    likeSeller,
    profileUser,
    editProfile,
    deleteProfile,
    orderUser,
    addOrder,
    addFeedback,
    deleteOrder,
    likeProduct,
    products,
    addRating,
    addComment,
    carts,
    addToCart,
    sendOrder,
    editOrder,
    productSearch,
  }
  return (
    <SaudiContext.Provider value={store}>
      <ToastContainer />
      <NavbarItem />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/service" element={<Services />} />
        <Route path="/clothes" element={<Clothes />} />
        <Route path="/Foods" element={<Foods />} />
        <Route path="/product-saudi" element={<ProductSaudi />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/loginUser" element={<LoginUser />} />
        <Route path="/profile" element={<ProfileUser />} />
        <Route path="/seller/:sellerId" element={<ProfileSeller />} />
        <Route path="/create-account" element={<SignUp />} />
        <Route path="/email_verified/:token" element={<EmailVerified />} />
        <Route path="/email_verified_seller/:token" element={<EmailVerifiedSeller />} />
        <Route path="/Sections" element={<Banner />} />
        <Route path="/product-store" element={<Category />} />
        <Route path="/product/:productId" element={<OneProduct />} />
      </Routes>
      <Contact />
      <Footer />
    </SaudiContext.Provider>
  )
}

export default App
