import React from "react";
import "../styles/Staff.css";

export default function Staff() {
  const staffData = [
    {
      id: "#12345",
      name: "Ethan Carter",
      role: "Manager",
      department: "Sales",
      contact: "ethan.carter@example.com",
      access: "Full Access",
      accessClass: "full",
    },
    {
      id: "#67890",
      name: "Olivia Bennett",
      role: "Assistant Manager",
      department: "Sales",
      contact: "olivia.bennett@example.com",
      access: "Limited Access",
      accessClass: "limited",
    },
    {
      id: "#24680",
      name: "Noah Thompson",
      role: "Sales Associate",
      department: "Sales",
      contact: "noah.thompson@example.com",
      access: "Restricted Access",
      accessClass: "restricted",
    },
    {
      id: "#13579",
      name: "Ava Rodriguez",
      role: "Sales Associate",
      department: "Sales",
      contact: "ava.rodriguez@example.com",
      access: "Restricted Access",
      accessClass: "restricted",
    },
    {
      id: "#98765",
      name: "Liam Harper",
      role: "Sales Associate",
      department: "Sales",
      contact: "liam.harper@example.com",
      access: "Restricted Access",
      accessClass: "restricted",
    },
  ];

  return (
    <div className="staff-page">
      {/* Header with title and add staff button */}
      <div className="staff-header">
        <h2>Staff Management</h2>
        <button className="add-btn">+ Add New Staff</button>
      </div>

      {/* Filters section */}
      <div className="staff-filters">
        <input
          type="text"
          placeholder="Search staff by name, role, or department"
        />
        <select>
          <option>Filter by Role</option>
        </select>
        <select>
          <option>Filter by Department</option>
        </select>
      </div>

      {/* Staff table */}
      <table className="staff-table">
        <thead>
          <tr>
            <th>STAFF ID</th>
            <th>NAME</th>
            <th>ROLE</th>
            <th>DEPARTMENT</th>
            <th>CONTACT</th>
            <th>ACCESS LEVEL</th>
            <th>ACTIONS</th>
          </tr>
        </thead>
        <tbody>
          {staffData.map((staff) => (
            <tr key={staff.id}>
              <td>{staff.id}</td>
              <td>
                <strong>{staff.name}</strong>
              </td>
              <td>{staff.role}</td>
              <td>{staff.department}</td>
              <td>{staff.contact}</td>
              <td>
                <span className={`access-badge ${staff.accessClass}`}>
                  {staff.access}
                </span>
              </td>
              <td className="actions">
                <span className="edit">✏️</span>
                <span className="delete">🗑️</span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
