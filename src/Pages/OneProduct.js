import { useContext, useState } from "react"
import { Button, Card, Col, Image, Row } from "react-bootstrap"
import { useParams } from "react-router-dom"
import AddComment from "../Components/AddComment"
import SaudiContext from "../uitls/SaudiContext"
function OneProduct() {
  const { productId } = useParams()
  const { products } = useContext(SaudiContext)

  if (products.length === 0) return <h1>Loading...</h1>
  const product = products.find(product => product._id === productId)

  return (
    <>
      <Row>
        <Card.Text style={{ fontSize: 50 }}>المتجر {product.userSeller.nameStore} </Card.Text>
        <Col>
          <Image variant="top" src={product.image} style={{ width: 300 }} />
        </Col>
        <Col>
          <h1 style={{ fontSize: 50, color: "green" }}>{product.title}</h1>
          <p style={{ fontSize: 50 }}>{product.description}</p>
          <p>
            <h5 style={{ fontSize: 50 }}>السعر:{product.price}</h5>
            <h5 style={{ fontSize: 50 }}>المتوفر:{product.quantity}</h5>
          </p>
          <p>
            <h5 style={{ fontSize: 50 }}>
              التقييم: {product.ratingAverage <= 0 ? <td>لم يتم التقييم بعد </td> : <td>{product.ratingAverage}/5</td>}
            </h5>
          </p>
        </Col>

        <Row className="mt-5">
          <h3 style={{ color: "green" }}>التعليقات</h3>

          {product.comments.map(comment => (
            <Card style={{ margin: 20, maxWidth: 1100 }}>
              <Row>
                <Row style={{ display: "flex", alignItems: "center" }}>
                  <Col md="1">
                    <Image src={comment.owner.photo} width="80px" roundedCircle />
                  </Col>
                  <Col>
                    {comment.owner.firstName} {comment.owner.lastName}
                  </Col>
                </Row>
                <Row>
                  <Col md={{ offset: 1 }}>{comment.comment}</Col>
                </Row>
              </Row>
            </Card>
          ))}
        </Row>
        {localStorage.tokenSaudiUser ? (
          <>
            <Row>
              <AddComment productId={product._id} />
            </Row>
          </>
        ) : null}
      </Row>
    </>
  )
}

export default OneProduct
