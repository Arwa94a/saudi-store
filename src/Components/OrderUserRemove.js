import { useContext } from "react"
import { Button, Modal } from "react-bootstrap"
import SaudiContext from "../uitls/SaudiContext"

function OrderUserRemove(props) {
    const{setShow,show,orderId}=props
    const{deleteOrder}=useContext(SaudiContext)
  return (
    <>
      {" "}
      <Modal show={show} onHide={() => setShow(false)}>
        <Modal.Header closeButton>
          <Modal.Title>حذف الطلب</Modal.Title>
        </Modal.Header>
        <Modal.Body>هل انت متأكد من حذف الطلب </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShow(false)}>
            إلغاء
          </Button>
          <Button variant="danger" onClick={() => deleteOrder(orderId)}>
            تأكيد
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default OrderUserRemove
