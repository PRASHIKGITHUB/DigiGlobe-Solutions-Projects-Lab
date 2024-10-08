import React from "react";
import Img1 from "../../assets/women/women-ethinic.jpg";
import Img2 from "../../assets/women/Men-ethenic.jpg";
import Img3 from "../../assets/women/women-formal.jpg";
import Img4 from "../../assets/women/men2.jpg";
import Img5 from "../../assets/women/women-gown3.jpg";
import { FaStar } from "react-icons/fa6";

const ProductsData = [
  {
    id: 1,
    img: Img1,
    title: "Women Ethnic",
    rating: 5.0,
    color: "Yellow",
    aosDelay: "0",
  },
  {
    id: 2,
    img: Img2,
    title: "Men Ethnic",
    rating: 4.5,
    color: "black",
    aosDelay: "200",
  },
  {
    id: 3,
    img: Img3,
    title: "Women Formal",
    rating: 4.7,
    color: "black",
    aosDelay: "400",
  },
  {
    id: 4,
    img: Img4,
    title: "Casual Wear",
    rating: 4.4,
    color: "brown",
    aosDelay: "600",
  },
  {
    id: 5,
    img: Img5,
    title: "Women Gown",
    rating: 4.5,
    color: "White",
    aosDelay: "800",
  },
];

const Products = () => {
  return (
    <div className="mt-14 mb-12">
      <div className="container">
        {/* Header section */}
        <div className="text-center mb-10 max-w-[600px] mx-auto">
          <p data-aos="fade-up" className="text-sm text-primary">
            Top Selling Products for you
          </p>
          <h1 data-aos="fade-up" className="text-3xl font-bold">
            Products
          </h1>
          <p data-aos="fade-up" className="text-xs text-gray-400">
          Explore our most-loved products that customers can’t get enough of! From trending fashion pieces to must-have gadgets, our top-sellers are guaranteed to impress.
          </p>
        </div>
        {/* Body section */}
        <div>
          <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 place-items-center gap-5">
            {/* card section */}
            {ProductsData.map((data) => (
              <div
                data-aos="fade-up"
                data-aos-delay={data.aosDelay}
                key={data.id}
                className="space-y-3"
              >
                <img
                  src={data.img}
                  alt=""
                  className="h-[220px] w-[150px] object-cover rounded-md"
                />
                <div>
                  <h3 className="font-semibold">{data.title}</h3>
                  <p className="text-sm text-gray-600">{data.color}</p>
                  <div className="flex items-center gap-1">
                    <FaStar className="text-yellow-400" />
                    <span>{data.rating}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          {/* view all button */}
          <div className="flex justify-center">
            <button className="text-center mt-10 cursor-pointer bg-primary text-white py-1 px-5 rounded-md">
              View All Button
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
