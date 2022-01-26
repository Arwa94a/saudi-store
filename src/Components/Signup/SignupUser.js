import { useContext, useState } from "react"
import SaudiContext from "../../uitls/SaudiContext"
import "./Signup.css"
function SignupUser() {
  const { signup } = useContext(SaudiContext)
  return (
    <>
      <div className="sign">
        <form className="signForm" onSubmit={signup}>
          <label> الاسم الأول</label>

          <input type="text" className="signInput" name="firstName" required placeholder="الأسم الأول  " />
          <label>الاسم الأخير </label>

          <input type="text" className="signInput" name="lastName" required placeholder="الأسم الأخير" />
          <label>أسم المستخدم</label>

          <input type="text" className="signInput" name="username" required placeholder=" أسم المسخدم" />
          <label>رقم الجوال</label>

          <input type="number" className="signInput" name="phone" required placeholder=" رقم الجوال" />
          <label>البريد الألكتروني</label>

          <input type="email" className="signInput" name="email" required placeholder=" البريد الألكتروني" />
          <label>الرقم السري</label>

          <input type="password" className="signInput" name="password" required placeholder=" الرقم الرقم السري" />
          <label>الصورة </label>

          <input type="url" className="signInput" name="photo" />
          <br />
          <button className="signButton" type="submit">
            تسجيل الدخول
          </button>
        </form>
      </div>
    </>
  )
}

export default SignupUser
