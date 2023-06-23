import Image from 'next/image';
import Link from 'next/link';
import styles from './country-card.module.css';

type CountryCardProps = {
  flag: string,
  name: string,
  officialName: string,
};
export default function CountryCard({ flag, name, officialName }: CountryCardProps) {
  return (
    <Link className={ styles.cardContainer } href={ `/${officialName}` }>
      <Image src={ flag } alt={ name } width={ 1000 } height={ 1000 } />
      <h2>{name}</h2>
    </Link>
  );
}
