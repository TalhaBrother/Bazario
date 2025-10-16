import { useContext } from "react"
import { AuthContext } from "../context/authContext"
import { doc, deleteDoc } from "firebase/firestore";
import { db } from "../firebase/config.js";

const ProductListing = ({ products = [] }) => {
  let { setIsEdit, setEditProduct } = useContext(AuthContext);

  let deleteProduct = async (id) => {
    try {
      await deleteDoc(doc(db, "products", id));
      console.log("Product Deleted.");
    } catch (error) {
      console.error("Error in deleting product!", error);
    }
  };

  return (
  <>
    <div className="flex justify-between w-[60%] mx-auto">
      {/* Left side — Products */}
      <div className="w-[70%] flex flex-col gap-2">
        {products.map((product) => (
          <p key={product.id} className="border p-2 rounded shadow">
            {product.name}
          </p>
        ))}
      </div>

      {/* Right side — Buttons */}
      <div className="w-[25%] flex flex-col gap-2">
        {products.map((product) => (
          <div key={product.id} className="flex gap-2">
            <button
              className="bg-blue-500 text-white px-3 py-1 rounded"
              onClick={() => {
                setIsEdit(true);
                setEditProduct(product.id);
              }}
            >
              Edit
            </button>
            <button
              className="bg-red-500 text-white px-3 py-1 rounded"
              onClick={() => deleteProduct(product.id)}
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  </>
);
}

export default ProductListing;
