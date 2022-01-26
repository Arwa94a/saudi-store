import { useContext } from "react"
import SaudiContext from "../uitls/SaudiContext"
import { Button, Col, Form, Modal, Row } from "react-bootstrap"
function AddOrder(props) {
  const { show, setShow ,productId} = props
  const { addToCart  } = useContext(SaudiContext)
  return (
    <>
      <Modal show={show} onHide={() => setShow(false)}>
        <Form onSubmit={e=>addToCart(e,productId)}>
          <Modal.Header closeButton>
            <Modal.Title>إضافة طلب </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form.Group as={Row} className="mb-3">
              <Form.Label column md="3">
                الكمية
              </Form.Label>
              <Col md="8">
                <Form.Control type="number" name="quantity" required />
              </Col>
            </Form.Group>

            {/* <Form.Group as={Row} className="mb-3">
              <Form.Label column md="3">
                الموقع
              </Form.Label>
              <Col md="8">
                <Form.Control type="text" name="location" required />
              </Col>
            </Form.Group> */}
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={() => setShow(false)}>
              إغلاق
            </Button>
            <Button variant="primary" type="submit" onClick={() => setShow(false)}>
              أضف إلى السلة
            </Button>
          </Modal.Footer>
        </Form>
      </Modal>
    </>
  )
}

export default AddOrder
