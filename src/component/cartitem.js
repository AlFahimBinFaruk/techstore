import React from 'react'
import {storeProducts} from '../data'
import { useGlobalContext } from '../contex'
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom'
import Paypalbtn from './paypalbtn'
export const Cartitem = ({cart}) => {
  console.log("cart is",cart)
    const {clearcart,carttotal,cartsubtotal,carttax,increase,decrease,remove,setProduct,setCart} =useGlobalContext();
    const location = useLocation();
    console.log("hstory",location)
    return (
    
            <div className="container">
            <div className="bd-example">
        <div className="table-responsive">
        <table className="table align-middle">
          <thead>
            <tr>
              <th scope="col" className="w-25">Product</th>
              <th scope="col" className="w-25">Name of product</th>
              <th scope="col" className="w-25">price</th>
              <th scope="col" className="w-25">quantity</th>
              <th scope="col" className="w-25">remove</th>
              <th scope="col" className="w-25">total</th>
            </tr>
          </thead>
          {cart.map((cart,index)=>{
                  const {image,name,price,total,id,count}=cart;
                  return (
                    <tbody key={index}>
              
                    <tr className="align-bottom">
                    <td> <img src={image.fields.file.url} className="cartimg"/></td>
                      <td>{name}</td>
                      <td>{price}</td>
                      <td><div className="cartwr">
                        <div className="d-flex justify-content-center">
                          <div>
                            <span
                              className="btn btn-black mx-1"
                              onClick={() => {
                                 decrease(id);
                              }}
                            >
                              -
                            </span>
                            <span className="btn btn-black mx-1">{count}</span>
                            <span
                              className="btn btn-black mx-1"
                              onClick={() => {
                                 increase(id);
                              }}
                            >
                              +
                            </span>
                          </div>
                        </div>
                      </div></td>
                      <td><span className="rbtn" onClick={()=>remove(id)}
                      >remove</span></td>
                      <td>${total}</td>
                    </tr>
                    
                  </tbody>
                  )
              })}
          
        </table>
        <div className="accordion accordion-flush pricesec" id="accordionFlushExample">
          <Link to="/"><button type="button" className="btn btn-outline-danger clearbtn" onClick={()=>clearcart()}>Clear Cart</button></Link>
        <div className="accordion-item">
        <h2 className="accordion-header accordion-body cartlist" id="flush-headingOne">
           subtotal:${cartsubtotal}
        </h2>
        
        </div>
        <div className="accordion-item">
        <h2 className="accordion-header accordion-body cartlist" id="flush-headingOne">
           tex:${carttax}
        </h2>
        
        </div>
        <div className="accordion-item">
        <h2 className="accordion-header accordion-body cartlist" id="flush-headingOne">
            total:${carttotal}
        </h2>
        </div>
        <br/>
        <Paypalbtn total={carttotal} clearcart={clearcart}/>
        </div>
        </div>
        
        </div>
        </div>
        
          
    )
}
