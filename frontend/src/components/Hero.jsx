import React from "react";
import { Link } from "react-router";
import { ShoppingBag } from "lucide-react";

const HeroSection = () => {
  const scrollToProducts = () => {
    const productsSection = document.getElementById("products");
    if (productsSection) {
      productsSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      className="relative h-[80vh] flex items-center justify-center text-center bg-cover bg-center rounded-2xl overflow-hidden mx-1  md:mx-1 my-3"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1579758629938-03607ccdbaba?q=80&w=1920&auto=format&fit=crop')",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Content */}
      <div className="relative z-10 max-w-3xl mx-auto px-6 text-white">
        <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold leading-tight">
          <span className="text-primary">Gear Up.</span> Level Up.
        </h1>
        <p className="text-base md:text-lg lg:text-xl opacity-90 mt-4">
          Premium gym wear & accessories built for performance and style.
        </p>

        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={scrollToProducts}
            className="btn btn-primary flex items-center gap-2"
          >
            <ShoppingBag size={18} /> Shop Now
          </button>
          <button
            onClick={scrollToProducts}
            className="btn btn-outline text-white border-white"
          >
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
