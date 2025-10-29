import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import MainContainer from "./components/MainContainer";

function App() {
  const [stocks, setStocks] = useState([]);
  const [portfolio, setPortfolio] = useState([]);
  const [sortBy, setSortBy] = useState("none");
  const [filterBy, setFilterBy] = useState("All");

  // Fetch stocks on mount
  useEffect(() => {
    fetch("http://localhost:3001/stocks")
      .then((r) => r.json())
      .then(setStocks);
  }, []);

  // Buy stock
  const buyStock = (stock) => {
    if (!portfolio.find((s) => s.id === stock.id)) {
      setPortfolio([...portfolio, stock]);
    }
  };

  // Sell stock
  const sellStock = (stock) => {
    setPortfolio(portfolio.filter((s) => s.id !== stock.id));
  };

  // Sort & Filter logic
  const getDisplayedStocks = () => {
    let displayed = [...stocks];

    // Filter by type
    if (filterBy !== "All") {
      displayed = displayed.filter((stock) => stock.type === filterBy);
    }

    // Sort
    if (sortBy === "Alphabetically") {
      displayed.sort((a, b) => a.ticker.localeCompare(b.ticker));
    } else if (sortBy === "Price") {
      displayed.sort((a, b) => a.price - b.price);
    }

    return displayed;
  };

  return (
    <div>
      <Header />
      <MainContainer
        stocks={getDisplayedStocks()}
        portfolio={portfolio}
        onStockClick={buyStock}
        onPortfolioClick={sellStock}
        sortBy={sortBy}
        setSortBy={setSortBy}
        filterBy={filterBy}
        setFilterBy={setFilterBy}
      />
    </div>
  );
}

export default App;