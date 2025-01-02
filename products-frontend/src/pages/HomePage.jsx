import React, { useState } from "react";
import SearchBar from "../components/SearchBar";
import ProductGrid from "../components/ProductGrid";
import SortFilter from "../components/SortFilter";
import axios from "../api/api";

const HomePage = () => {
  const [products, setProducts] = useState([]);

  const handleSearch = async (query) => {
    try {
      const response = await axios.get(`/api/products/search?query=${query}`);
      setProducts(response.data);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  const handleSort = (order) => {
    const sorted = [...products].sort((a, b) =>
      order === "asc" ? a.rating - b.rating : b.rating - a.rating
    );
    setProducts(sorted);
  };

  const handleFilter = (brand) => {
    if (brand) {
      const filtered = products.filter((product) => product.brand === brand);
      setProducts(filtered);
    } else {
      // Reset to original fetched products
      handleSearch("");
    }
  };

  return (
    <div>
      <SearchBar onSearch={handleSearch} />
      <SortFilter onSort={handleSort} onFilter={handleFilter} />
      <ProductGrid products={products} />
    </div>
  );
};

export default HomePage;