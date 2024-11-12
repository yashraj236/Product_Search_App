import React from 'react';

const categories = ['business', 'entertainment', 'general', 'health', 'science', 'sports', 'technology'];

const Navbar = ({ setCategory }) => {
  return (
    <nav>
      {categories.map((cat) => (
        <button key={cat} onClick={() => setCategory(cat)}>
          {cat.charAt(0).toUpperCase() + cat.slice(1)}
        </button>
      ))}
    </nav>
  );
};

export default Navbar;