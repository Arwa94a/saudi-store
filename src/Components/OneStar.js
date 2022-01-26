import { useContext } from "react"
import { AiFillStar, AiOutlineStar } from "react-icons/ai"
import { toast } from "react-toastify"
import SaudiContext from "../uitls/SaudiContext"


function OneStar(props) {
  const { fill, setFill, starNumber, productId, setShow } = props
  const { addRating } = useContext(SaudiContext)
  return fill >= starNumber ? (
    <AiFillStar
      size="25"
      onMouseOver={() => setFill(starNumber)}
      onClick={() => {
        if (localStorage.tokenSaudiUser) addRating(productId, starNumber)
        else toast.error("please login first")
        setShow(false)
      }}
    />
  ) : (
    <AiOutlineStar size="25" onMouseOver={() => setFill(starNumber)} />
  )
}

export default OneStar