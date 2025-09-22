import React from "react";
import "../styles/Products.css";

export default function Products() {
  const products = [
    {
      id: 1,
      name: "T-Shirts",
      price: "$25",
      img: "https://scontent.fmnl9-3.fna.fbcdn.net/v/t39.30808-6/546239539_1181627717316930_1343709475978599672_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeEEnY-sCP0D7bROZD9GOWuenqkWuAgJG-meqRa4CAkb6XkT_yCz0AL6ec7doWPLBRmzXc90QrJ-b-Qoc8F-5Nn2&_nc_ohc=dPQ7UJ_fsPgQ7kNvwEsX-60&_nc_oc=AdmosIhoUyuQu0j73Z-aJ9KcLp4BTFNvRrA6c_rdiZ3IPHJhbxSFCW2X1GjWBkmgeJs&_nc_zt=23&_nc_ht=scontent.fmnl9-3.fna&_nc_gid=ljrtSAjnE7tEkZ5BhZXIlw&oh=00_AfbQ5udDkPpJGz2Qq4-QT31e1LwlGj6bEtQmZtbfpke1kQ&oe=68D150E3",
    },
    {
      id: 2,
      name: "Jorts",
      price: "$80",
      img: "https://scontent.fmnl9-1.fna.fbcdn.net/v/t39.30808-6/546426274_1181629613983407_5403134310558859555_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeFJOkxhmJjV9LkQ-SshTK1g39zWqPsvZwbf3Nao-y9nBnD9aFXJQs8qO-sow_6dPunIl3U-yU5J1p2dd73-ByUh&_nc_ohc=mIWCc1lrO5EQ7kNvwHMBgz6&_nc_oc=AdlEOrCRX8mBwFyuguppgK70U2ZYCWZCFtIKWylnwaOr1mCVSKQYauO-hyWWZo0n9Vo&_nc_zt=23&_nc_ht=scontent.fmnl9-1.fna&_nc_gid=7RqzVNaQhsNAFP_SziCgbg&oh=00_AfbgxkxWbqUKpRD_TI55M3SpZfObput2AW4SE6E128kt4g&oe=68D16967",
    },
    {
      id: 3,
      name: "Longsleeves",
      price: "$45",
      img: "https://scontent.fmnl9-2.fna.fbcdn.net/v/t39.30808-6/545198902_1179502357529466_3917356815419665141_n.jpg?stp=dst-jpg_s206x206_tt6&_nc_cat=101&ccb=1-7&_nc_sid=50ad20&_nc_eui2=AeGhaI8sFJBpLuWCp03yQr2va-co9Ta-5wpr5yj1Nr7nCgL5zSCScpwnAiKUROSzaoTlLQslWicGt0hu2g1rc8bd&_nc_ohc=0mZCQH3BfLQQ7kNvwG6tYOP&_nc_oc=AdkKIjguO6gCRDbHJkB7EnLW0hWIBitixoJDm0yWMIVh5tKAY2ewg4IUR2QjDRzO8nY&_nc_zt=23&_nc_ht=scontent.fmnl9-2.fna&_nc_gid=8cVNAfYjFZGoiSAc8_SPnA&oh=00_AfbuQH9_Ws3tK3drm2eBemGJEmwJQMS63u3J5Vt0ce1-IQ&oe=68D15BF2",
    },
    {
      id: 4,
      name: "Cargo Pants",
      price: "$60",
      img: "https://scontent.fmnl9-7.fna.fbcdn.net/v/t39.30808-6/542084894_1175350091278026_8853754821406955557_n.jpg?stp=dst-jpg_s206x206_tt6&_nc_cat=104&ccb=1-7&_nc_sid=50ad20&_nc_eui2=AeESTeMxaoixoeyLZ-JcrDEmbh__mreleuluH_-at6V66do9ORRi4VgpUhKC1QJr-PO6a3Kl6b3Bpgy-kIlVg7RX&_nc_ohc=-IjcvGlvPqsQ7kNvwFRlWWG&_nc_oc=Adk0Ss80kdE4maf1_K6JN6EHwvQhTFaqlz-KQxyL4SWJQoAJDIoHo66XUxrB4Lu6_j4&_nc_zt=23&_nc_ht=scontent.fmnl9-7.fna&_nc_gid=MwS09w8KX-HKITn46TcZLw&oh=00_AfbGsdCR-4mFo92q7EY0YrKMx1y6fUYW7XtM9aL3E0SQ_w&oe=68D1593F",
    },
  ];

  return (
    <section className="products" id="products">
      
      <h2 className="products-title">New Arrivals</h2>
      <p className="products-subtitle">
        Fresh picks for the season — upgrade your wardrobe with our latest styles.
      </p>

      
      <div className="products-grid">
        {products.map((item) => (
          <div key={item.id} className="product-card">
            <img src={item.img} alt={item.name} className="product-image" />
            <h3 className="product-name">{item.name}</h3>
            <p className="product-price">{item.price}</p>
            <button className="btn-add">Add to Cart</button>
          </div>
        ))}
      </div>
    </section>
  );
}
