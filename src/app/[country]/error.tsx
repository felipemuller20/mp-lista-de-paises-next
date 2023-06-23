'use client';

import Link from 'next/link';
import styles from './country-page.module.css';

export default function Error() {
  return (
    <h1>
      Não há país para ser exibido.
      {' '}
      <Link href="/" className={ styles.errorLink }>Voltar à tela inicial</Link>
    </h1>
  );
}
