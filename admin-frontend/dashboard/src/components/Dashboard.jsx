import React from "react";
import "../styles/Dashboard.css";

export default function Dashboard() {
  const stats = [
    { title: "Sales", value: "1,234", sub: "+5% from last month" },
    { title: "Revenue", value: "$250,578", sub: "+12.5% from last month" },
    { title: "Customers", value: "1,204", sub: "+8% new customers" },
  ];

  const topProducts = [
    { name: "Classic Tee", sold: "1,200 sold" },
    { name: "Cargo Pants", sold: "980 sold" },
    { name: "Denim Jacket", sold: "750 sold" },
  ];

  const recent = [
    {
      id: "#12345",
      name: "John Doe",
      items: "2 Classic Tees, 1 Cargo Pants",
      total: "$125.00",
    },
    {
      id: "#12344",
      name: "Jane Smith",
      items: "1 Denim Jacket",
      total: "$89.99",
    },
    {
      id: "#12343",
      name: "Mike Johnson",
      items: "3 Graphic Hoodies",
      total: "$210.50",
    },
    {
      id: "#12342",
      name: "Emily White",
      items: "1 Slim Fit Chinos",
      total: "$65.00",
    },
  ];

  return (
    <main className="dashboard">
      <div className="dashboard-inner">

        {/* Header */}
        <header className="dashboard-header">
          <h1>Dashboard</h1>
        </header>

        {/* Stat Cards */}
        <section className="stats">
          {stats.map((s) => (
            <div key={s.title} className="stat-card">
              <div className="stat-title">{s.title}</div>
              <div className="stat-value">{s.value}</div>
              <div className="stat-sub">{s.sub}</div>
            </div>
          ))}
        </section>

        {/* Reports Section */}
        <section className="reports">
          <div className="reports-inner">
            <div className="reports-header">
              <div className="reports-title">Reports</div>
            </div>

            <div className="reports-body">
              {/* Left - Chart Placeholder */}
              <div className="report-left">
                <div className="chart-placeholder">
                  <div className="legend">Product Sales Distribution</div>
                  <div className="legend-items">
                    Tees &nbsp;&middot;&nbsp; Pants &nbsp;&middot;&nbsp; Jackets &nbsp;&middot;&nbsp; Hoodies &nbsp;&middot;&nbsp; Chinos
                  </div>
                </div>
              </div>

              {/* Right - Chart Line */}
              <div className="report-right">
                <svg
                  viewBox="0 0 100 40"
                  preserveAspectRatio="none"
                  className="line-chart"
                >
                  <polyline
                    points="0,28 12,22 24,26 36,20 48,23 60,19 72,22 84,18 100,20"
                    fill="none"
                    stroke="#E8D94A"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </div>
          </div>
        </section>

        {/* Bottom Row - Top Products & Recent Sales */}
        <section className="bottom-row">

          {/* Top Selling Products */}
          <div className="top-products">
            <div className="section-title">Top Selling Products</div>
            <div className="products-grid">
              {topProducts.map((p) => (
                <div key={p.name} className="product-card">
                  <div className="product-image">
                    <svg width="40" height="40" viewBox="0 0 24 24" fill="none">
                      <path
                        d="M12 2v20"
                        stroke="#d6c77a"
                        strokeWidth="1.6"
                        strokeLinecap="round"
                      />
                    </svg>
                  </div>
                  <div className="product-name">{p.name}</div>
                  <div className="product-sold">{p.sold}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Recent Sales */}
          <aside className="recent-sales">
            <div className="section-title">Recent Sales</div>
            <ul>
              {recent.map((r) => (
                <li key={r.id} className="recent-item">
                  <div className="recent-info">
                    <div className="recent-id">
                      {r.id} - <span className="recent-name">{r.name}</span>
                    </div>
                    <div className="recent-items">{r.items}</div>
                  </div>
                  <div className="recent-total">{r.total}</div>
                </li>
              ))}
            </ul>
          </aside>
        </section>
      </div>
    </main>
  );
}
