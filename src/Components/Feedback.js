import { useContext } from "react"
import { Button, Col, Form, Row } from "react-bootstrap"
import SaudiContext from "../uitls/SaudiContext"

function Feedback(props) {
  const { addFeedback } = useContext(SaudiContext)
  const { orderId } = props
  return (
    <>
      <div className="ms-4">
        <h1 style={{marginTop:"40px" ,color:"#CD5C5C"}}>رأيك بالمنتج </h1>
        <Form className="mt-5" onSubmit={e => addFeedback(e, orderId)}>
          <Form.Group as={Row} className="mb-3">
            <Form.Label column md="2" style={{fontSize:"20px" ,background:"#ADD8E6",color:"white"}}>
              التغذية الراجعة
            </Form.Label>
            <Col md="6">
              <Form.Control as="textarea" name="feedback" required />
            </Col>
          </Form.Group>

          <Form.Group as={Row} className="my-4">
            <Col md={{ span: 10, offset: 2 }}>
              <Button type="submit">ارسل</Button>
            </Col>
          </Form.Group>
        </Form>
      </div>
    </>
  )
}

export default Feedback
