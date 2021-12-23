import React, { useEffect, useState } from 'react';
import '../../style.css';
import AdminPower from './AdminPower.jsx';

const ProductSlot = ({ product, userInfo }) => {
  const [productInfo, setProductInfo] = useState(product);
  const { name, description, cost, max_quantity, current_quantity } =
    productInfo;

  useEffect(() => {}, [productInfo]);
  const downloadJSON = (file) => {
    let json = JSON.stringify(file);

    //Convert JSON string to BLOB.
    json = [json];
    let blob1 = new Blob(json, { type: 'text/plain;charset=utf-8' });

    //Check the Browser.
    let isIE = false || !!document.documentMode;
    if (isIE) {
      window.navigator.msSaveBlob(blob1, 'Customers.txt');
    } else {
      let url = window.URL || window.webkitURL;
      let link = url.createObjectURL(blob1);
      let a = document.createElement('a');
      a.download = 'Customers.txt';
      a.href = link;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
    }
  };

  const purchaseHandler = () => {
    if (current_quantity > 0) {
      fetch('/api/purchaseProduct', {
        method: 'POST',
        body: JSON.stringify({
          name,
          current_quantity: current_quantity,
        }),
        headers: {
          'Content-Type': 'application/json',
        },
      })
        .then((response) => response.json())
        .then((updatedProduct) => {
          setProductInfo({
            ...productInfo,
            current_quantity: updatedProduct.current_quantity,
          });
          downloadJSON(updatedProduct);
        });
    }
  };

  return (
    <div style={productsDivStyle}>
      <div className="tooltip">
        <img
          className="productImage"
          src="https://i.imgur.com/W7PNoxa.png?2"
          alt="product placeholder image"
        />
        <span className="tooltipText">{description}</span>
      </div>
      <div style={nameStyle}>{name}</div>
      <div style={nameStyle}>cost: ${cost}</div>
      <button onClick={purchaseHandler}>purchase</button>
      {userInfo.admin && (
        <AdminPower productInfo={productInfo} setProductInfo={setProductInfo} />
      )}
    </div>
  );
};

export default ProductSlot;

const productsDivStyle = {
  border: '1px solid LIGHTSEAGREEN',
  width: '200px',
  display: 'flex',
  flexDirection: 'column',
  marginLeft: '2px',
  marginTop: '2px',
};

const nameStyle = {
  fontSize: '2em',
  textAlign: 'center',
  fontWeight: 'solid',
};
