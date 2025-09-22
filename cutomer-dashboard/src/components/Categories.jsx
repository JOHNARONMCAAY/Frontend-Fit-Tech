import React from "react";
import "../styles/Categories.css";

export default function Categories() {
  const categories = [
    {
      id: 1,
      name: "Tops",
      img: "https://scontent.fmnl9-7.fna.fbcdn.net/v/t39.30808-6/546236775_1179496374196731_5689687681148700847_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeGGMcklVH-FCnR5p_OcPdNLKosi4CAmXhYqiyLgICZeFkyrm58gX_BNJbKcduN_5Dhg8J7GBwTrUovipnAmITnu&_nc_ohc=xeKIKBiZoB4Q7kNvwFKUR_N&_nc_oc=AdmE21fr2qAlKOCvDuTqcdLeppb40Eq4bwiTLD1dXFVhoe1OaDlprlAcl9fbpSlDBXY&_nc_zt=23&_nc_ht=scontent.fmnl9-7.fna&_nc_gid=3rfwKsewWRW_BAfUYwNJPQ&oh=00_AfZ4fn38OFM_JpWzO0zpUpJAHLZJy9as-JNGsQCxBFZJWQ&oe=68D14FF1",
    },
    {
      id: 2,
      name: "Bottoms",
      img: "https://scontent.fmnl9-3.fna.fbcdn.net/v/t39.30808-6/545391190_1179498070863228_7592871928301266374_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeGrk5Bm5dOyUd2zL9A_-VCHnT7r2bcZmfidPuvZtxmZ-CW9dJG4ng-1s61ZxD5vzIL-TOKpdqrip-VQdkfeKaJt&_nc_ohc=pwEQo1JWLFUQ7kNvwFrf7rO&_nc_oc=Adk9yppAb7rRfWlUXcGUHVMpyA2CpG2pQvPVW2Jztik5sAVC-twNYww7eC0QWvPamdQ&_nc_zt=23&_nc_ht=scontent.fmnl9-3.fna&_nc_gid=dFrSd26X5JhXn-vj-ZBneg&oh=00_AfaVMusjbr7EFXqqk-fTNQpMZd-T6_sUtOsVPnEPaXcEmA&oe=68D1754B",
    },
    {
      id: 3,
      name: "Men",
      img: "https://scontent.fmnl9-4.fna.fbcdn.net/v/t39.30808-6/543401331_1176155424530826_4793520605440947651_n.jpg?stp=c0.98.902.902a_dst-jpg_s206x206_tt6&_nc_cat=105&ccb=1-7&_nc_sid=50ad20&_nc_eui2=AeG9HEsv9s5jpG_m0epA8oQbGAFAvk4STK0YAUC-ThJMrUhnufENMeLNvq4xqRjJY-97mhmB6C586i0CgXvWCiV-&_nc_ohc=jUuzvgEZ_lMQ7kNvwHu3uBY&_nc_oc=Adnilp9nnfp_DeUm6czWdVLeZrgbZ3eUSOGedJ2jcq110ycNLz2gOai-5csSGnlPCJE&_nc_zt=23&_nc_ht=scontent.fmnl9-4.fna&_nc_gid=LHwSLW-rIpJ0t4zXUOfecQ&oh=00_AfbkVAapqUsnI8nmqAUw8DWQn54nu224Kf9ofAOur9CKgw&oe=68D17DA4",
    },
    {
      id: 4,
      name: "Women",
      img: "https://scontent.fmnl9-2.fna.fbcdn.net/v/t39.30808-6/548299154_1186796720133363_6167239768185786414_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeG3K2cB74kX44E_fFvtnVy2_tqwkMcDyDb-2rCQxwPINoUtvibodbv-XN6olXveziKCQRxiHqqrzJvqr4ozuvs4&_nc_ohc=5lCjxqR-njgQ7kNvwEtgBaE&_nc_oc=AdlhZxVdSuxNYaHTv9DYhA879baEmkVIFFzh5EJFDaldCInTcf_VxeMd8HKC7vTh7z8&_nc_zt=23&_nc_ht=scontent.fmnl9-2.fna&_nc_gid=u1K18BqJ9XW9jjrqwv6Okg&oh=00_AfapHZM5RitcabtEFwdYoO7UCrLztRNpycOSdtFhFcccZg&oe=68D1521A",
    },
  ];

  return (
    <section className="categories">
      <h2 className="categories-title">Shop by Category</h2>
      <div className="categories-grid">
        {categories.map((cat) => (
          <div key={cat.id} className="category-card">
            <img src={cat.img} alt={cat.name} className="category-image" />
            <h3 className="category-name">{cat.name}</h3>
          </div>
        ))}
      </div>
    </section>
  );
}
