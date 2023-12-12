import UserCard from "./card";
import styles from "./page.module.css"

const followersData = [
    { id: 1, src: '/prof.jpeg', name: 'Umakanta Maharana', description: 'I am a good boy | Story writer', value: 'Remove' },
    { id: 2, src: '/prof.jpeg', name: 'Jane Doe', description: 'Lorem ipsum...', value: 'Follow Back' },
  ];

export default function Followers() {
    return (
        <div className={styles.main}>
            {followersData.map((follower) => (
                <UserCard
                    key={follower.id}
                    src={follower.src}
                    name={follower.name}
                    description={follower.description}
                    value={follower.value}
                />
            ))}
        </div>
    );
}