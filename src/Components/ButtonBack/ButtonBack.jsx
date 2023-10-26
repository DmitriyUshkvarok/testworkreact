'use client';
import { useRouter } from 'next/navigation';
import styles from './ButtonBack.module.css';

const ButtonBack = () => {
  const router = useRouter();
  return (
    <div>
      <button
        className={styles.btnBack}
        type="button"
        aria-label="go back"
        onClick={router.back}
      >
        Go Back
      </button>
    </div>
  );
};

export default ButtonBack;
