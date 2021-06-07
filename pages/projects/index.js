import Head from 'next/head'
import Image from 'next/image'
import styles from '../../styles/Home.module.css'

const Projects = () => {
  return (
    <div className={styles.container}>
      <main className={styles.main} style={{display: 'flex',flexDirection: 'column'}}>
        <h1 className={styles.title}>
          My Projects
        </h1>

        <div className={styles.grid}>
          <a href="https://apps.apple.com/mn/app/khebrah/id1559289752" className={styles.card}>
            <h2>Khebrah iOS App &rarr;</h2>
            <p>A language learning app individually developed in the Apple App store.</p>
          </a>

          <a
            href="https://the-shoppies-nominations.herokuapp.com/"
            className={styles.card}
          >
            <h2>Shopify FE project &rarr;</h2>
            <p>An internship project for nominating movies. (This takes a long time to load)</p>
          </a>

          <a href="https://play.google.com/store/apps/details?id=com.khebrah.khebrah" className={styles.card}>
            <h2>Khebrah Android App &rarr;</h2>
            <p>It's the same app here but on the Google Play store.</p>
          </a>

          <a
            href="https://github.com/Thisisme-Andrew/the-shoppies-nominations"
            className={styles.card}
          >
            <h2>Shopify FE Project Repo &rarr;</h2>
            <p>
              This is just the repo on github for the project that I made above.
            </p>
          </a>
        </div>
      </main>
    </div>
  )
}

export default Projects;