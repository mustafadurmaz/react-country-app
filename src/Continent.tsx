interface ContinentPageInterface {
    name: string;
    countries: any;
  }
  
  export default function ContinentPage({ name, countries }: any) {
    console.log(countries);
  
    function filteredCountries(): any {
      return countries?.filter((item: any) => item.continent.name === name);
    }
  
    return (
      <>
        <h1>{name}</h1>
        <ul>
          {filteredCountries()?.map((item: any) => (
            <li>{item.name}</li>
          ))}
        </ul>
      </>
    );
  }
  