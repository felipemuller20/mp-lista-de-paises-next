'use client';

import { useState } from 'react';
import { Country } from '@/types';
import CountryCard from '../country-card';
import styles from './countries-list.module.css';

type CountriesListProps = {
  countries: Country[];
};

export default function CountriesList({ countries }: CountriesListProps) {
  const [numCountries, setNumCountries] = useState(16);

  const handleShowMore = () => {
    setNumCountries(numCountries + 16);
  };

  return (
    <div className={ styles.container }>
      <main className={ styles.listContainer }>
        {countries.slice(0, numCountries).map((country) => (
          <CountryCard
            key={ country.name.common }
            flag={ country.flags.png }
            name={ country.translations.por.common }
          />
        ))}
      </main>
      <button onClick={ handleShowMore }>Mostrar mais</button>
    </div>
  );
}
