import Navbar from '../navbar/page'
import styles from './page.module.css'

export default function Contact() {
    return (
        <div className={styles.main}>
            <Navbar />
            <div className={styles.container}>
            <div className={styles.left_text}>
                <span>TALK WITH</span><hr style={{width: '80px'}}/>
                <span>US</span>
            </div>
            <textarea className={styles.textarea} cols={50} rows={10} placeholder='Describe here' />
            <button className={styles.send_button} type="submit">Send</button>
            </div>
        </div>
    )
}