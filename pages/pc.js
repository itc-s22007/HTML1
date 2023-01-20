import styles from '../styles/pc.module.css'

export default function Home () {
  return (
    <div className={styles.pc}>
      <div className={styles.haed}>
        <div className={styles.pc1}>
          <div className={styles.pc2} />
          <div className={styles.camera} />
        </div>
      </div>
      <div className={styles.body}>
        <div className={styles.body2}>
          <div className={styles.hollow} />
        </div>
      </div>
    </div>
  )
}
