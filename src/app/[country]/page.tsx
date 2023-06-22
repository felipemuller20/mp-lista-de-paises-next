import styles from './country-page.module.css';

type CountryPageProps = {
  params: {
    country: string;
  }
};

export default function CountryPage({ params }: CountryPageProps) {
  console.log(params);
  return (
    <h1>Country page</h1>
  );
}
