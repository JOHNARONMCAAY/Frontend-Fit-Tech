import React from "react";
import "./../styles/Products.css";

export default function Products() {
  const products = [
    {
      id: "#12345",
      name: "Urban Threads Tee",
      type: "Men's Clothes",
      stock: 150,
      price: "$25.00",
      status: "In Stock",
    },
    {
      id: "#12346",
      name: "Chic Vogue Dress",
      type: "Women's Clothes",
      stock: 80,
      price: "$60.00",
      status: "In Stock",
    },
    {
      id: "#12347",
      name: "Classic Fit Jeans",
      type: "Men's Pants",
      stock: 200,
      price: "$45.00",
      status: "In Stock",
    },
    {
      id: "#12348",
      name: "Elegant Slacks",
      type: "Women's Pants",
      stock: 120,
      price: "$55.00",
      status: "Out of Stock",
    },
    {
      id: "#12349",
      name: "Street Style Hoodie",
      type: "Men's Clothes",
      stock: 100,
      price: "$40.00",
      status: "In Stock",
    },
    {
      id: "#12350",
      name: "Summer Breeze Skirt",
      type: "Women's Clothes",
      stock: 70,
      price: "$35.00",
      status: "Low Stock",
    },
  ];

  // Helper function to get status class based on product status
  const getStatusClass = (status) => {
    switch (status) {
      case "In Stock":
        return "in-stock";
      case "Out of Stock":
        return "out-stock";
      case "Low Stock":
        return "low-stock";
      default:
        return "";
    }
  };

  return (
    <div className="products-page">
      {/* Header */}
      <div className="products-header">
        <h2>Products</h2>
        <button className="add-btn">+ Add Product</button>
      </div>

      {/* Filters */}
      <div className="products-filters">
        <input type="text" placeholder="Search products..." />
        <div className="filter-buttons">
          <button className="active">All</button>
          <button>Men's Clothes</button>
          <button>Women's Clothes</button>
          <button>Men's Pants</button>
          <button>Women's Pants</button>
        </div>
      </div>

      {/* Products Table */}
      <table className="products-table">
        <thead>
          <tr>
            <th>Product ID</th>
            <th>Product Name</th>
            <th>Apparel Type</th>
            <th>Stock Quantity</th>
            <th>Price</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          {products.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.type}</td>
              <td>{item.stock}</td>
              <td>{item.price}</td>
              <td>
                <span className={`status ${getStatusClass(item.status)}`}>
                  {item.status}
                </span>
              </td>
              <td className="actions">
                {/* Action icons (edit & delete) */}
                ✏️ &nbsp; 🗑️
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
