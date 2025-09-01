import React, { useState } from "react";
import { Trash2Icon, PenSquareIcon } from "lucide-react";
import { useProductStore } from "../store/product";
import toast from "react-hot-toast";
import Modal from "./Modal";
import { LoaderIcon } from "lucide-react";

const ProductCard = ({ product }) => {
  const { deleteProduct } = useProductStore();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [imageLoading, setImageLoading] = useState(true);

  const handleDeleteProduct = async (pid) => {
    if (!window.confirm("Are you sure you want to delete this Product?")) return;

    const { success } = await deleteProduct(pid);
    if (!success) {
      toast.error("Error in Deleting product");
    } else {
      toast.success("Product Deleted Successfully");
    }
  };

  return (
      <div className="card bg-base-200 shadow-md transition-all duration-300 hover:shadow-xl hover:-translate-y-2 hover:scale-[1.02]">

      <figure className="relative w-full h-64 bg-gray-100">
        <img
          src={product.image || "/placeholder.jpg"}
          alt={product.name}
          className={`w-full h-full object-cover transition-opacity duration-300 ${
            imageLoading ? "opacity-0" : "opacity-100"
          }`}
          onLoad={() => setImageLoading(false)}
          onError={() => setImageLoading(false)}
        />
        {imageLoading && (
          <div className="absolute inset-0 flex items-center justify-center">
            <LoaderIcon className="w-8 h-8 animate-spin text-primary" />
          </div>
        )}
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
