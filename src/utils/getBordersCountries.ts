export async function getBorders(country: string[]) {
  const newList = await Promise.all(country.map(async (border) => {
    const fetchData = await fetch(`https://restcountries.com/v3.1/alpha/${border}`);
    const borderCountryInfo = await fetchData.json();
    return {
      name: borderCountryInfo[0].translations.por.common,
      flag: borderCountryInfo[0].flags.png,
      official: borderCountryInfo[0].name.official,
    };
  }));

  console.log(newList);
  return newList;
}
