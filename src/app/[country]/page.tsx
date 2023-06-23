import Link from 'next/link';
import Image from 'next/image';
import { BsArrowLeft } from 'react-icons/bs';
import styles from './country-page.module.css';
import Language from '@/components/language';
import { getBorders } from '@/utils/getBordersCountries';
import CountryCard from '@/components/country-card';

type CountryPageProps = {
  params: {
    country: string;
  }
};

export default async function CountryPage({ params }: CountryPageProps) {
  const fetchData = await fetch(`https://restcountries.com/v3.1/name/${params.country}`);
  const country = await fetchData.json();
  const borders = await getBorders(country[0].borders);

  if (!country) {
    <h1>País não encontrado</h1>;
  }

  return (
    <div className={ styles.countryPage }>
      <h1>{country[0].translations.por.common}</h1>
      <Link href="/">
        <BsArrowLeft />
        {' Voltar'}
      </Link>
      <main>
        <section>
          <p>
            <span className={ styles.title }>🏙️ Capital: </span>
            <span>{country[0].capital}</span>
          </p>
          <p>
            <span className={ styles.title }>👨‍👩‍👦‍👦 População: </span>
            <span>{country[0].population}</span>
          </p>
          <p>
            <span className={ styles.title }>🗺️ Continente: </span>
            <span>{country[0].region}</span>
          </p>
          <p>
            <span className={ styles.title }>🗣️ Línguas faladas: </span>
          </p>
          {
            Object.values<string>(country[0].languages).map((language) => (
              <Language key={ language } language={ language } />
            ))
          }
        </section>
        <Image
          src={ country[0].flags.png }
          alt={ country[0].translations.por.common }
          height={ 1000 }
          width={ 1000 }
        />
      </main>
      <section>
        <h2>Países que fazem fronteira</h2>
        {
          country[0].borders ? (
            <div className={ styles.borderContainer }>
              {
              borders.map((border) => (
                <CountryCard
                  officialName={ border.official }
                  flag={ border.flag }
                  name={ border.name }
                  key={ border.name }
                />
              ))
            }
            </div>
          ) : (
            `Não há países que fazem fronteira com ${country[0].translations.por.common}.`
          )
        }
      </section>
    </div>
  );
}
