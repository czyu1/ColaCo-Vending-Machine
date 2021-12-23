import React, { useState, useEffect } from 'react';
import ProductSlot from './ProductSlot.jsx';

const VendingMachine = ({ userInfo, setUserInfo }) => {
  const [products, setProducts] = useState();

  useEffect(() => {
    fetch('/api/getProducts')
      .then((response) => response.json())
      .then((products) => setProducts(products));
  }, [products]);

  return (
    <div>
      <h1>ColaCo Vending Machine</h1>
      <div style={productDisplayStyle}>
        {products &&
          products.map((product) => {
            return (
              <ProductSlot
                key={product._id}
                product={product}
                userInfo={userInfo}
                setUserInfo={setUserInfo}
              />
            );
          })}
      </div>
    </div>
  );
};

export default VendingMachine;

const productDisplayStyle = {
  width: '100vw',
  display: 'flex',
  flexDirection: 'row',
  flexWrap: 'wrap',
};
