import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ProductDetails = () => {
  const { id } = useParams();

  const [detail, setDetail] = useState({
    id: 0,
    name: "",
    price: 0,
    description: "",
  });

  useEffect(() => {
    getDetails();
  }, []);

  const getDetails = async () => {
    const res = await fetch(`http://localhost:3001/products/${id}`);
    const data = await res.json();
    console.log(data);
    setDetail(data);
  };

  return (
    <div>
      <h1>Product Details</h1>
      <h2>ID: {detail.id}</h2>
      <h2>{detail.name}</h2>
      <h3>{detail.description}</h3>
    </div>
  );
};

export default ProductDetails;
