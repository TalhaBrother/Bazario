import axios from "axios"
import { useEffect,useState } from "react"
import Search from "./search"

const Product=()=>{
    const [product,setProduct]=useState(null)
    let fetchProduct=async()=>{
         let prodData=await axios.get("https://dummyjson.com/products/2")
         setProduct(prodData.data)
         return prodData.data
         
    }
   useEffect(()=>{
    fetchProduct()
   },[])
   console.log(product)
    return(
        <>
        
        <div>Product</div>
        <div>
            {product? 
            <div>{product.title}</div>
        :
         <div>Loading...</div>}
        </div>
        </>
        
    )
}
export default Product