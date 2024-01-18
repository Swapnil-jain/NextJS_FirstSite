import styles from './footer.module.css';

const Footer = () => {
    return (
        <div className={styles.container}>
            <div className={styles.logo}>Kreo</div>
            <div className={styles.text}>
                Kreo creative thoughts agency &copy; 2024. All rights reserved.
            </div>
            
        </div>
    )
}

export default Footer;