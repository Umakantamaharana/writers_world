import styles from './page.module.css'
import Link from 'next/link';

export default function Home() {
    return (
        <main className={styles.main}>

            {/* welcome message start */}

            <div className={styles.welcome}>
                <h2>Hey, Welcome to</h2>
                <h1>Writer's World</h1>
                <h5>Share your thoughts here</h5>
            </div>

            {/* welcome message end */}

            {/* let's go button start */}

            <div className={styles.button_container}>
                <Link key='login' href='/login'>
                    <button className={styles.continue_button}>Let's Continue</button>
                </Link>
            </div>

            {/* let's go button end */}

        </main>
    )
}