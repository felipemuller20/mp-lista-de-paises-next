import CountryCard from './components/nav-bar/country-card';
import styles from './page.module.css'

export default async function Home() {
  const fetchData = await fetch('https://restcountries.com/v3.1/all');
  const countries = await fetchData.json();

  return (
    <div>
      {
        countries.map((country) => (
          <CountryCard
            key={country.name.common}
            flag={country.flags.png}
            name={country.translations.por.common}
          />
        ))
      }
    </div>
  )
}
