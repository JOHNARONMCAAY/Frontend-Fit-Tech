import React from "react";
import "../styles/Sales.css";

export default function Sales() {
  const salesData = [
    { id: "#12345", product: "Urban Fit Jeans", qty: 2, customer: "Liam Harper", date: "2024-07-26", total: "$120.00" },
    { id: "#12346", product: "Classic Cotton Tee", qty: 3, customer: "Olivia Bennett", date: "2024-07-25", total: "$75.00" },
    { id: "#12347", product: "Slim Fit Chinos", qty: 1, customer: "Ethan Carter", date: "2024-07-24", total: "$60.00" },
    { id: "#12348", product: "Relaxed Linen Shirt", qty: 2, customer: "Ava Morgan", date: "2024-07-23", total: "$90.00" },
    { id: "#12349", product: "Athletic Performance Shorts", qty: 4, customer: "Noah Parker", date: "2024-07-22", total: "$100.00" },
  ];

  return (
    <main className="sales">
      {/* Header */}
      <div className="sales-header">
        <h1>Sales</h1>
        <button className="new-sale">+ New Sale</button>
      </div>

      {/* Filters */}
      <div className="filters">
        <input type="text" placeholder="Search sales..." />
        <select>
          <option>Date Range</option>
        </select>
        <select>
          <option>Product Type</option>
        </select>
        <select>
          <option>Status</option>
        </select>
      </div>

      {/* Sales Table */}
      <table className="sales-table">
        <thead>
          <tr>
            <th>Sale ID</th>
            <th>Product Name</th>
            <th>Quantity</th>
            <th>Customer</th>
            <th>Date</th>
            <th>Total Amount</th>
          </tr>
        </thead>
        <tbody>
          {salesData.map((sale) => (
            <tr key={sale.id}>
              <td>{sale.id}</td>
              <td>{sale.product}</td>
              <td>{sale.qty}</td>
              <td>{sale.customer}</td>
              <td>{sale.date}</td>
              <td>{sale.total}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </main>
  );
}
