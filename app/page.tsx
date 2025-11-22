import styles from "./page.module.scss";
import SignUpPage from "./signup/page";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <SignUpPage />
      </main>
    </div>
  );
}

