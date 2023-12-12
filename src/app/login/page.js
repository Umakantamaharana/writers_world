import styles from './page.module.css'
import Link from 'next/link';
import Navbar from '../navbar/page';

export default function Login() {
    return (
        <main className={styles.main}>
            <Navbar />
            <div className={styles.login_form}>
                <div>
                    <img src='/icons/account.svg' alt='acccount' />
                    <input type="text" name="username" autoComplete='true' placeholder='username' />
                </div>
                <div>
                    <img src='/icons/password.svg' alt='password' />
                    <input type="password" name="password" placeholder='password' />
                </div>
                <button className={styles.login_button} type="submit">Login</button>
            </div>
            <div className={styles.registration_link}>
                <p><Link key='register' href='/register'>New user ? Register here.</Link></p>
            </div>
        </main>
    )
}