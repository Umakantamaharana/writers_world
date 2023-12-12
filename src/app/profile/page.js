"use client"
import styles from './page.module.css'
import { useState } from 'react';

import Followers from './followers/page';
import Followings from './followings/page';
import Stories from './stories/page';
import Poems from './poems/page';
import Shayaries from './shayaries/page'
import Navbar from '../navbar/page';
import Blank from '../blank/page';
import Details from './details/page';

export default function Home() {
    const [selectedPage, setSelectedPage] = useState('');

    const handleClick = (page) => {
        setSelectedPage(page);
    };


    return (
        <main className={styles.main}>
            <Navbar />
            <div className={styles.profile}>
                <div>
                    <div className={styles.profile_picture}>
                        <img src='/prof.jpeg' alt='profile_picture' />
                    </div>
                    <div className={styles.stars}>
                        <img src='/star_filled.png' alt='star' />
                        <img src='/star_filled.png' alt='star' />
                        <img src='/star_filled.png' alt='star' />
                        <img src='/star_filled.png' alt='star' />
                        <img src='/star.png' alt='star' />
                    </div>
                </div>
                <div className={styles.info}>
                    <div className={styles.name}>
                        <h2>Umakanta Maharana</h2>
                    </div>
                    <div className='desc'>
                        <p>I'm a good boy | story writer</p>
                    </div>
                    {selectedPage === 'details' ? '' :
                        <div>
                            <button className={styles.view_more} onClick={() => handleClick('details')}>View More</button>
                        </div>
                    }
                </div>
            </div>
            <div className={styles.line}></div>
            {selectedPage === 'details' ? (<Details />) :
                <div className={styles.navs}>
                    <div className={styles.navs}>
                        <div
                            className={`${styles.nav} ${selectedPage === 'followers' ? styles.selected : ''}`}
                            onClick={() => handleClick('followers')}
                        >
                            Followers(2k)
                        </div>
                        <div
                            className={`${styles.nav} ${selectedPage === 'followings' ? styles.selected : ''}`}
                            onClick={() => handleClick('followings')}
                        >
                            Following(551)
                        </div>
                        <div
                            className={`${styles.nav} ${selectedPage === 'stories' ? styles.selected : ''}`}
                            onClick={() => handleClick('stories')}
                        >
                            Stories(5)
                        </div>
                        <div
                            className={`${styles.nav} ${selectedPage === 'poems' ? styles.selected : ''}`}
                            onClick={() => handleClick('poems')}
                        >
                            Poems(10)
                        </div>
                        <div
                            className={`${styles.nav} ${selectedPage === 'shayaries' ? styles.selected : ''}`}
                            onClick={() => handleClick('shayaries')}
                        >
                            Shayaris(6)
                        </div>
                    </div>
                </div>
            }
            {selectedPage === 'details' ?
                <div className={styles.back_button_container}><img className={styles.back_button} src='/icons/back.svg' alt='back' /></div>
                :
                <div className={styles.borderline}></div>
            }
            {selectedPage === '' ? (<Blank />) : ''}
            {selectedPage === 'followers' ? (<Followers />) : ''}
            {selectedPage === 'followings' ? (<Followings />) : ''}
            {selectedPage === 'stories' ? (<Stories />) : ''}
            {selectedPage === 'poems' ? (<Poems />) : ''}
            {selectedPage === 'shayaries' ? (<Shayaries />) : ''}
        </main>
    )
}