import React from "react";
import Stock from "./Stock";

function PortfolioContainer({myStocks, myPortfolio}) {
  console.log(myStocks)
  return (
    <div className="list-group">
      <h2>My Portfolio</h2>
      {myStocks.map(stock => (
        <Stock 
        ticker={stock.ticker}
        action='delete' 
        id={stock.id}
        name={stock.name} 
        type={stock.type} 
        price={stock.price}
        key={stock.id}
        myPortfolio={myPortfolio}
        />
      ))}
    </div>
  );
}

export default PortfolioContainer;
