import React from 'react';

const ProductSlot = ({ product }) => {
  const { name, description, cost, max_quantity, current_quantity } = product;

  const purchaseHandler = () => {};
  
  return (
    <div style={productsDivStyle}>
      <img
        style={imgStyle}
        src="https://i.imgur.com/W7PNoxa.png?2"
        alt="product placeholder image"
      ></img>
      <div style={nameStyle}>{name}</div>
      <div style={nameStyle}>cost: ${cost}</div>
      <button onClick={purchaseHandler}>purchase</button>
    </div>
  );
};

export default ProductSlot;

const productsDivStyle = {
  border: '1px solid LIGHTSEAGREEN',
  height: '300px',
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

const imgStyle = {
  flexGrow: '1',
  display: 'block',
  marginLeft: 'auto',
  marginRight: 'auto',
  width: '50%',
};
