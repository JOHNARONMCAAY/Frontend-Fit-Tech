import React from "react";
import "../styles/Users.css";

export default function Users() {
  const users = [
    {
      id: "#12345",
      name: "Liam Carter",
      email: "liam.carter@example.com",
      role: "Admin",
      lastActivity: "2023-11-15",
    },
    {
      id: "#67890",
      name: "Olivia Bennett",
      email: "olivia.bennett@example.com",
      role: "Customer",
      lastActivity: "2023-11-14",
    },
    {
      id: "#11223",
      name: "Ethan Harper",
      email: "ethan.harper@example.com",
      role: "Customer",
      lastActivity: "2023-11-13",
    },
  ];

  return (
    <div className="users-page">
      {/* Header section */}
      <div className="users-header">
        <h2>Users</h2>
        <button className="add-user-btn">+ Add User</button>
      </div>

      {/* Filters */}
      <div className="users-filters">
        <input
          type="text"
          className="search-input"
          placeholder="Search users by name, email..."
        />
        <select className="role-filter">
          <option value="all">Role: All</option>
          <option value="admin">Admin</option>
          <option value="customer">Customer</option>
        </select>
      </div>

      {/* Users Table */}
      <table className="users-table">
        <thead>
          <tr>
            <th>User ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Role</th>
            <th>Last Activity</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td className="name">{user.name}</td>
              <td>{user.email}</td>
              <td>
                <span
                  className={`role-badge ${
                    user.role === "Admin" ? "admin" : "customer"
                  }`}
                >
                  {user.role}
                </span>
              </td>
              <td>{user.lastActivity}</td>
              <td>
                <button className="action-btn">⋮</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
