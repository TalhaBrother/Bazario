import React from "react"
import { useState,useEffect } from "react"
import Search from "./search"
import axios from "axios"
const Products = () => {
    let [products, setProducts] = useState([])
    let [cart, setCart] = useState([])
    let [count, setCount]=useState(1)
    let [search,setSearch]=useState("")
    let fetchProducts = async () => {
        try {
            let data = await axios.get( search? `https://dummyjson.com/products/search?q=${search}`:"https://dummyjson.com/products")
            console.log(data)
            setProducts(data.data.products)
        } catch (error) {
            console.error("API Fetch Error!", error)

        }
    }
    
    let addToCart = (id) => {
        console.log(id)
        let findProduct = products.find(item => item.id === id)
        setCart([...cart, findProduct])
        setCount(count+1)
        alert(`${count} Items Added Successfully!`)
        
    }
    useEffect(() => {
        fetchProducts()
    }, [search])
    return (
        <>
        <Search search={search} setSearch={setSearch}/>
        <div className='w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6 '>
            {products.map((elm) => (
                <>
                    <div key={elm.id} className='border p-4 bg-amber-300' >
                        <div><img src={elm.thumbnail} className='size-fit' /></div>
                        <div className='text-black font-medium mb-2  overflow-hidden line-clamp-2'><p>{elm.description}</p></div>
                        {/* <div className='text-2xl h-14 w-full mb-2'><p>{elm.title}</p></div> */}
                        {/* <div><p>{elm.category}</p></div> */}
                        <div className="text-red-400 font-bold text-2xl mb-2">${elm.price}</div>
                        <div><button className="text-white" onClick={() => addToCart(elm.id)}>Add to cart</button></div>
                    </div>
                </>
            ))}
        </div>
        </>
    )
}
export default Products