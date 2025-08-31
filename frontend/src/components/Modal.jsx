import React, { useState, useEffect } from "react";
import toast from "react-hot-toast";
import { useProductStore } from "../store/product";

const Modal = ({ product, onClose }) => {
  const [updatedProduct, setUpdatedProduct] = useState(product);
  const { updateProduct } = useProductStore();

  useEffect(() => {
    const modal = document.getElementById("modal");
    if (modal) modal.showModal();
  }, []);

  const handleUpdateProduct = async () => {
    try {
      const { success, message } = await updateProduct(
        product._id,
        updatedProduct
      );
      if (!success) {
        toast.error(message || "Failed to update product");
      } else {
        toast.success("Product Updated Successfully!");
        onClose(); 
      }
    } catch (error) {
      console.error(error);
      toast.error("Something went wrong!");
    }
  };

  return (
    <dialog id="modal" className="modal">
      <div className="modal-box">
        <h3 className="font-bold text-lg text-center">Update Product</h3>
        <div className="flex flex-col gap-4 mt-4">
          <input
            name="name"
            type="text"
            placeholder="Product Name"
            className="input input-bordered"
            value={updatedProduct.name}
            onChange={(e) =>
              setUpdatedProduct({ ...updatedProduct, name: e.target.value })
            }
          />
          <input
            name="price"
            type="number"
            placeholder="Price"
            className="input input-bordered"
            value={updatedProduct.price}
            onChange={(e) =>
              setUpdatedProduct({ ...updatedProduct, price: e.target.value })
            }
          />
          <input
            name="image"
            type="text"
            placeholder="Image URL"
            className="input input-bordered"
            value={updatedProduct.image}
            onChange={(e) =>
              setUpdatedProduct({ ...updatedProduct, image: e.target.value })
            }
          />
        </div>
        <div className="modal-action">
          <button className="btn btn-primary" onClick={handleUpdateProduct}>
            Update
          </button>
          <button className="btn" onClick={onClose}>
            Close
          </button>
        </div>
      </div>
    </dialog>
  );
};

export default Modal;
