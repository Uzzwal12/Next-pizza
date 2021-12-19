import styles from "../styles/PizzaList.module.css";
import PizzaCard from "./PizzaCard";

function PizzaList() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Best Indiana Pizza</h1>
      <p className={styles.desc}>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laboriosam,
        maxime hic! Quidem saepe fugit corporis consectetur doloremque ex?
        Repellat, explicabo?
      </p>
      <div className={styles.wrapper}>
        <PizzaCard />
        <PizzaCard />
        <PizzaCard />
        <PizzaCard />
      </div>
    </div>
  );
}

export default PizzaList;
