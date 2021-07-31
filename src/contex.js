import React, { useState, useContext,useEffect } from 'react'
import Client from './contentful';
import {storeProducts} from './data'
const AppContext = React.createContext()

const AppProvider = ({children}) => {
  //console.log("is tis",storeProducts)
  const [storeitem, setStoreitem] = useState('')
  const [product, setProduct] = useState([]);
  const [modal, setModal] = useState(false)
  const [modalid, setModalid] = useState()
  const [cart, setCart] = useState('')
  const [carttotal, setCarttotal] = useState(0)
  const [cartsubtotal, setCartsubtotal] = useState(0)
  const [carttax, setCarttax] = useState(0)
  const addproduct= async ()=>{
    let response=await Client.getEntries({
          content_type:"ecommerce",
          order:'-fields.name'//the api will give result according to the name first letter from last to first..
        })
        //console.log(response.items)
        let products = [];
       response.items.map((item)=>{
        const singleItem =item.fields
        products = [...products, singleItem];
         ////console.log("items are",item.fields)
        // setStoreitem(item.fields)
        // //console.log("stoeitem",storeitem)
        // storeitem.forEach(item=>{
        //   //console.log("now it",item)
        // })
       })
        
    // let products = [];
    // storeProducts.forEach(item => {
    //   const singleItem = { ...item };
    //   products = [...products, singleItem];
    // });
    setProduct(products)
    
  }
  useEffect(() => {
    addproduct()
  }, [])
  const increase=(id)=>{
    ////console.log("increase")
    let temppro=[...cart];
      const index = temppro.indexOf(getsingleproduct(id));
      const updateproduct = temppro[index];
      updateproduct.count =updateproduct.count+ 1;
      const price = updateproduct.price;
      updateproduct.total = price*updateproduct.count;
      setCart(temppro);
      
  }
  const decrease=(id)=>{
    ////console.log('decrease')
    let temppro=[...cart];
      const index = temppro.indexOf(getsingleproduct(id));
      const updateproduct = temppro[index];
      updateproduct.count =updateproduct.count- 1;
      if(updateproduct.count===0){
        remove(id)
      }else{
      const price = updateproduct.price;
      updateproduct.total = price*updateproduct.count;
      setCart(temppro);
      }
  }
  const clearcart=()=>{
    setCart("")
    addproduct()
    
  }
  const remove=(id)=>{
    let temppro=[...product];
      const index = temppro.indexOf(getsingleproduct(id));
      const updateproduct = temppro[index];
      updateproduct.inCart = false;
      updateproduct.count = 0;
      updateproduct.total = 0;
      setProduct(temppro);
      const removeproduct=cart.filter((product)=>{return product.id!==id})
      setCart(removeproduct)
  }
 
  const getsingleproduct=(id)=>{
    ////console.log("product is",product)
      let spro=product.find((product)=>{return product.id===id});
      return spro
  }
  const Addtocart=(id)=>{
    ////console.log(storeitem)
     // //console.log("ok")
      let temppro=[...product];
      const index = temppro.indexOf(getsingleproduct(id));
      const updateproduct = temppro[index];
      updateproduct.inCart = true;
      updateproduct.count = 1;
      const price = updateproduct.price;
      updateproduct.total = price;
      setProduct(temppro);
      setModal(true);
      let cid=parseInt(id)
      setModalid(cid)
      setCart([...cart,updateproduct])
  }
  const addtotal=()=>{
    ////console.log("addtotal")
    let subtotal=0;
    product.map((product)=>{subtotal +=product.total})
    let tax=subtotal*0.1;
    ////console.log("addtotal",product)
    tax=parseFloat(tax.toFixed(2));
    ////console.log("after tax",tax)
    let total=subtotal+tax;
    setCartsubtotal(subtotal);
    setCarttax(tax);
    setCarttotal(total)
    ////console.log("subtotal",subtotal)
  }
  useEffect(() => {
   addtotal()
  }, [product,cart])
 

  return <AppContext.Provider value={{product,getsingleproduct,Addtocart,modal,modalid,setModal,carttotal,cartsubtotal,carttax,cart,increase,decrease,remove,setProduct,setCart,clearcart}}>{children}</AppContext.Provider>
}
// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppContext, AppProvider }
