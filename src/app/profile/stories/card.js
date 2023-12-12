import styles from './card.module.css';

export default function StoriesCard({ title, content, likes, comments }) {
    return (
        <div className={styles.main}>
            <div className={styles.title}>
                <h3>{title}</h3>
            </div>

            <div className={styles.content}>
                <p>{content}</p>
            </div>
            <div className={styles.popularity}>
                <div className={styles.like}>
                    <img src='/icons/like.svg' alt='like' />
                    <span>{likes}</span>
                </div>
                <div className={styles.comments}>
                    <img src='/icons/comment.svg' alt='comments' />
                    <span>{comments}</span>
                </div>
                <div className={styles.share}>
                    <img src='/icons/share.svg' alt='comments' />
                    <span>Share</span>
                </div>
            </div>
        </div>
    )
}