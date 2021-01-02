import styles from 'styles/Home.module.scss'
import {HeadComp} from "src/components";

const Home = () => {
    return (
        <>
            <HeadComp/>
            <div className={styles['container']}>
                <nav className={styles['nav']}>
                </nav>
                <main className={styles['main']}>
                </main>

                <footer className={styles['footer']}>
                </footer>
            </div>
        </>
    )
}

export default Home