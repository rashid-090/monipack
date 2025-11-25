import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Paperitem, Plasticitem, Aluminiumitem, Foamitem } from "../../assets";

const FeaturedProducts = () => {
  const [activeTab, setActiveTab] = useState("all");

  // Sample products data
  const products = [
    {
      id: 1,
      name: "Paper Items",
      category: "paper",
      image: Paperitem,
    },
    {
      id: 2,
      name: "Plastic Items",
      category: "plastic",
      image: Plasticitem,
    },
    {
      id: 3,
      name: "Aluminium Items",
      category: "aluminium",
      image: Aluminiumitem,
    },
    {
      id: 4,
      name: "Foam Items",
      category: "foam",
      image: Foamitem,
    },
    {
      id: 1,
      name: "Paper Items",
      category: "paper",
      image: Paperitem,
    },
    {
      id: 2,
      name: "Plastic Items",
      category: "plastic",
      image: Plasticitem,
    },
    {
      id: 3,
      name: "Aluminium Items",
      category: "aluminium",
      image: Aluminiumitem,
    },
    {
      id: 4,
      name: "Foam Items",
      category: "foam",
      image: Foamitem,
    },
  ];

  // Filter products based on active tab
  const filteredProducts =
    activeTab === "all"
      ? products
      : products.filter((product) => product.category === activeTab);

  // Tab configuration
  const tabs = [
    { id: "all", label: "All" },
    { id: "paper", label: "Paper Items" },
    { id: "plastic", label: "Plastic Items" },
    { id: "aluminium", label: "Aluminium Items" },
    { id: "foam", label: "Foam Items" },
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 20,
      scale: 0.9,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12,
      },
    },
    exit: {
      opacity: 0,
      y: -20,
      scale: 0.9,
      transition: {
        duration: 0.2,
      },
    },
  };

  const tabVariants = {
    inactive: {
      scale: 1,
      transition: { duration: 0.2 },
    },
    active: {
      scale: 1.05,
      transition: {
        type: "spring",
        stiffness: 200,
      },
    },
  };

  return (
    <div className="bg-white relative overflow-hidden">
        
      <div className="w-11/12 bg-linear-to-r from-red-500 to-red-900 rounded-4xl mx-auto my-32 p-10 relative">
      
      <div className="   w-full mx-auto rounded-4xl py-10">
        <motion.h2
        className="text-4xl text-center text-white"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        Featured Products
      </motion.h2>

      {/* Tabs */}
      <motion.div
        className="flex justify-center w-fit rounded-xl items-center mx-auto  mt-8 flex-wrap gap-3"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        {tabs.map((tab) => (
          <motion.button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            variants={tabVariants}
            animate={activeTab === tab.id ? "active" : "inactive"}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`px-6 py-2 rounded-xl text-sm  transition-all duration-300 ${
              activeTab === tab.id
                ? "bg-gradient-to-r from-black to-zinc-600 text-white shadow-lg shadow-zinc-500/30"
                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
            }`}
          >
            {tab.label}
          </motion.button>
        ))}
      </motion.div>
      </div>

      {/* Products Grid with AnimatePresence */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeTab}
          className="grid grid-cols-2 md:grid-cols-4 gap-5 mt-10"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
        >
          {filteredProducts.map((product) => (
            <motion.div
              key={product.id}
              variants={itemVariants}
              layout
              className="relative overflow-hidden group rounded-2xl"
              whileHover={{
                scale: 1.03,
                transition: { type: "spring", stiffness: 300 },
              }}
            >
              <motion.img
                className="aspect-square object-cover rounded-2xl"
                src={product.image}
                alt={product.name}
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>
          ))}
        </motion.div>
      </AnimatePresence>

      {/* Empty state with animation */}
      <AnimatePresence>
        {filteredProducts.length === 0 && (
          <motion.div
            className="text-center mt-10"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.3 }}
          >
            <p className="text-gray-500 text-lg">
              No products found in this category.
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
    </div>
  );
};

export default FeaturedProducts;
