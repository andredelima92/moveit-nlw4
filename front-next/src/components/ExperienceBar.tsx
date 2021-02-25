import { useContext } from "react";
import { ChallangesContext } from "../contexts/ChallangesContext";
import styles from "../styles/components/ExperienceBar.module.css";

const ExperienceBar = () => {
  const { currentExperience, experienceToNextLevel } = useContext(
    ChallangesContext
  );

  const percentToNextLevel = Math.round(
    (currentExperience / experienceToNextLevel) * 100
  );

  return (
    <header className={styles.experienceBar}>
      <span>0 xp</span>
      <div>
        <div style={{ width: `${percentToNextLevel}%` }} />

        <span
          className={styles.currentExperience}
          style={{ left: `${percentToNextLevel}%` }}
        >
          {currentExperience} xp
        </span>
      </div>
      <span>{experienceToNextLevel} xp</span>
    </header>
  );
};

export default ExperienceBar;
