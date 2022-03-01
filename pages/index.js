import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <h1 className="title">{`Ed's Next Pokemon`}</h1>
      <h2>{`Go to one of the pages to view Pokemon!`}</h2>
    </div>
  );
}
