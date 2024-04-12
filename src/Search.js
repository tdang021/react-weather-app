import React from "react";
import "./Search.css";

export default function Search() {
  function handleSubmit(event) {
    alert(`Hello World`);
  }

  return (
    <div className="searchContainer">
      <form onSubmit={handleSubmit}>
        <input type="search" placeholder="Enter a city" />
        <input type="submit" value="Search" />
      </form>
    </div>
  );
}
