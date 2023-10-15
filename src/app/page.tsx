
import styles from './page.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Blacklist.it</h1>
      <p className={styles.description}>
        A blacklist of IT companies, comming soon!
      </p>
      <form className={styles.search}>
        <input placeholder="Search for a company..." type="text" />
        <button type="submit">Search</button>
      </form>
    </div>
  )
}
