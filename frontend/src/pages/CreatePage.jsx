import React, { useState } from 'react'
import { ArrowLeftIcon } from 'lucide-react';
import { Link } from 'react-router';
import { useProductStore } from '../store/product';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router';
const CreatePage = () => {

  const [newProduct, setNewProduct] = useState({
    name: "",
    price: "",
    image: "",
  });

  const { createProduct } = useProductStore()
  
  const navigate = useNavigate();

  const handleAddProduct = async (e) => {
    e.preventDefault();
    
    if (!newProduct.name || !newProduct.price || !newProduct.image) {
      toast.error("All fields are required!");
      return; // stop execution
    }
    
    const { success, message } = await createProduct(newProduct);
    if (!success) {
      toast.error("Failed to create Product")
    } else { 
      toast.success("Product created successfully")
    }
    setNewProduct({ name: "", price: "", image: "" });
    navigate("/");
  };

  return (
    <div className="min-h-screen bg-base-200">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-2xl mx-auto">
          <Link to={"/"} className="btn btn-ghost mb-6">
            <ArrowLeftIcon className="size-5" />
            Back to Home
          </Link>

          <div className="card bg-base-100">
            <div className="card-body">
              <h2 className="card-title text-2xl mb-4">Create New Product</h2>
              <form onSubmit={handleAddProduct}>
                <div className="form-control mb-4">
                  <label className="label">
                    <span className="label-text">Name</span>
                  </label>
                  <input
                    name="name"
                    placeholder="Product Name"
                    className="input input-bordered"
                    value={newProduct.name}
                    onChange={(e) =>
                      setNewProduct({ ...newProduct, name: e.target.value })
                    }
                  />
                </div>

                <div className="form-control mb-4">
                  <label className="label">
                    <span className="label-text">Price</span>
                  </label>
                  <input
                    name="price"
                    type='number'
                    placeholder="Enter the price"
                    className="input input-bordered"
                    value={newProduct.price}
                    onChange={(e) =>
                      setNewProduct({ ...newProduct, price: e.target.value })
                    }
                  />
                </div>
                <div className="form-control mb-4">
                  <label className="label">
                    <span className="label-text">Price</span>
                  </label>
                  <input
                    name="image"
                    placeholder="Image URL"
                    className="input input-bordered"
                    value={newProduct.image}
                    onChange={(e) =>
                      setNewProduct({ ...newProduct, image: e.target.value })
                    }
                  />
                </div>

                <div className="card-actions justify-end">
                  <button
                    type="submit"
                    className="btn btn-primary"
                  >
                    Add Product
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CreatePage
