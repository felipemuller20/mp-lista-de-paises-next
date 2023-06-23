import { getBorders } from '@/utils/getBordersCountries';
import CountryCard from '../country-card';
import styles from './border-countries.module.css';

type BorderCountriesProps = {
  countries: string[];
};

export default async function BorderCountries({ countries }: BorderCountriesProps) {
  const borders = await getBorders(countries);

  return (
    <div className={ styles.container }>
      {
        borders.map((border) => (
          <CountryCard
            officialName={ border.name }
            flag={ border.flag }
            name={ border.name }
            key={ border.name }
          />
        ))
      }
    </div>
  );
}
