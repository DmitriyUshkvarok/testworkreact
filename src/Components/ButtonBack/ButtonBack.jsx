'use client';
import { useRouter } from 'next/navigation';
import { fredericka } from '@/src/app/fonts';
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
        <span className={fredericka.className}> Go Back</span>
      </button>
    </div>
  );
};

export default ButtonBack;
