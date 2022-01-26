import { Card, Col } from "react-bootstrap"
import { Link } from "react-router-dom"

function ProductItem(props) {
  const { product } = props
  return (
    <Col>
      <Card border="light" style={{ maxWidth: "200px" }}>
        <Link to={`/product/${product._id}`}>
          <Card.Img variant="top" src={product.poster} height="220px" style={{ borderRadius: "10px" }} />
        </Link>
        <Card.Body>
          <Link to={`/product/${product._id}`} className="text-black" style={{ textDecoration: "none" }}>
            <Card.Title>{product.title}</Card.Title>
          </Link>
          <Card.Text className="text-muted">{product.description}</Card.Text>
        </Card.Body>
      </Card>
    </Col>
  )
}

export default ProductItem