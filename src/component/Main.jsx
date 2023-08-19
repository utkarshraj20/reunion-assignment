import React, { useState } from "react";
import PropertyDetails from "./PropertyDetails";
import data from "./data";


const Body = () => {
  const [filter, setFilter] = useState({
    location: "",
    type: "",
    price: "",
    availableFrom: ""
  });

  const [filteredData, setFilteredData] = useState(data);

  const handleSubmit = (e) => {
    e.preventDefault();
    filterData();
  };

  const filterData = () => {
    const newFilteredData = data.filter((item) => {
      const locationMatch = item.location === filter.location || filter.location === "";
      const typeMatch = item.type === filter.type || filter.type === "";
      const priceMatch = item.price <= filter.price || filter.price === "";
      const availableFromMatch = item.availableFrom === filter.availableFrom || filter.availableFrom === "";

      return (locationMatch && typeMatch && priceMatch && availableFromMatch);
    });

    setFilteredData(newFilteredData) ;
    // setFilteredData(newFilteredData.length ? newFilteredData : data);
  };

  const handleInputChange = async(e) => {
    const { name, value } = e.target;
    await setFilter((prevFilter) => ({
      ...prevFilter,
      [name]: value
    }));
  };

  return (
    <div className="body-container">
      <h1 className="page-title">Rent a Property</h1>
      <form className="filter-form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="location"
          placeholder="Location"
          value={filter.location}
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="type"
          placeholder="Type"
          value={filter.type}
          onChange={handleInputChange}
        />
        <input
          type="number"
          name="price"
          placeholder="Price upto"
          value={filter.price}
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="availableFrom"
          placeholder="Available From"
          value={filter.availableFrom}
          onChange={handleInputChange}
        />
        <button type="submit">Filter</button>
      </form>
      <PropertyDetails data={filteredData} />
    </div>
  );
};

export default Body;
