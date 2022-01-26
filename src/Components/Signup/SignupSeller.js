import { useContext } from "react"
import { Col, Row } from "react-bootstrap"
import SaudiContext from "../../uitls/SaudiContext"
import "./Signup.css"
function SignupSeller() {
  const { signupSeller } = useContext(SaudiContext)
  return (
    <>
      <div className="sign">
        <form className="signForm" onSubmit={signupSeller}>
          <label> الاسم الأول</label>
          <input type="text" className="signInput" name="firstName" required placeholder="الأسم الأول  " />
          <br />
          <label>الاسم الأخير </label>
          <input type="text" className="signInput" name="lastName" required placeholder="الأسم الأخير" />
          <br />
          <label>أسم المستخدم</label>
          <input type="text" className="signInput" name="username" required placeholder=" أسم المسخدم" />
          <br />
          <label>رقم الجوال</label>
          <input type="number" className="signInput" name="phone" required placeholder=" رقم الجوال" />
          <br />
          <label>البريد الألكتروني</label>
          <input type="email" className="signInput" name="email" required placeholder=" البريد الألكتروني" />
          <br />

          <label>الرقم السري</label>
          <input type="password" className="signInput" name="password" required placeholder=" الرقم الرقم السري" />
          <br />
          <label>السجل التجاري</label>
          <input type="number" className="signInput" name="commercialRegister" required placeholder=" السجل التجاري" />
          <br />
          <label>أسم المتجر</label>
          <input type="txet" className="signInput" name="nameStore" required placeholder=" اسم المتجر " />
          <br />
          <label>تعريف بسيط بمتجرك </label>
          <input as="textarea" className="signInput" name="aboutYourBusiness" required placeholder="  عرف بمتجرك " />
          <br />
          <label>الصورة </label>
          <input type="url" className="signInput" name="photo" />
          <br />
          <label>نوع تجارتك </label>
          <input type="text" className="signInput" name="type" />
<br />
          <button className="signButton" type="submit">
            إنشاء الحساب
          </button>
        </form>
      </div>
    </>
  )
}

export default SignupSeller
