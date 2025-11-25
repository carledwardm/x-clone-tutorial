import styles from "./page.module.scss";
import Link from 'next/link';

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <h1>Home Page</h1>
        <Link href='/signup'>Sign Up</Link>
        <Link href='/login'>Log In</Link>
      </main>
    </div>
  );
}


