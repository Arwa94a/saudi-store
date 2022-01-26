import { useContext } from "react"
import { Button, Col, Form, Modal, Row } from "react-bootstrap"
import SaudiContext from "../uitls/SaudiContext"

function ProfileEdit(props) {
  const { editProfile, profileUser } = useContext(SaudiContext)
  const { show, setShow } = props
  return (
    <>
      <Modal show={show} onHide={() => setShow(false)}>
        <Form className="mt-5" onSubmit={e => editProfile(e)}>
          <Modal.Header closeButton>
            <Modal.Title>تعديل الحساب</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form.Group as={Row} className="mb-3">
              <Form.Label column md="3">
                الأسم الأول
              </Form.Label>
              <Col md="8">
                <Form.Control type="text" name="firstName" defaultValue={profileUser.firstName} required />
              </Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-3">
              <Form.Label column md="3">
                الأسم الأخير
              </Form.Label>
              <Col md="8">
                <Form.Control type="text" name="lastName" defaultValue={profileUser.lastName} required />
              </Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-3">
              <Form.Label column md="3">
                اسم المستخدم
              </Form.Label>
              <Col md="8">
                <Form.Control type="text" name="username" defaultValue={profileUser.username} required />
              </Col>
            </Form.Group>

            <Form.Group as={Row} className="mb-3">
              <Form.Label column md="3">
                البريد الإلكتروني
              </Form.Label>
              <Col md="8">
                <Form.Control type="email" name="email" defaultValue={profileUser.email} required />
              </Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-3">
              <Form.Label column md="3">
                رقم الجوال
              </Form.Label>
              <Col md="8">
                <Form.Control type="number" name="phone" defaultValue={profileUser.phone} required />
              </Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-3">
              <Form.Label column md="3">
                صورة الحساب
              </Form.Label>
              <Col md="8">
                <Form.Control type="url" name="photo" defaultValue={profileUser.photo} required />
              </Col>
            </Form.Group>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={() => setShow(false)}>
              إغلاق
            </Button>
            <Button variant="success" type="submit" onClick={() => setShow(false)}>
              تأكيد
            </Button>
          </Modal.Footer>
        </Form>
      </Modal>
    </>
  )
}

export default ProfileEdit
