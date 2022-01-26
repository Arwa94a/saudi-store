import { useContext, useState } from "react"
import SaudiContext from "../uitls/SaudiContext"
import { Button, Card, Col, Form, Row } from "react-bootstrap"
import { createSearchParams, Link } from "react-router-dom"

function Cart() {
  const { carts, products, sendOrder } = useContext(SaudiContext)

  let total = null
  if (carts.length > 0) {
    total = 0
    carts.forEach(cart => {
      const product = products.find(product => product._id === cart.productId)
      total += product.price * cart.quantity
    })
  }
  return (
    <>
      {carts.map(cart => {
        const product = products.find(product => product._id === cart.productId)
        return (
          <Card border="light" style={{ maxWidth: "200px" }}>
            <Link to={`/product/${product._id}`}>
              <Card.Img variant="top" src={product.image} height="220px" style={{ borderRadius: "10px" }} />
            </Link>
            <Card.Body>
              <Link to={`/product/${product._id}`} className="text-black" style={{ textDecoration: "none" }}>
                <Card.Title style={{ fontSize: "20px", color: "#A52A2A" }}>{product.title}</Card.Title>
              </Link>
              <Card.Text className="text-muted" style={{ fontSize: "15px"}}>
                {product.description}
              </Card.Text>
              <Card.Text className="text-muted" style={{ fontSize: "15px"}}>
                {" "}
                <span style={{ fontSize: "20px", color: "#A52A2A" }}>الكمية:</span> {cart.quantity}
              </Card.Text>

              <Card.Text className="text-muted" style={{ fontSize: "15px"}} ><span style={{ fontSize: "20px", color: "#A52A2A" }}>السعر:</span>{product.price}</Card.Text>
            </Card.Body>
          </Card>
        )
      })}
      {carts.length == 0 ? (
        <div
          style={{
            fontSize: "40px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            marginTop: "50px",
          }}
        >
          <i className="fas fa-box-open" style={{ color: "yellowgreen", fontSize: "40" }}></i>
          <h1>عربة التسوق فارغة!</h1>
          <p>تأكد من أن سلة تسوقك مليئة بالأشياء التي تحبها</p>
        </div>
      ) : (
        <>
          <p style={{ fontSize: "50px" }}>
            <h1 style={{ color: "yellowgreen", fontSize: "40px" }}>المجموع</h1> {total} SR
          </p>
          {localStorage.tokenSaudiUser ?
     
           (  <>
              <Form onSubmit={sendOrder}>
            <Form.Group as={Row} className="mb-3">
              <Col>
                <Form.Label column md="3" style={{ color: "#D2691E", fontSize: "30px" }}>
                  الموقع
                </Form.Label>

                <Form.Control type="text" name="location" required style={{ width: "300px" }} />
              </Col>
            </Form.Group>
            <Button type="submit"> تأكيد الطلب</Button>
          </Form>
          </>  
          
          ):(<h1 style={{color:"#48D1CC"}}>عليك تسجيل الدخول لإتمام عملية الشراء

<i className="fas fa-sign-in-alt"></i>
          </h1>)
    
        
        }


     
        </>
      )}
    </>
  )
}


export default Cart
