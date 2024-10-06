import styles from './loading.module.css';

export default function Loading() {
  return (
    <div className={styles.loadingPanel}>
      🌀 Loading ...
    </div>
  );
}