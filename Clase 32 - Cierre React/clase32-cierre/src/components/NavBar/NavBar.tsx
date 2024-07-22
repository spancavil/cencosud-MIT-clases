import { Link } from 'react-router-dom'
import styles from './nav-styles.module.scss'

const NavBar = () => {
  return (
    <ul className={styles.ul}>
        <li className={styles.li}><Link to="/">Home</Link></li>
        <li className={styles.li}><Link to="/news">News</Link></li>
        <li className={styles.li}><Link to="/news/1">News id:1</Link></li>
        <li className={styles.li}><Link to="/list">List characters</Link></li>
        <li className={styles.li}><Link to="/counter">Counter</Link></li>
        <li className={styles.li}><Link to="/contact">Contact</Link></li>
        <li className={styles.li}><Link to="/about">About</Link></li>
        <li className={styles.li}><Link to="/form">Form</Link></li>
    </ul>

  )
}

export default NavBar