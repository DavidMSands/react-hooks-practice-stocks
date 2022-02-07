import React from "react";
import Stock from "./Stock";

function StockContainer({stocks, myPortfolio}) {

 

  return (
    <div className="list-group">
      <h2>Stocks</h2>
      {stocks.map(stock => (
        <Stock 
        ticker={stock.ticker} 
        name={stock.name} 
        type={stock.type} 
        price={stock.price} 
        myPortfolio={myPortfolio}
        id={stock.id}
        action='add'
        key={stock.id}
        /> 
      ))}
    </div>
  );
}

export default StockContainer;
