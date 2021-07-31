import React from 'react'
import { useGlobalContext } from '../contex'
import {Cartitem} from './cartitem'
export const Cart = () => {
  const {cart} =useGlobalContext();
//console.log(cart.length,"cart lenth")
  if(cart.length!==0){
    ///console.log("ok cart",cart)
      return (
      <Cartitem cart={cart} />
      ) 
  }
    return (
    <h2 className="text-center my-5">Your cart is empty</h2>
    )
}
