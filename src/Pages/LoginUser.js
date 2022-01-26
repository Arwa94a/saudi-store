import { useContext } from "react"
import SaudiContext from "../uitls/SaudiContext"

 
function LoginUser() {
    const{loginUser}=useContext(SaudiContext)
  return (
    <>
      <div className="login">
          <span className="loginTitle">تسجيل الدخول</span>
        <form className="loginForm" onSubmit={loginUser}>
            <label >أسم المستخدم</label>
            <input type="text" className="loginInput" name="username" placeholder="أدخل أسم المسخدم" />
            <label >البريد الألكتروني</label>
            <input type="text" className="loginInput" name="email" placeholder="أدخل البريد الألكتروني" />
            <label >الرقم السري</label>
            <input type="password" className="loginInput" name="password" placeholder="أدخل الرقم الرقم السري" />
            
         <button className="loginButton" type="submit">تسجيل الدخول</button>   
        </form>
    

      </div>
    </>
  )
}

export default LoginUser
