import React from 'react'
import { Link } from 'react-router-dom';
import { useGlobalContext } from '../contex'
import { Modal } from './modal';
export const Productlist = () => {
  const {product,Addtocart,modal}=useGlobalContext();
  //console.log("product",product);
  if(product===[]){
    return (
      <p>nothing to show</p>
    )
  }
    return (
        <div className="container my-4">
           <div className="album py-5 bg-light">
    <div className="container">
      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3 p-2">

        {product.map((product,index)=>{
          const {id,name,image,price,company,inCart}=product;
          //console.log("img is",image.fields.file.url)
          return (
            <div className="col" key={index}>
            <div className="card shadow-sm">
              <Link to={`/cart/${id}`}>
               <img className="bd-placeholder-img card-img-top"  src={image.fields.file.url}/>
              </Link>
              <div className="card-body">
                <div className="d-flex justify-content-between align-items-center">
                  <div className="btn-group">
                  <small className="text-muted">{name}- </small>
                  <small className="text-muted">  {company}</small>
                  </div>
                  <small className="text-muted">${price}</small>
                    <button type="button" className="btn btn-sm btn-outline-secondary" disabled={inCart?true:false }onClick={()=>Addtocart(id)}>{inCart?"In Cart":"Add Cart"}</button>
                </div>
              </div>
            </div>
          </div>

          )
        })}
      </div>
    </div>
    {modal&&<Modal/>}
  </div> 
        </div>
    )
}
