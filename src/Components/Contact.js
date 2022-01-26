import "./navbar/NavbarItem.css"
function Contact() {
  return (
    <>
      <section className="contact" id="contact">
        <h1 className="heading">
          <span> تواصل </span>معنا
        </h1>
        <form action="">
          <div className="inputBox">
            <input type="text" placeholder="الأسم" />
            <input type="email" placeholder="الأيميل" />
          </div>
          <div className="inputBox">
            <input type="number" placeholder="رقم الجوال " />
            <input type="text" placeholder="الموضوع" />
          </div>
       
          <textarea placeholder="المحتوى" />
          <input type="submit" className="btn" />
        </form>
      </section>
    </>
  )
}

export default Contact
