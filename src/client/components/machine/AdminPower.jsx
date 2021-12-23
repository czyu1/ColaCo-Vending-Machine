import React, { useEffect, useState } from 'react';

const AdminPower = ({ productInfo, setProductInfo }) => {
  const maxRestock = productInfo.max_quantity - productInfo.current_quantity;
  const [restock, setRestock] = useState(maxRestock);

  const submitHandler = (e) => {
    e.preventDefault();
    const updatedQuantity = Number(restock) + productInfo.current_quantity;
    if (productInfo.max_quantity > updatedQuantity) {
      fetch('/api/updateProduct', {
        method: 'POST',
        body: JSON.stringify({
          name: productInfo.name,
          current_quantity: updatedQuantity,
          cost: productInfo.cost,
        }),
        headers: {
          'Content-Type': 'application/json',
        },
      })
        .then((response) => response.json())
        .then((product) => setProductInfo(product));
    }
  };

  return (
    <div style={updateDivStyle}>
      <h2>Update Product</h2>
      <div>Current stock: {productInfo.current_quantity}</div>
      <form onSubmit={submitHandler}>
        <div>
          <div>Max stock allowed: {productInfo.max_quantity}</div>
          <label htmlFor="current_quantity">
            Restock:
            <input
              type="number"
              onChange={(e) => setRestock(e.target.value)}
              value={restock}
              autoComplete="none"
              min="0"
              max={productInfo.max_quantity}
            />
          </label>
        </div>

        <div>
          <label htmlFor="password">
            Price:
            <input
              type="number"
              onChange={(e) =>
                setProductInfo({ ...productInfo, cost: e.target.value })
              }
              autoComplete="none"
              value={productInfo.cost}
              min="0"
            />
          </label>
        </div>
        <input type="submit" value="update inventory" />
      </form>
    </div>
  );
};

export default AdminPower;

const updateDivStyle = {
  border: '1px solid LIGHTSEAGREEN',
  display: 'flex',
  flexDirection: 'column',
  marginLeft: '2px',
  marginTop: '2px',
};
