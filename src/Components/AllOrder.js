import { useContext, useState } from "react"
import { Card, Col, Button } from "react-bootstrap"
import SaudiContext from "../uitls/SaudiContext"
import OrderItem from "./OrderItem"
import OrderUserEdit from "./OrderUserEdit"
import OrderUserRemove from "./OrderUserRemove"

function AllOrder() {
  const { orderUser } = useContext(SaudiContext)

  return (
    <>
      {orderUser.map(order => (
      <>
      <OrderItem order={order}/>
      </>
      ))}
    
    </>
  )
}

export default AllOrder
