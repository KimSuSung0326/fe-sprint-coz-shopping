import React, { useEffect, useState } from "react";

const ProductList = () => {
    const [data, setData] = useState([]);
  
    useEffect(() => {
      fetch("http://cozshopping.codestates-seb.link/api/v1/products?count=4")
        .then((response) => response.json())
        .then((data) => {
          setData(data);
        });
        console.log(data)
    }, []);
    
    return (
      <div >
        <h1 className="main">여기는 ProductList 입니다.</h1>
    
      </div>
    );
  };
  

export default ProductList