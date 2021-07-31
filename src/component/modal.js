import React from 'react'

import {
    Link
  } from "react-router-dom";
  import { useGlobalContext } from '../contex';
export const Modal = () => {
    const {product,modal,modalid,setModal}=useGlobalContext();
    const closeModal=()=>{
        setModal(false)
    }

    let id=parseInt(modalid)
    let modalpro=product.find((product)=>{return product.id===id});
    console.log("modal ",modalpro)
    console.log("modaid",modalid)
        const {img,title,price}=modalpro
        return (
            <div className="modalcon">
            <div className="container">
              <div className="row">
                <div
                  className="col-8 mx-auto col-md-6 col-lg-4 p-5 text-center text-capitalize"
                  id="modal"
                >
                  <h5>item added to cart</h5>
                  <img src={`../${img}`} className="img-fluid" alt="" />
                  <h5>{title}</h5>
                  <h5 className="text-muted">price : ${price}</h5>
                  <Link to="/">
                    <button
                    className="modalbtn"
                      onClick={() => {
                        closeModal();
                      }}
                    >
                      Continue Shopping
                    </button>
                  </Link>
                  <Link to="/cart">
                    <button
                      className="modalbtn"
                      onClick={() => {
                        closeModal();
                      }}
                    >
                      Go To Cart
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )
    
}
