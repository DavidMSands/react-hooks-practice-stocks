import React from "react";

function Stock({name, ticker, type, price, myPortfolio, id, action }) {
  return (
    <div onClick={() => myPortfolio(action, id)} >
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <p className="card-text">{`${ticker}: ${price}`}</p>
        </div>
      </div>
    </div>
  );
}
export default Stock;
