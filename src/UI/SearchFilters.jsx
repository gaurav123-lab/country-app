import React from "react";

function SearchFilters({ Search, setSearch, Filter, setFilter , countries,
  setCountries,}) {
  const HandleInputChange = (e) => {
    setSearch(e.target.value);
  };
  function handleSelectChange(e) {
    setFilter(e.target.value);
  }

  const sortCountries = (value) => {
    const sortCountry = [...countries].sort((a, b) => {
      return value === "asc"
        ? a.name.common.localeCompare(b.name.common)
        : b.name.common.localeCompare(a.name.common);
    });
    setCountries(sortCountry);
  };
  return (
    <>
      <section className="section-searchFilter container">
        <input
          type="text"
          placeholder="search"
          value={Search}
          onChange={HandleInputChange}
        ></input>

      <div>
        <button onClick={() => sortCountries("asc")}>Asc</button>
      </div>

      <div>
        <button onClick={() => sortCountries("des")}>Desc</button>
      </div>
        <div>
          <select
            className="select-section"
            value={Filter}
            onChange={handleSelectChange}
          >
            <option value="all">All</option>
            <option value="Africa">Africa</option>
            <option value="Americas">Americas</option>
            <option value="Asia">Asia</option>
            <option value="Europe">Europe</option>
            <option value="Oceania">Oceania</option>
          </select>
        </div>
      </section>
    </>
  );
}

export default SearchFilters;
