import styles from './page.module.css'

export default function Details() {
    const details = [
        { id: 1, name: 'Umakanta Maharana', description: 'I am a good boy | Story writer', dob: '12/11/23', nickname: 'suraj', phone: '9348003459', email: 'suraj@gmail.com', region: 'india', language: 'english', genre: 'Action, Comedy', gender: 'male' },
    ];
    return (
        <div className={styles.main}>
            <h2>User Information</h2>
            <div className={styles.container}>
                <div className={styles.data}>
                    <div>
                        <label htmlFor="name">Name:</label>
                        <input type="text" id="name" value={details[0].name} name="name" disabled />
                    </div>
                    <div>
                        <label htmlFor="dob">Date of Birth:</label>
                        <input type="date" id="dob" value={details[0].dob} name="dob" disabled />
                    </div>
                    <div>
                        <label htmlFor="nickname">Nickname:</label>
                        <input type="text" id="nickname" value={details[0].nickname} name="nickname" disabled />
                    </div>
                    <div>
                        <label htmlFor="email">Email:</label>
                        <input type="email" id="email" value={details[0].email} name="email" disabled />
                    </div>
                    <div>
                        <label htmlFor="phone">Phone Number:</label>
                        <input type="tel" id="phone" value={details[0].phone} name="phone" disabled />
                    </div>
                    </div>
                    <div className={styles.data}>
                        <div>
                            <label htmlFor="region">Region:</label>
                            <input type="text" id="region" value={details[0].region} name="region" disabled />
                        </div>
                        <div>
                            <label htmlFor="language">Language:</label>
                            <input type="text" id="language" value={details[0].language} name="language" disabled />
                        </div>
                        <div>
                            <label htmlFor="genre">Genre:</label>
                            <input type="text" id="genre" value={details[0].genre} name="genre" disabled />
                        </div>
                        <div>
                            <label htmlFor="genre">Gender:</label>
                            <input type="text" id="Gender" value={details[0].gender} name="gender" disabled />
                        </div>
                    </div>
                </div>
            <button className={styles.edit}>Save</button>
        </div>
    )
}