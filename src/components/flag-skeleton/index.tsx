import styles from './flag-skeleton.module.css';

export default function FlagSkeleton() {
  return (
    <div className={ styles.container }>
      <div className={ styles.flag } />
      <div className={ styles.name } />
    </div>
  );
}
