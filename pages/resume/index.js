import styles from './index.module.css';

const Resume = () => {
  return (
    <div className={styles.container}>
      <iframe className={styles.resumeImage} src="https://docs.google.com/document/d/e/2PACX-1vSxqCD-SBhHXHngEd2GucuEkmu2zcXNqUaX9Ul-9s7Tp5oGrZL7VXi1bqe3jifGNDv5HCJ8v7ltu_So/pub?embedded=true"></iframe>
    </div>
  )
}

export default Resume;