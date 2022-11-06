import { useContext } from "react";
import { ChallengesContext } from "../contexts/ChallengesContext";
import styles from "../styles/components/ChallengeBox.module.css";

export function ChallengeBox() {
  const { activeChallenge } = useContext(ChallengesContext);

  return (
    <div className={styles.challengeBoxContainer}>
      { activeChallenge ? (
        <div className={styles.challengeActive}>
          <header>獲得経験値　{activeChallenge.amount}px</header>

          <main>
            <img src='icons/${activeChallenge.type}.png" alt="筋肉'/>
            <strong>新たな挑戦</strong>
            <p>{activeChallenge.description}</p>
          </main>

          <footer>
            <button 
              type="button"
              className={styles.challengeFailedButton}            >
              未達
            </button>
            <button
              type="button"
              className={styles.challengeSucceededButton}            >
              達成
            </button>
          </footer>
        </div>
      ) : (
        <div className={styles.challengeNotActive}>
          <strong>チャレンジ項目</strong>
          <p>
            <img src="icons/level-up.svg" alt="level UP" />
            チャレンジを達成してレベルを上げよう！！
          </p>
        </div>
      ) }
    </div>
  )
}