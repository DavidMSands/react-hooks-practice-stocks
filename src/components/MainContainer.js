import React, {useState, useEffect} from "react";
import StockContainer from "./StockContainer";
import PortfolioContainer from "./PortfolioContainer";
import SearchBar from "./SearchBar";

function MainContainer() {
const [stocks, setStocks] = useState([])
const [myStocks, setMyStocks] = useState([])
const [filteredStocks, setFilteredStocks] = useState([])
const [sort, setSort] = useState('')
const BASE_URL = 'http://localhost:3001/stocks'

useEffect(() => {
  fetch(BASE_URL)
  .then(res => res.json())
  .then(data => {
    setStocks(data)
    setFilteredStocks(data)
  })
},[])

// adds and deletes My Portfolio stocks
function myPortfolio(action, id) {
  if(action === 'add') {
    const addMyStocks = stocks.filter(stock => stock.id === id)
    const updatedStocks = [...myStocks, addMyStocks[0]]
    setMyStocks(updatedStocks)
  } else {
    const deleteMyStock = myStocks.filter(stock => stock.id !== id)
    setMyStocks(deleteMyStock)
  }
}

// filters stock by type
function handleFilteredStocks(value) {
  const updatedStocks = stocks.filter(stock => stock.type === value)
  setFilteredStocks(updatedStocks)
}

// sorts results
useEffect(() => {
  let sortedArray = []
  if(sort === 'Alphabetically') {
  function compare(a, b) {
    if(a.name < b.name){
    return -1
    }
    if(a.name > b.name) {
    return 1
    }
    return 0
  }
  sortedArray = [...filteredStocks].sort(compare)
} else {
  function compare(a, b) {
    if(a.price < b.price){
    return -1
    }
    if(a.price > b.price) {
    return 1
    }
    return 0
  }
  sortedArray = [...filteredStocks].sort(compare)
}
  setFilteredStocks(sortedArray)
}, [sort])

  return (
    <div id='main'>
      <SearchBar handleFilteredStocks={handleFilteredStocks} sort={sort} setSort={setSort} />
      <div className="row">
        <div className="col-8">
          <StockContainer stocks={filteredStocks} myPortfolio={myPortfolio} />
        </div>
        <div className="col-4">
          <PortfolioContainer myStocks={myStocks} myPortfolio={myPortfolio} />
        </div>
      </div>
    </div>
  );
}

export default MainContainer;
