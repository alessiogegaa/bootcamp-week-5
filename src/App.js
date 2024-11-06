import React, { useRef, useState } from "react";
import Table from "./Components/Table/Table";
import './App.css';
import { useFetch } from "./Components/Hooks/useFetch";

const App = () => {
  const [language, setLanguage] = useState("javascript");
  const [sort, setSort] = useState("stars");
  const [order, setOrder] = useState("desc");
  const [date, setDate] = useState("2024-11-01"); 
  const [searchTerm, setSearchTerm] = useState("");
  const [page, setPage] = useState(1);
  
  const searchRef = useRef();
  const url = `https://api.github.com/search/repositories`;
  
  const perPage = 5;
  const query = `language:${language} created:>${date} ${searchTerm ? `${searchTerm} in:name` : ""}`; 

  const { data, error, isLoading } = useFetch(url, {
    q: query, 
    sort,
    order,
    per_page: perPage,
    page,
  });

  const handleLanguageChange = (event) => {
    setLanguage(event.target.value);
  };

  const handleSortChange = (event) => {
    setSort(event.target.value);
  };

  const handleOrderChange = (event) => {
    setOrder(event.target.value);
  };

  const handleDateChange = (event) => {
    setDate(event.target.value);
  };

  const handleSearchChange = () => {
    const searchValue = searchRef.current.value;
    setSearchTerm(searchValue);
  };

  const handleNextPage = () => {
    if (page < maxPages) {
      setPage((prevPage) => prevPage + 1);
    }
  };

  const handlePrevPage = () => {
    if (page > 1) {
      setPage((prevPage) => prevPage - 1);
    }
  };

  const handlePageResult = (newPage) => {
    setPage(newPage);
  };

  const maxPages = 200;

  return (
    <div className="App">
      <h1>Table</h1>

      <div className="filter-container">
        <input 
          type="text" 
          placeholder="Search by name" 
          ref={searchRef} 
        />
        <button onClick={handleSearchChange}>Search</button>

        <select name="language" onChange={handleLanguageChange} value={language}>
          <option value="javascript">JavaScript</option>
          <option value="java">Java</option>
          <option value="python">Python</option>
        </select>

        <select name="sort" onChange={handleSortChange} value={sort}>
          <option value="stars">Stars</option>
          <option value="id">ID</option>
        </select>

        <select name="order" onChange={handleOrderChange} value={order}>
          <option value="desc">Desc</option>
          <option value="asc">Asc</option>
        </select>

        <input type="date" value={date} onChange={handleDateChange} />
      </div>

      {isLoading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      {data && 
      <>
      <Table data={data.items} />

      <div className="pagination">
        <button onClick={handlePrevPage} disabled={page === 1}>&laquo; Prev</button>
        <button onClick={() => handlePageResult(1)}>1</button>
        <button onClick={() => handlePageResult(page !== 1 ? page : 2)}>{page !== 1 ? page : 2}</button>
        {maxPages > 2 && <button onClick={() => handlePageResult(maxPages)}>{maxPages}</button>}
        <button onClick={handleNextPage} disabled={page === maxPages}>Next &raquo;</button>

      </div>
      </>
}
    </div>
  );
};

export default App;
