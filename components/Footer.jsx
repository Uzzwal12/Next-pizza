import Image from "next/image";
import styles from "../styles/Footer.module.css";

function Footer() {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <Image src="/images/bg.png" alt="" layout="fill" objectFit="cover" />
      </div>
      <div className={styles.item}>
        <div className={styles.card}>
          <h2 className={styles.moto}>
          OH YES, WE DID. THE INDIANA PIZZA. WELL BACKED SLICE OF PIZZA.
          </h2>
        </div>
        <div className={styles.card}>
          <h1 className={styles.title}>FIND OUR RESTAURANTS</h1>
          <p className={styles.text}>
            1654 Golf Road #304.
            <br /> Gurgaon, 85022
            <br /> 9828383809
          </p>
          <p className={styles.text}>
            BANGALORE #56.
            <br /> Bangalore, 560056
            <br /> 9828383808
          </p>
        </div>
        <div className={styles.card}>
          <div >
            <h1 className={styles.title}>WORKING HOURS</h1>
          </div>
          <p className={styles.text}>
            MONDAY UNTILL FRIDAY
            <br /> 9:00 - 22:00
          </p>
          <p className={styles.text}>
            SATURDAY - SUNDAY
            <br /> 12:00 - 24:00
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
