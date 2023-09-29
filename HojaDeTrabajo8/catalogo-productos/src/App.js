import React, { useState } from "react";
import Header from "./components/Header"
import Footer from "./components/Footer";
import CategorySelector from "./components/CategoryList";
import ProductList from "./components/ProductList";
import categories from "./Data/category";
import products from "./Data/product";


function App() {
  const [selectedCategory, setSelectedCategory] = useState(categories[0]);
  const filteredProducts = products.filter((product) => product.category === selectedCategory);

  return (
    <div className="app">
      
      <main>
      <Header />
      <div class="container">
        <CategorySelector categories={categories} onSelectCategory={setSelectedCategory} />
        <br></br><ProductList products={filteredProducts} />
      </div>
      <Footer />
      </main>
      
    </div>
  );
}

export default App;
