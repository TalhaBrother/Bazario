import React from "react"
import { useState,useEffect } from "react"
const Products = () => {
    let [products, setProducts] = useState([])
    let [cart, setCart] = useState([])
    let fetchProducts = async () => {
        try {
            let data = await fetch("https://dummyjson.com/products").then(res => res.json())
            console.log(data)
            setProducts(data.products)
        } catch (error) {
            console.error("API Fetch Error!", error)

        }
    }
    let addToCart = (id) => {
        console.log(id)
        let findProduct = products.find(item => item.id === id)
        setCart([...cart, findProduct])
    }
    useEffect(() => {
        fetchProducts()
    }, [])
    return (
        <div className='w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6 '>
            {products.map((elm) => (
                <>
                    <div key={elm.id} className='border p-4' >
                        <div className='text-[0.5em] h-14 w-full'><h1>{elm.title}</h1></div>
                        <div><img src={elm.thumbnail} className='size-32 mt-5' /></div>
                        <div><p>{elm.category}</p></div>
                        <div className="text-red-400">${elm.price}</div>
                        <div className='mb-3  overflow-hidden line-clamp-2'><p>{elm.description}</p></div>
                        <div><button onClick={() => addToCart(elm.id)}>Add to cart</button></div>
                    </div>
                </>
            ))}
        </div>
    )
}
export default Products