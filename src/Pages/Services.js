import { Col, Image, Row } from "react-bootstrap"

import money from "../Components/image/money.png"
import "./service.css"
import { RiStore2Line } from "react-icons/ri"
import { RiMailCheckLine } from "react-icons/ri"
import { MdSettings } from "react-icons/md"
import { MdShoppingCart } from "react-icons/md"

function Services() {
  return (
    <>
      <Row>
        <Col md="9"  style={{marginTop:"30px",marginRight:"40px"}}>
          <h4 style={{fontSize:"30px"}}>
            نحن اول منصة <b style={{ color: "green" }}>سعودية</b> تساعد كل من لدية عمل تجاري بأن يصنع متجره الخاص بخطوات
            قليلة وبدون اي تكاليف{" "}
          </h4>
        </Col>
        <Col style={{marginTop:"30px"}}>
          <Image src={money} height={100} style={{ width: "auto" }} />
        </Col>
      </Row>
      {/* <Row>
        <Col md="6">
          <Image src={aboutus} />
        </Col>
        <Col md="6">
          <h1>أنشئ متجرك الإلكتروني من البيت</h1>
          <h3>بأقل الخطوات </h3>
        </Col>
      </Row> */}

      <Row className="create-store" style={{  marginTop: 100, height: 400 }}>
        <Col md="2" className="store">
          <RiStore2Line className="icon-store" />
          <h5 style={{ marginTop: 50,fontSize:"30px" }}>أنشئ متجرك </h5>
        </Col>

        <Col md="2" className="store">
          <RiMailCheckLine className="icon-store" />
          <h5 style={{ marginTop: 50 ,fontSize:"20px"}}> تحقق من البريد والسجل التجاري </h5>
        </Col>
        <Col md="2" className="store">
          <MdSettings className="icon-store" />
          <h5 style={{ marginTop: 50,fontSize:"20px" }}> أضبط متجرك وأضف المنتجات </h5>
        </Col>
        <Col md="2" className="store">
          <MdShoppingCart className="icon-store" />
          <h5 style={{ marginTop: 50 ,fontSize:"30px"}}> أبدا البيع </h5>
        </Col>
      </Row>
    </>
  )
}

export default Services
