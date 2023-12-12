import UserCard from "./card";
import styles from "./page.module.css"

const followingsData = [
    { id: 1, src: '/prof.jpeg', name: 'Umakanta Maharana', description: 'I am a good boy | Story writer', value: 'Remove' },
    { id: 2, src: '/prof.jpeg', name: 'Ashutosh Sahoo', description: 'Glitch writer..', value: 'Follow Back' },
  ];

export default function Followings() {
    return (
        <div className={styles.main}>
            {followingsData.map((following) => (
                <UserCard
                    key={following.id}
                    src={following.src}
                    name={following.name}
                    description={following.description}
                    value={following.value}
                />
            ))}
        </div>
    );
}