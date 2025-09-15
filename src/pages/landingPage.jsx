import React, { useEffect, useRef, useState } from "react";
import { lazy, Suspense, useContext } from 'react'
import { ThemeContext } from "../context/ThemeContext";
import Navbar from "../components/navbar";
import Search from '../components/search'
import Banner from '../components/banner'
import Footer from '../components/footer'
import ProductListing from "../components/productListing"
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {db} from "../firebase/config.js"
import { doc, collection, addDoc, updateDoc,query,onSnapshot } from "firebase/firestore";


import { text } from "@fortawesome/fontawesome-svg-core";
import { AuthContext } from "../context/authContext";

const Products = lazy(() => import("../components/products"))
const LandingPage = () => {
  const [products, setProduct] = useState([])
  let{isEdit,setIsEdit,editProduct}=useContext(AuthContext)
  let prodInput = useRef()
  let { theme } = useContext(ThemeContext)
  console.log(theme)

  let addProduct = async () => {
    try {
      const docRef = await addDoc(collection(db, "products"), {
        name: prodInput.current.value,
        pid: Date.now(),
      });
      console.log("Product added with ID: ", docRef.id);
    } catch (error) {
      console.error("Adding Product Error!", error)
    }
  }

  let editProductHandler = async () => {
    try {
      const docRef = doc(db, "products", editProduct);

      // Set the "capital" field of the city 'DC'
      await updateDoc(docRef, {
        name:prodInput.current.value
      });
    } catch (error) {
      console.error("Error in editing product!",error)
    }
  }
  useEffect(()=>{
     const unsubscribe = onSnapshot(collection(db, "products"), (querySnapshot) => {
      let productsArr = [];
      querySnapshot.forEach((doc) => {
        productsArr.push({ id: doc.id, ...doc.data() });
      });
      setProduct(productsArr);
      console.log(productsArr);
    });

    // Cleanup listener on unmount
    return () => unsubscribe();
  },[])

  return (
    <>
      <div className={`${theme === "dark" ? 'bg-gray-900 text-white' : 'bg-white text-black'}`}>

        <Navbar />
        <Search />
        <Banner />

        <Suspense fallback={
          <div className="flex justify-center items-center h-40">
            <FontAwesomeIcon icon={faSpinner} spin size="2x" />
          </div>
        }>
          <Products />
        </Suspense>
        <div>
          <input ref={prodInput} type="text" placeholder="Add product"></input>
          {isEdit ?
          <div>
          <button onClick={()=>editProductHandler()}>Update</button>
          <button onClick={()=>setIsEdit(false)}>Cancel</button>
          </div>
          :
          <button onClick={()=>addProduct()}>Add</button>
          }
        </div>
        <ProductListing products={products}/>
        <Footer />

      </div>
    </>
  )



}
export default LandingPage