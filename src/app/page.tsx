import CountriesList from '../components/countries-list';
import styles from './page.module.css';

export default async function Home() {
  const fetchData = await fetch('https://restcountries.com/v3.1/all');
  const countries = await fetchData.json();
  return (
    <div className={ styles.container }>
      <CountriesList countries={ countries } />
    </div>
  );
}
