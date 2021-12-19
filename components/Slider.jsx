import { useState } from "react";
import Image from "next/image";
import styles from "../styles/Slider.module.css";

function Slider() {
  const [index, setIndex] = useState(0);
  const images = [
    "/images/featured.png",
    "/images/featured2.jpg",
    "/images/featured3.jpg",
  ];


  const handleArrow = (direction) => {
    if(direction=='left'){
      setIndex(index!==0 ? index-1 : 2)
    }
    if(direction=='right'){
      setIndex(index!==2 ? index+1 : 0)
    }
  }

  return (
    <div className={styles.container}>
      <div className={styles.arrowContainer} style={{ left: 0 }} onClick={()=>handleArrow('left')}>
        <Image src="/images/arrowl.png" alt="" layout="fill" objectFit="cover"/>
      </div>
      <div className={styles.wrapper} style={{transform:`translateX(${-100*index}vw)`}}>
        {images.map((img, index) => (
          <div className={styles.imgContainer} key={index}>
            <Image src={img} alt="" layout="fill" objectFit="cover"/>
          </div>
        ))}
      </div>
      <div className={styles.arrowContainer} style={{ right: 0 }} onClick={()=>handleArrow('right')}>
        <Image src="/images/arrowr.png" alt="" layout="fill" objectFit="cover"/>
      </div>
    </div>
  );
}

export default Slider;
