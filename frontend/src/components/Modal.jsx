import React, { useState, useEffect } from "react";
import toast from "react-hot-toast";
import { useProductStore } from "../store/product";

const Modal = ({ product, onClose }) => {
  const [updatedProduct, setUpdatedProduct] = useState(product);
  const { updateProduct } = useProductStore();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const modal = document.getElementById("modal");
    if (modal) modal.showModal();
  }, []);

  const handleUpdateProduct = async () => {
    setLoading(true);
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
    } finally { 
      setLoading(false);
    }
  };

  return (
    <dialog id="modal" className="modal">
      <div className="modal-box">
        <h2 className="font-bold text-2xl mb-4 text-center">Update Product</h2>
        <div className="flex flex-col gap-4 mt-4">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
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
          <label className="label">
            <span className="label-text">Price</span>
          </label>
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
          <label className="label">
            <span className="label-text">Image</span>
          </label>
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
          <button
            className="btn btn-primary"
            onClick={handleUpdateProduct}
            disabled={loading}
          >
            { loading ? "Updating..." : "Update"}
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
