import styles from './index.module.css';

const resumeLink = "https://docs.google.com/document/d/e/2PACX-1vSSWqZqiuy_YPYnS7rSsX75sIjP-D-qV1DSrxNqxQhgD5GOI2dlWi2_eho6NQ51obduZRN03a_boeXI/pub?embedded=true";

const Resume = () => {
  return (
    <div className={styles.container}>
      <iframe frameBorder="0" className={styles.resumeImage} src={resumeLink}></iframe>
    </div>
  )
}

export default Resume;