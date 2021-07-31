import React from 'react'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom';
import { useGlobalContext } from '../contex';
import { Modal } from './modal';
export const Prodetails = () => {
  const {id}=useParams();
  const pid=parseInt(id)
  const {getsingleproduct,Addtocart,modal}=useGlobalContext()
  const singleproductdata=getsingleproduct(pid);
  ////console.log(singleproductdata,id)
  if(!singleproductdata){
    return (
      <p>no product found</p>
    )
  }
  ////console.log(singleproductdata)
  const {image,company,info,price,name,inCart}=singleproductdata;
    return (
        <div className="container my-5">
            <div className="about">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-5 col-md-6">
                        <div className="about-img">
                            <img src={image.fields.file.url}/>
                        </div>
                    </div>
                    <div className="col-lg-7 col-md-6">
                        <div className="section-header text-left">
                            <p>Learn About Us</p>
                            <h2>Model: {name}</h2>
                            <p>Price: ${price}</p>
                        </div>
                        <div className="about-text">
                            <p>
                                some info: {info}
                            </p>
                            <Link className="btn" to="/">Back to product</Link>
                            <button className="btn mx-2" onClick={()=>Addtocart(pid)} disabled={inCart?true:false} >{inCart?"In Cart":"Add to Cart"}</button>
                        </div>
                    </div>
                </div>
            </div>
            {modal&&<Modal/>}
        </div>
        </div>
    )
}
