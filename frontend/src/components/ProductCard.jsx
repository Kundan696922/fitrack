import React, { useState } from "react";
import { Trash2Icon, PenSquareIcon } from "lucide-react";
import { useProductStore } from "../store/product";
import toast from "react-hot-toast";
import Modal from "./Modal";

const ProductCard = ({ product }) => {
  const { deleteProduct } = useProductStore();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleDeleteProduct = async (pid) => {
    const { success } = await deleteProduct(pid);
    if (!success) {
      toast.error("Error in Deleting product");
    } else {
      toast.success("Product Deleted Successfully");
    }
  };

  return (
    <div className="card bg-base-200 hover:shadow-lg transition-all duration-200">
      <figure>
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title text-xl md:text-2xl lg:text-3xl font-bold">
          {product.name}
        </h2>
        <span className="text-base md:text-lg lg:text-xl">
          ₹ {product.price}
        </span>
        <div className="card-actions justify-between items-center mt-4">
          <div className="flex items-center gap-1">
            <button onClick={() => setIsModalOpen(true)}>
              <PenSquareIcon className="size-4" />
            </button>
            <button
              className="btn btn-ghost btn-xs text-error"
              onClick={() => handleDeleteProduct(product._id)}
            >
              <Trash2Icon className="size-4" />
            </button>
          </div>
          <button
            className="btn btn-primary"
            onClick={() => toast.success("Product purchased successfully!")}
          >
            Buy Now
          </button>
        </div>
      </div>

      {isModalOpen && (
        <Modal product={product} onClose={() => setIsModalOpen(false)} />
      )}
    </div>
  );
};

export default ProductCard;
