import React from "react";
import StockContainer from "./StockContainer";
import PortfolioContainer from "./PortfolioContainer";
import SearchBar from "./SearchBar";

function MainContainer({
  stocks,
  portfolio,
  onStockClick,
  onPortfolioClick,
  sortBy,
  setSortBy,
  filterBy,
  setFilterBy,
}) {
  return (
    <div>
      <SearchBar
        sortBy={sortBy}
        onSortChange={setSortBy}
        filterBy={filterBy}
        onFilterChange={setFilterBy}
      />
      <div className="row">
        <div className="col-8">
          <StockContainer stocks={stocks} onStockClick={onStockClick} />
        </div>
        <div className="col-4">
          <PortfolioContainer
            portfolio={portfolio}
            onStockClick={onPortfolioClick}
          />
        </div>
      </div>
    </div>
  );
}

export default MainContainer;