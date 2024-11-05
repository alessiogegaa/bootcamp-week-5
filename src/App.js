import React, { useState } from "react";
import Table from "./Components/Table/Table";
import './App.css';
import { useFetch } from "./Components/Hooks/useFetch";

const App = () => {
  const [language, setLanguage] = useState("javascript");
  const [sort, setSort] = useState("stars");
  const [order, setOrder] = useState("desc");
  const [date, setDate] = useState("2024-11-01"); 

  const url = `https://api.github.com/search/repositories`;

  const query = `language:${language} created:>${date}`; 

  const { data, error, isLoading } = useFetch(url, {
    q: query, 
    sort,
    order,
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

  return (
    <div className="App">
      <h1>Table</h1>

      <div className="filter-container">
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
      {data && <Table data={data.items} />}
    </div>
  );
};

export default App;
