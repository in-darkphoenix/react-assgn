import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const AllProducts = () => {
  const [product, setProduct] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const res = await fetch("http://localhost:3001/products");
    const data = await res.json();
    console.log(data);
    setProduct(data);
  };

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
            <th>More Details</th>
          </tr>
        </thead>

        <tbody>
          {product.map((elem, index) => {
            return (
              <tr key={index + 1}>
                <td>{elem.name}</td>
                <td>{elem.price}</td>
                <td>
                  <Link key={index + 1} to={`/products/${elem.id}`}>
                    Details
                  </Link>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default AllProducts;
