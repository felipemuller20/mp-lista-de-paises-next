import FlagSkeleton from '@/components/flag-skeleton';
import styles from './page.module.css';

export default function Loading() {
  return (
    <div className={ styles.skeletonContainer }>
      <FlagSkeleton />
      <FlagSkeleton />
      <FlagSkeleton />
      <FlagSkeleton />
      <FlagSkeleton />
      <FlagSkeleton />
      <FlagSkeleton />
      <FlagSkeleton />
    </div>
  );
}
