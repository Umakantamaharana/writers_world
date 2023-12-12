import styles from './page.module.css'

export default function Navbar() {
    return (
        <div className={styles.main}>
            <div className={styles.logo}>
                <a href='/'><img src='/icons/home.svg' /></a>
            </div>
            {/* <div className={styles.pages}>
                <a href='/login'>Login</a>
                <a href='/contact'>Contact us</a>
            </div> */}
            <div className={styles.profile}>
                {/* <img src='/prof.jpeg' /> */}
                <a href='/contact'>Contact us</a>
            </div>
        </div>
    )
}