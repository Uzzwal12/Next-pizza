import styles from "../styles/PizzaList.module.css";
import PizzaCard from "./PizzaCard";

function PizzaList({ pizzaList }) {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Best Indiana Pizza</h1>
      <p className={styles.desc}>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laboriosam,
        maxime hic! Quidem saepe fugit corporis consectetur doloremque ex?
        Repellat, explicabo?
      </p>
      <div className={styles.wrapper}>
        {pizzaList.map((pizza) => (
          <PizzaCard key={pizza._id} pizza={pizza} />
        ))}
      </div>
    </div>
  );
}

export default PizzaList;
