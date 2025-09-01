import React, { useEffect, useState } from "react";
import ProductNotFound from "../components/ProductNotFound";
import ProductCard from "../components/ProductCard";
import { useProductStore } from "../store/product";
import Hero from "../components/Hero";

const HomePage = ({ search }) => {
  const { fetchProducts, products } = useProductStore();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadProducts = async () => {
      setLoading(true);

      await fetchProducts();
      setLoading(false);
    };
    loadProducts();
  }, [fetchProducts]);

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(search.toLowerCase())
  );

  const isSearching = search.trim() !== "";

  return (
    <div className="min-h-screen">

      {/* Main content */}
      <div className="relative z-10 max-w-7xl mx-auto p-4 gap-2">
        {!isSearching && <Hero />}

        <section
          className="max-w-6xl mx-auto px-4 py-12 min-h-screen"
          id="products"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-2 p-2 text-center leading-tight">
            {isSearching ? "Search Results" : "Current Fitness Gear"}
          </h2>

          {/* loading products */}

          {loading ? (<div className="flex flex-cols items-center justify-center py-16">
            <p className="text-lg mt-4 font-semibold animate-pulse">
              Loading products...
            </p>
          </div>) :filteredProducts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
              {filteredProducts.map((product) => (
                <ProductCard key={product._id} product={product} />
              ))}
            </div>
          ) : (
            <ProductNotFound />
          )} 
        </section>
        
      </div>
    </div>
  );
};

export default HomePage;
