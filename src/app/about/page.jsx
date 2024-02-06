import Image from "next/image";
import styles from "./about.module.css";
const AboutPage = () => {
    return (
        <div className={styles.container}>
            <div className={styles.textContainer}>
                <h2 className={styles.subtitle}>About Agency</h2>
                <h1 className={styles.title}>We create digital ideas that are bigger, bolder, braver and better. </h1>
                <p className={styles.desc}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita architecto ducimus praesentium amet at dolor exercitationem iste inventore reprehenderit quam tenetur, quaerat adipisci libero molestiae porro? Rem cumque dolorum nesciunt!
                </p>
                <div className={styles.boxes}>
                    <div className={styles.box}>
                        <h1>10K+</h1>
                        <p>Years of experience</p>
                    </div>
                    <div className={styles.box}>
                        <h1>10K+</h1>
                        <p>Years of experience</p>
                    </div>
                    <div className={styles.box}>
                        <h1>10K+</h1>
                        <p>Years of experience</p>
                    </div>
                </div>
            </div>
            <div className={styles.imgContainer}>
                <Image src="/about.png" alt="" fill className={styles.img} />
            </div>
        </div>
    );
};
export default AboutPage;