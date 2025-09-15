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
    <div>
      {products.map((product) => (
        <div key={product.id}>
          <p>{product.name}</p>
          <button
            onClick={() => {
              setIsEdit(true);
              setEditProduct(product.id);
            }}
          >
            edit
          </button>
          <button onClick={() => deleteProduct(product.id)}>delete</button>
        </div>
      ))}
    </div>
  );
};

export default ProductListing;
