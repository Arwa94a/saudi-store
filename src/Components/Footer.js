function Footer() {
  return (
    <>
      <section className="footer" >
        <div className="box-container">
          <div className="box">
          <a href='#' className='logo'><i className="fas fa-shopping-basket"></i>متاجر سعودية</a>
            <p>منصة سعودية تساعدك لإنشاء متجرك الخاص</p>
            <div className="share">
              <a href="#" className="btn fab fa-facebook-f"></a>
              <a href="#" className="btn fab fa-twitter"></a>
              <a href="#" className="btn fab fa-instagram"></a>
            </div>
          </div>
          <div className="box">
            <h3>مواقعنا</h3>
            <div className="links">
              <b >في جميع انحاء المملكة</b>
           
            </div>
          </div>

          <div className="box">
            <h3>روابط سريعة</h3>
            <div className="links">
              <a href="#">أهدافنا</a>
              <a href="#">سياسية الخصوصية</a>
              <a href="#">اتفاقية الاستخدام</a>
       
            </div>
          </div>

          <div className="box">
            <h3>تحميل التطبيق </h3>
            <div className="links">
              <a href="#" >google play</a>
              <a href="#">app store</a>
            </div>
          </div>
        </div>

        <h1 className="credit" dir="ltr">created by <span>arwa abdullah</span>| all rights reseved!</h1>
      </section>
    </>
  )
}

export default Footer
