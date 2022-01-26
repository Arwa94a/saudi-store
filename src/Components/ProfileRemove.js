import { useContext } from "react"
import { Button, Modal } from "react-bootstrap"
import SaudiContext from "../uitls/SaudiContext"

function ProfileRemove(props) {
  const { deleteProfile } = useContext(SaudiContext)
  const { show, setShow ,profileId} = props
  return (
    <>
      <Modal show={show} onHide={() => setShow(false)}>
        <Modal.Header closeButton>
          <Modal.Title>حذف الحساب</Modal.Title>
        </Modal.Header>
        <Modal.Body>هل أنت متأكد من حذف حسابك؟</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShow(false)}>
          إلغاء
          </Button>
          <Button variant="danger" onClick={() => deleteProfile(profileId)}>
           تأكيد
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default ProfileRemove
