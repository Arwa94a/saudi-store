import { Card, Col, Button } from "react-bootstrap"
import OrderUserEdit from "./OrderUserEdit"
import OrderUserRemove from "./OrderUserRemove"
import { useContext, useState } from "react"
import Feedback from "./Feedback"
function OrderItem(props) {
  const { order } = props
  const [editShow, setEditShow] = useState(false)
  const [deleteShow, setDeleteShow] = useState(false)
  return (
    <>
      <Col style={{marginTop:80}}>
        <Card >
          <Card.Img variant="top" src={order.productId.image} style={{width:300}}/>
          <Card.Body  style={{fontSize:"20px"}}>
            <Card.Title  style={{fontSize:"20px",color:"#D2691E"}}>{order.productId.title}</Card.Title>
            <Card.Text>{order.productId.description}</Card.Text>
            <Card.Text>
              <h5  style={{color:"#D2691E"}}>السعر:</h5>
              <span>{order.productId.price}</span>
               <h5 style={{color:"#D2691E"}}>الكمية:</h5>
               <span>{order.quantity}</span>
            </Card.Text>
            <Card.Text><h3 style={{color:"#D2691E"}}>حالة الطلبية</h3>{order.status}</Card.Text>
            <Card.Text><h3 style={{color:"#D2691E"}}>الموقع </h3>{order.location}</Card.Text>
            <Card.Text><h3 style={{color:"#D2691E"}}>أسم المتجر </h3>{order.sellerId.nameStore}</Card.Text>
            {order.status === "Delivered" ? (
              <h1 style={{ color: "green", fontSize: "40px" }}>طلبيتك تم ايصالها</h1>
            ) : order.status === "Cancelled" ? (
              <h1 style={{ color: "red", fontSize: "40px" }}>طلبيتك تم الغاءها</h1>
            ) : (
              <>
                <Button
                  variant="success"
                  style={{ marginRight: 40, marginBottom: 10 }}
                  className="me-2"
                  onClick={() => setEditShow(true)}
                >
                  <i className="fas fa-pen" titleAccess="edit">
                    {" "}
                  </i>
                </Button>
                <Button
                  style={{ marginRight: 40, marginBottom: 10 }}
                  variant="danger"
                  className="me-2"
                  onClick={() => setDeleteShow(true)}
                >
                  <i className="fas fa-trash-alt" titleAccess="Delete"></i>
                </Button>
              </>
            )}
            <Feedback orderId={order._id}/>
          </Card.Body>
        </Card>
      </Col>
      <OrderUserEdit orderId={order._id} setShow={setEditShow} show={editShow} order={order} />
      <OrderUserRemove orderId={order._id} setShow={setDeleteShow} show={deleteShow} />
    </>
  )
}

export default OrderItem
