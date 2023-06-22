import Image from 'next/image';
import Link from 'next/link';
import styles from './country-card.module.css';
import { toSlug } from '@/utils/toSlug';

type CountryCardProps = {
  flag: string,
  name: string
};
export default function CountryCard({ flag, name }: CountryCardProps) {
  return (
    <Link className={ styles.cardContainer } href={ `/${toSlug(name)}` }>
      <Image src={ flag } alt={ name } width={ 1000 } height={ 1000 } />
      <h2>{name}</h2>
    </Link>
  );
}
