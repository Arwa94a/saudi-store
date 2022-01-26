import { useContext } from "react";
import SaudiContext from "../uitls/SaudiContext";
import { Button, Col, Form, Modal, Row } from "react-bootstrap"

function OrderUserEdit(props) {
    const{setShow,show,orderId,order}=props
    const{editOrder}=useContext(SaudiContext)
    return ( <>
    
    <Modal show={show} onHide={() => setShow(false)}>
      <Form className="mt-5" onSubmit={e => editOrder(e, orderId)}>
        <Modal.Header closeButton>
          <Modal.Title>تعديل على الطلبية</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Group as={Row} className="mb-3">
            <Form.Label column md="3">
              الكمية
            </Form.Label>
            <Col md="8">
              <Form.Control type="number" name="quantity" defaultValue={order.quantity} required />
            </Col>
          </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShow(false)}>
            Close
          </Button>
          <Button variant="success" type="submit" onClick={() => setShow(false)}>
            Confirm Edit
          </Button>
        </Modal.Footer>
      </Form>
    </Modal>
    </> );
}

export default OrderUserEdit;