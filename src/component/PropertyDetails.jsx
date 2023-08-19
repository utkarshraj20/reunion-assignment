import React from "react";

const PropertyDetails = ({ data }) => {
  return (
    <div className="property-list">
      { data.length === 0 && <h1>No Result Found</h1> }
      { data && data.map((item) => (
        <div key={item.id} className="property-card">
          <div className="property-card-content">
            <h2 className="property-title">{item.title}</h2>
            <p className="property-info">Location: {item.location}</p>
            <p className="property-info">Type: {item.type}</p>
            <p className="property-info">Price: {item.price}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PropertyDetails;
