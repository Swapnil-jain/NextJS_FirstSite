import styles from "./singlePost.module.css";
import Image
    from "next/image";
import Link from "next/link";

const singlePostPage = () => {
    return (
        <div className={styles.container}>
            <div className={styles.imgContainer}>
                <Image className={styles.img} src="/stockblog.jpg" alt="image" fill />
            </div>
            <div className={styles.textContainer}>
                <h1 className={styles.title}>Title</h1>
                <div className={styles.detail}>
                    <Image className={styles.avatar} src="/stockblog.jpg" alt="image" height={50} width={50} />
                    <div className={styles.detailText}>
                        <span className={styles.detailTitle}>Author</span>
                        <span className={styles.detailValue}>Terry Jefferson</span>
                    </div>
                    <div className={styles.detailText}>
                        <span className={styles.detailTitle}>Published</span>
                        <span className={styles.detailValue}>11-09-2023</span>
                    </div> 
                </div>
                <div className={styles.content}>
                     Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam incidunt alias amet adipisci, aspernatur placeat eligendi nisi distinctio ab qui accusantium at dolorem, commodi, quam beatae. Et quidem mollitia placeat?
                </div>

            </div>
        </div>
    )
}
export default singlePostPage;