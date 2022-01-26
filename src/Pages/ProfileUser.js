import { useContext, useState } from "react"
import { Button } from "react-bootstrap"

import AllOrder from "../Components/AllOrder"
import ProductItem from "../Components/ProductItem"
import ProfileEdit from "../Components/ProfileEdit"
import ProfileRemove from "../Components/ProfileRemove"
import SaudiContext from "../uitls/SaudiContext"

function ProfileUser() {
  const { profileUser } = useContext(SaudiContext)
  const [editShow, setEditShow] = useState(false)
  const [deleteShow, setDelete] = useState(false)

  if (!profileUser) return <h1>Loading...</h1>
  return (
    <>
      <div className="wrapper">
        <div className="left">
          <img src={profileUser.photo} alt="user" width="100" />
          <h4>
            {profileUser.firstName} {profileUser.lastName}
          </h4>
        </div>
        <div className="right">
          <div className="info">
            <h3 style={{color:"#ADD8E6",fontSize:"20px",fontWeight:"bolder"}}>المعلومات</h3>
            <div className="info_data">
              <div className="data">
                <h4 style={{color:"#ADD8E6",fontSize:"20px",fontWeight:"bolder"}}>البريد الإلكتروني</h4>
                <p>{profileUser.email}</p>
              </div>
              <br />
              <div className="data">
                <h4 style={{ fontsize: "40px",color:"#ADD8E6",fontWeight:"bolder" }}>رقم الجوال</h4>
                <p>{profileUser.phone}</p>
              </div>
              <div style={{ display: "flex", justifyContent: "flex-end" }}>
                <Button
                  style={{ marginRight: 40, marginBottom: 10 }}
                  variant="outline-primary"
                  className="me-2"
                  onClick={() => setEditShow(true)}
                >
                  <i className="fas fa-user-edit"></i>
                </Button>
              </div>

              <div style={{ display: "flex", justifyContent: "flex-end" }}>
                <Button
                  style={{ marginRight: 40, marginBottom: 10, background: "red" }}
                  variant="outlined"
                  classNameName="me-2"
                  onClick={() => setDelete(true)}
                >
                  <i className="fas fa-user-times"></i>
                </Button>
              </div>
            </div>
          </div>

          <div className="projects">
            <h3 style={{ fontsize: "40px" ,color:"#800000" }}>المنتجات المفضلة</h3>
            <div className="projects_data">
              <div className="data">
                {profileUser.likes.map(product => (
                  <ProductItem product={product} key={product._id} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <AllOrder />
      <ProfileEdit show={editShow} setShow={setEditShow} />
      <ProfileRemove show={deleteShow} setShow={setDelete} profileId={profileUser._id} />
    </>
  )
}

export default ProfileUser
