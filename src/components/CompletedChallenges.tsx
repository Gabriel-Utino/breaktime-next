import styles from "../styles/components/CompletedChallenges.module.css";

export function CompletedChallenges() {
  return (
    <div className={styles.completedChallengesContainer}>
      <span>達成数</span>
      <span>5</span>
    </div>
  )
}