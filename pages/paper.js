import styles from '../styles/paper.module.css'
export default function Home () {
  return (
    <div className={styles.main}>
      <style jsx global>{`
        body {
          background-color: #ffff00;
          }
    `}</style>
      <p>PAPER</p>
    </div>
  )
}
