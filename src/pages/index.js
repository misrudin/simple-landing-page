import styles from 'styles/Home.module.scss'
import {SEO} from "src/components";

const Home = () => {
    return (
        <>
            <SEO title="Landing Page"/>
            <div className={styles['container']}>
                <nav className={styles['nav']}>
                    <img src="https://d1fdloi71mui9q.cloudfront.net/1kKxcTKrQuijZdSMFpiP_V8kE54eA0DJQ39b5" alt="Image"/>
                </nav>
                <main className={styles['main']}>
                    <div className={styles['item_link']}>

                    </div>
                </main>

                <footer className={styles['footer']}>
                </footer>
            </div>
        </>
    )
}

export default Home