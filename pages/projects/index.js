import styles from '../../styles/Home.module.css'

const Projects = () => {
  return (
    <div className={styles.container}>
      <main className={styles.main} style={{display: 'flex',flexDirection: 'column'}}>
        <h1 className={styles.title}>
          My Projects
        </h1>

        <div className={styles.grid}>
          <a 
            href="https://play.google.com/store/apps/details?id=com.lingoexpodev.mahjongcalculator" 
            className={styles.card}
            target="_blank"
          >
            <h2>Mahjong Score Tracker &rarr;</h2>
            <p>An Android app used to help user's calculate scores, track players, and directions in Mahjong</p>
          </a>

          <a
            href="https://the-shoppies-nominations.vercel.app/"
            className={styles.card}
            target="_blank"
          >
            <h2>Shopify FE project &rarr;</h2>
            <p>An internship project for nominating movies. (This may take a long time to load)</p>
          </a>

          <a 
            href="https://play.google.com/store/apps/details?id=com.khebrah.khebrah" 
            className={styles.card}
            target="_blank"
          >
            <h2>Khebrah App (Android) &rarr;</h2>
            <p>A language learning app individually developed in the Google Play store.</p>
          </a>

          <a
            href="https://github.com/Thisisme-Andrew/the-shoppies-nominations"
            className={styles.card}
            target="_blank"
          >
            <h2>Shopify FE Project Repo &rarr;</h2>
            <p>
              This is just the repo on github for the project that I made for the internship above.
            </p>
          </a>
        </div>
      </main>
    </div>
  )
}

export default Projects;