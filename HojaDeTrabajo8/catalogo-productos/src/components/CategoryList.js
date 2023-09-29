import React from "react";

function CategorySelector({ categories, onSelectCategory }) {
  return (
    <div className="category-selector">
      <label htmlFor="category-select">Selecciona una categoría: </label><br></br>
      <select id="category-select" onChange={(e) => onSelectCategory(e.target.value)}>
        {categories.map((category, index) => (
          <option key={index} value={category}>
            {category}
          </option>
        ))}
      </select>
    </div>
  );
}

export default CategorySelector;
