import Links from "./links/Links";
import styles from "./navbar.module.css"; 
import Link from "next/link";

const Navbar = () => {
    //Notice we wrote {styles.container} as this dynamically generates a new className. This works with the file we named navbar.module.css. Now we can use .container there in css file but in reality, it will be like blabla-container while rendering. Basically helps us with unique naming of className. Same goes for {styles.logo}
    return (
        <div className={styles.container}>
            <Link href="/" className={styles.logo}>Kreo</Link>
            <div>
                <Links/>
            </div>
        </div>
    );
};

export default Navbar;
