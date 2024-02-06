import Image from "next/image";
import styles from "./contact.module.css";

const contactPage = () => {
    return (
        <div className={styles.container}>
            <div className={styles.imgContainer}>
                <Image src="/contact.png" alt="" fill className={styles.img} />
            </div>
            <div className={styles.formContainer}>
                <form action="" className={styles.form}>
                    <input type="text" placeholder="Full Name" />
                    <input type="email" placeholder="Email" />
                    <input type="number" placeholder="Mobile (Optional)" />
                    <textarea name="" id="" cols="30" rows="10" placeholder="Message us" />
                    <button className={styles.button}>Send</button>
                </form>
            </div>
        </div>
    )
}
export default contactPage;