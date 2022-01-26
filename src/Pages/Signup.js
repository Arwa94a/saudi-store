import { useContext, useState } from "react"
import SignupSeller from "../Components/Signup/SignupSeller"
import SignupUser from "../Components/Signup/SignupUser"

function SignUp() {
  const [type,setType]=useState("user")
 
  return (
    <>
    <select onChange={e=> setType(e.target.value)} style={{fontSize:"20px"}}>
      <option value="user">مستخدم</option>
      <option value="userSeller">بائع</option>

    </select>
    {type==="user"?<SignupUser/>:<SignupSeller/>}
    </>
  )
}

export default SignUp
