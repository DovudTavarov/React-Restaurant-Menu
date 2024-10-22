import { useState } from "react";
import "./App.css";
import RestoMenu from "./component/RestoMenu";
import menuData from "./assets/menuData";

function App() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");

  const handleCategoryChange = (selectedCategory) => {
    setCategory(selectedCategory);
  };
  const handleSearch = (event) => {
    setSearch(event.target.value);
  };
  const filteredMenu = menuData.filter((item) => {
    const categoryFilter = category === "All" || item.category === category;
    const searchFilter = item.title
      .toLowerCase()
      .startsWith(search.toLowerCase());
    return categoryFilter && searchFilter;
  });

  return (
    <>
      <h1>Restaurant Menu</h1>
      <div className="menu-labels">
        <button
          onClick={() => handleCategoryChange("All")}
          className={`menu-label ${
            category === "All" ? "active-menu-btn" : ""
          }`}
        >
          All
        </button>
        <button
          onClick={() => handleCategoryChange("breakfast")}
          className={`menu-label ${
            category === "breakfast" ? "active-menu-btn" : ""
          }`}
        >
          Breakfast
        </button>
        <button
          onClick={() => handleCategoryChange("lunch")}
          className={`menu-label " ${
            category === "lunch" ? "active-menu-btn" : ""
          }`}
        >
          Lunch
        </button>
        <button
          onClick={() => handleCategoryChange("shakes")}
          className={`menu-label ${
            category === "shakes" ? "active-menu-btn" : ""
          }`}
        >
          Shakes
        </button>
      </div>
      <div id="search">
        <input
          value={search}
          onChange={handleSearch}
          type="text"
          id="search-input"
          placeholder="Search..."
        />
      </div>
      <main className="container">
        {filteredMenu.map((data) => {
          const { id, title, category, price, img, desc } = data;
          return (
            <RestoMenu
              key={id}
              title={title}
              category={category}
              price={price}
              img={img}
              desc={desc}
            />
          );
        })}
      </main>
    </>
  );
}

export default App;
