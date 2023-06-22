import styles from './country-card.module.css';
import Image from 'next/image';

type CountryCardProps = {
  flag: string,
  name: string
}
export default function CountryCard({flag, name}: CountryCardProps) {
  return (
    <div className={styles.cardContainer}>
      <Image src={flag} alt={name} width={1000} height={1000} />
      <h2>{name}</h2>
    </div>
  )
}
