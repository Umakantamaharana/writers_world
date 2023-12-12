import styles from './page.module.css'
import Navbar from '../navbar/page'
import Link from 'next/link'
import { Suspense } from 'react'

export default function Register() {
    return (
        <main className={styles.main}>
            <Navbar />
            <div className={styles.login_form}>
                <div>
                    <img src='/icons/account.svg' alt='acccount' />
                    <input type="text" name="username" autoComplete='true' placeholder='username'/>
                </div>
                <div>
                    <img src='/icons/password.svg' alt='password' />
                    <input type="password" name="password" placeholder='password'/>
                </div>
                <div>
                    <img src='/icons/password.svg' alt='password' />
                    <input type="password" name="confirm-password" placeholder='confirm-password'/>
                </div>
                <button className={styles.login_button} type="submit">Register</button>
            </div>
            <div className={styles.login_link}>
                <p><Link key='login' href='/login'>Already a user! Login here</Link></p>
            </div>
        </main>
    )
}