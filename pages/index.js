import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <div className={styles.leftCard}>
          <img className={styles.profilePic} src='/profile-pic/profile-pic.JPG'></img>
          <div className={styles.cardNameContainer}>
            <div className={styles.cardFirstName}>Andy</div>
            <div className={styles.cardLastName}>Tang</div>
          </div>
          <div className={styles.cardDivider}/>
          <div className={styles.jobTitle}>
            <div className={styles.jobTitleSpacer}>S O F T W A R E</div>
            <div>D E V E L O P E R</div>
          </div>
        </div>
        <div className={styles.rightCard}>
          <div className={styles.personalDescription}>
            <h1 className={styles.rightHeader}>Hi There!</h1>
            <p className={styles.rightDescriptor}>A little bit about me</p>
            <p className={styles.rightDescription}>This is a page I had made to share a little bit about myself. I created this page with the use of React and Node.js that utilizes various languages such as JavaScript, HTML, JSX and CSS. I have been learning how to program for the past 2 years and would love to improve in the field of software development. Feel free to click on some links below for more information about me.</p>
          </div>
          <div className={styles.grid}>
            <a
              href="https://github.com/Thisisme-Andrew/themes-application"
              className={styles.card}
              target="_blank"
            >
              <h2>Website Repo &rarr;</h2>
              <p>A Github repo that I uploaded for this website.</p>
            </a>
            <a
              href="https://themes-application.herokuapp.com/resume"
              className={styles.card}
            >
              <h2>Resume &rarr;</h2>
              <p>
                This leads to the next page that displays my resume.
              </p>
            </a>
          </div>
        </div>
      </main>
    </div>
  )
}
