import { useState, useEffect } from "react";
import ContinentList from "./ContinentList";
import createQuery from "./Query";

export default function App() {
  let [continents, setContinents] = useState<any>();
  let [countries, setCountries] = useState<any>();

  const getContinentsQuery = `
    query GetContinents {
      continents {
        name
      }
    }
  `;

  const getCountriesQuery = `
    query GetCountriesQuery{
      countries{
        name
        continent{
          name
        }
      }
    }
  `;

  function getContinentList() {
    debugger;
    createQuery(getContinentsQuery).then((result: any) => {
      setContinents(result.data.continents);
    });
  }

  //I can't know how to get only the countries of a continent because the docs are not clear on how to filter it
  function getCountries() {
    createQuery(getCountriesQuery).then((result: any) =>
      setCountries(result.data.countries)
    );
  }

  useEffect(() => {
    getCountries();
    getContinentList();
  }, [continents, countries]);

  return (
    <div className="App">
      <ContinentList continents={continents} countries={countries} />
    </div>
  );
}
