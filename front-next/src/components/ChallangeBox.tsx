import { useContext } from "react";
import { ChallangesContext } from "../contexts/ChallangesContext";
import { CountdownContext } from "../contexts/CountdownContext";
import styles from "../styles/components/ChallangeBox.module.css";

const ChallangeBox: React.FC = () => {
  const { activeChallange, resetChallange, completeChallange } = useContext(
    ChallangesContext
  );

  const { resetCountdown } = useContext(CountdownContext);

  function handleChallangeSucceeded() {
    completeChallange();
    resetCountdown();
  }

  function handleChanllangeFail() {
    resetChallange();
    resetCountdown();
  }

  return (
    <div className={styles.challangeBoxContainer}>
      {activeChallange ? (
        <div className={styles.challangeActive}>
          <header>Ganhe {activeChallange.amount} xp</header>
          <main>
            <img src={`icons/${activeChallange.type}.svg`} alt="" />
            <strong>Novo desafio</strong>
            <p>{activeChallange.description}</p>
          </main>

          <footer>
            <button
              type="button"
              className={styles.challangeFailedButton}
              onClick={handleChanllangeFail}
            >
              Falhei
            </button>
            <button
              type="button"
              className={styles.challangeSucceededButton}
              onClick={handleChallangeSucceeded}
            >
              Completei
            </button>
          </footer>
        </div>
      ) : (
        <div className={styles.challangeNotActive}>
          <strong>Finalize um ciclo para receber um desafio</strong>
          <p>
            <img src="icons/level-up.svg" alt="Level up" />
            Avance de level completando desafios
          </p>
        </div>
      )}
    </div>
  );
};

export default ChallangeBox;
