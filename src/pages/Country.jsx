import React, { useEffect, useState, useTransition } from "react";

import { getCountryData } from "../Api/posrApi";

import CountryCard from "../Compotent/CountryCard";
import SkeletonCard from "../Compotent/SkeletonCard";
import SearchFilters from "../UI/SearchFilters";

function Country() {
  const [isPending, startTransition] = useTransition();
  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [Search, setSearch] = useState();
  const [Filter, setFilter] = useState("all");

  useEffect(() => {
    startTransition(async () => {
      const res = await getCountryData();
      setCountries(res.data);
      console.log(res.data);
      setLoading(false);
    });
  }, []);
  const searchCountry = (country) => {
    if (Search) {
      return country.name.common.toLowerCase().includes(Search.toLowerCase());
    }
    return country;
  };
   const filterRegion = (country) => {
    if (Filter === "all") return country;
    return country.region === Filter;
  };
     const filterCountries = countries.filter(
    (country) => searchCountry(country) && filterRegion(country)
  );

  return (
    <>
      <section className="country-section">
        <SearchFilters
          Search={Search}
          setSearch={setSearch}
          Filter={Filter}
          setFilter={setFilter}
              countries={countries}
        setCountries={setCountries}
        />
        <ul className="grid grid-four-cols">
          {loading
            ? Array.from({ length: 12 }).map((_, i) => <SkeletonCard key={i} />)
            : filterCountries.map((currCountry, index) => (
                <CountryCard country={currCountry} key={index} />
              ))}
        </ul>
      </section>
    </>
  );
}

export default Country;
