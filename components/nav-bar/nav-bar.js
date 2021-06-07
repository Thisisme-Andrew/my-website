import styles from './nav-bar.module.css';
import Tile from './tile';
import Router from 'next/router';

const NavBar = () => {
  const homeTile = <Tile onClick={() => Router.push('/')}>About Me</Tile>
  const resumeTile = <Tile onClick={() => Router.push('/resume')}>Resume</Tile>
  const projectsTile = <Tile onClick={() => Router.push('/projects')}>Projects</Tile>

  return (
    <div className={styles.mainContainer}>
      <div className={styles.nameAndTitle}>
        <div className={styles.nameContainer}>
          <img src='/company-icon/shopify-icon.png' className={styles.companyIcon}/>
          <div className={styles.name}>Andy Tang</div>
        </div>
        <div className={styles.divider}>/</div>
        <div className={styles.title}>RETAIL SUPPORT</div>
      </div>
      <div className={styles.tiles}>{[homeTile, resumeTile, projectsTile]}</div>
    </div>
  );
};

export default NavBar;