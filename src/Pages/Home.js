import { useContext } from "react"
import { Container, Row } from "react-bootstrap"
import Header from "../Components/Header"
import Products from "../Components/Products"
import SaudiContext from "../uitls/SaudiContext"

function Home() {
  const { products } = useContext(SaudiContext)

  let clothes = products.filter(product => product.type == "Clothes")
  let foods = products.filter(product => product.type == "Food")

  foods=foods.sort((a, b) => a.price - b.price)
 foods= foods.slice(0, 5)
 clothes=clothes.sort((a, b) => a.price - b.price)
 clothes= clothes.slice(0, 5)
  
  return (
    <>
      <Container >
        <Header />
        <Row>
          <h1
            style={{
           
              color: "rgb(155, 39, 39)",

              fontSize: "40px",
              fontWeight: "100px",
              marginTop: "50px",
              boxShadow: "0px 10px 10px rgba(116, 48, 39, 0.7)",
              textAlign: "center",
          
            }}
          >
            {" "}
            الملابس
          </h1>
          {clothes.map(product => (
            <Products key={product._id} product={product} />
          ))}
          <h1
            style={{
             
              color: "rgb(155, 39, 39)",

              fontSize: "40px",
              fontWeight: "100px",
              marginTop: "50px",
              boxShadow: "0px 10px 10px rgba(116, 48, 39, 0.7)",
              textAlign: "center",
            }}
          >
            أكلات منزلية
          </h1>
          {foods.map(product => (
            <Products key={product._id} product={product} />
          ))}
          {/* <h1>البنايات</h1>
           {buildings.map(product => (
            <Products key={product._id} product={product} />
          ))} */}
        </Row>
      </Container>
    </>
  )
}

export default Home
