import ShayariesCard from "./card";
import styles from "./page.module.css"

const storyData = [
    { id: 1, title: 'Hansome boy', content: 'While declaring a variable and using an if statement is a fine way to conditionally render a component, sometimes you might want to use a shorter syntax. There are a few ways to inline conditions in JSX, explained below.', likes: '5k', comments: '10'},
    { id: 2, title: 'Ugly girl', content: 'While declaring a variable and using an if statement is a fine way to conditionally render a component, sometimes you might want to use a shorter syntax. There are a few ways to inline conditions in JSX, explained below.', likes: '15k', comments: '20'},
  ];

export default function Shayaries() {
    return (
        <div className={styles.main}>
            {storyData.map((story) => (
                <ShayariesCard
                    key={story.id}
                    title={story.title}
                    content={story.content}
                    likes={story.likes}
                    comments={story.comments}
                />
            ))}
        </div>
    );
}