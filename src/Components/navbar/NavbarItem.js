import "./NavbarItem.css"
import { Link } from "react-router-dom"
import { useContext } from "react"
import SaudiContext from "../../uitls/SaudiContext"
import { Button, Col, Form, Row } from "react-bootstrap"
function NavbarItem() {
  const { logout, products, productSearch, carts } = useContext(SaudiContext)
  return (
    <>
      <div className="header-1">
        <a href="#" className="logo">
          <i className="fas fa-shopping-basket"></i>متاجر سعودية
        </a>

        <Form className="m-5 search-box-container" onSubmit={productSearch}>
          <Row>
            <Col md="8">
              <Form.Group>
                <input
                  name="productSearch"
                  className="search-input"
                  list="productSearch"
                  type="search"
                  placeholder="ابحث عن المنتجات .."
                />
              </Form.Group>
              <datalist id="productSearch">
                {products.map(product => (
                  <option value={product.title} />
                ))}
              </datalist>
            </Col>

            <Col md="4">
              <Button type="submit">
                <i className="fas fa-search"></i>
              </Button>
            </Col>
          </Row>
        </Form>
      </div>
      <div className="header-2">
        <div id="menu-bar" className="fas fa-bars"></div>
        <nav className="navbar">
          <Link to="/" href="#home" className="topListItem nav-link">
            الصفحة الرئيسية
          </Link>
          <Link to="/Sections" className="topListItem nav-link">
            الأقسام
          </Link>
          <Link to="/service" className="topListItem nav-link">
            خدماتنا
          </Link>

          <a href="#contact">تواصل معنا</a>
        </nav>
        <div className="icons">
          <Link to="/cart" className="fas fa-shopping-cart">
            {carts.length == 0 ? null : <span>{carts.length}</span>}
          </Link>

          <div className="topCenter">
            <div className="topList">
              {localStorage.tokenSaudiUser || localStorage.tokenSaudi ? (
                <>
                  <li>
                    <Link to="/logout" className="topListItem nav-link" onClick={logout}>
                      تسجيل الخروج
                    </Link>
                  </li>
                  <li>
                    <Link to="/profile" className="topListItem nav-link">
                      الحساب
                    </Link>
                  </li>
                </>
              ) : (
                <>
                  <li>
                    <Link to="/login" className="topListItem nav-link">
                      تسجيل دخول البائع
                    </Link>
                  </li>
                  <li>
                    <Link to="/loginUser" className="topListItem nav-link">
                      تسجيل دخول المستخدم
                    </Link>
                  </li>
                  <li>
                    <Link to="/create-account" className="topListItem nav-link">
                      إنشاء حساب
                    </Link>
                  </li>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default NavbarItem
