import styles from "../styles/components/Profile.module.css";

export function Profile() {
  return (
    <div className={styles.profileContainer}>
      <img src="https://github.com/Gabriel-Utino.png" alt="gabriel utino" />
      <div>
        <strong>内野　ガブリエル</strong>
        <p>
          <img src="icons/level.svg" alt="Level" />
          レベル1
        </p>
      </div>
    </div>
  )
}
/*
 */