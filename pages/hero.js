import styles from '../styles/hero.module.css'
export default function Home () {
  return (
    <div className={styles.main}>
      <style jsx global>{`
        body {
          background-color: #009999;
          }
    `}</style>
      <h1>COMING SOON</h1>
      <p>NEW WEBSITE IS AVAILABLE
        <br />ON 20XX.01.01
      </p>
    </div>
  )
}
