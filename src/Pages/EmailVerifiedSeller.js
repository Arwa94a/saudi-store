import axios from "axios"
import { useEffect, useState } from "react"
import { useParams, useNavigate } from "react-router-dom"
import { toast } from "react-toastify"

function EmailVerifiedSeller() {
  const { token } = useParams()
  const [error, setError] = useState(false)
  // const navigate = useNavigate()
  const verifyEmailToken = async () => {
    try {
      await axios.get(`http://localhost:7000/api/auth/seller/verify_email_seller/${token}`)
      toast.success("email verified")
    } catch (error) {
      if (error.response) toast.error(error.response.data)
      else console.log(error)
      setError(true)
    }
  }
  useEffect(() => {
    verifyEmailToken()
  }, [])

  return error ? <h1>verification faild</h1> : <h1>Verifying...</h1>
}

export default EmailVerifiedSeller
