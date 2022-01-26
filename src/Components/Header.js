import '../Components/navbar/NavbarItem.css'
import logostore from "./image/logostore.png"
function Header() {
    return ( <>
    <section className="home" id="home">
        <div className="image">
            <img src={logostore} alt="" />
        </div>
        <div className="content">
            <span style={{color:"#8B0000" ,fontWeight:"bolder"}}>متاجر صنعت بأيدي سعودية</span>
            <h4 style={{ textAlign: "justify",fontSize:"40px"}}>نحن أول منصة سعودية تضم جميع المتاجر السعودية</h4>
       
        </div>
    </section>
    </> );
}

export default Header;