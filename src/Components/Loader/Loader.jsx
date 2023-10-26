import styles from './Loader.module.css';

const Loader = () => {
  return (
    <div className={styles.loaderWrapper}>
      <p className={styles.loaderContent}>Loading...</p>
    </div>
  );
};

export default Loader;
