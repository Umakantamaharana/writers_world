import styles from './card.module.css';

export default function UserCard({ src, name, description, value }) {
    return (
        <main className={styles.main}>
            <div className={styles.card}>
                <div className={styles.profile_picture}>
                    <img src={src} alt='profile_picture' />
                </div>
                <div className={styles.info}>
                    <div className={styles.name}>{name}</div>
                    <div className={styles.desc}>{description}</div>
                </div>
                <button className={`${styles.button} ${value === 'Remove' ? styles.remove_button : ''}`}
                >{value}</button>
            </div>
        </main>
    )
}
