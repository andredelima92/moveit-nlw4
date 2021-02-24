import styles from "../styles/components/ChallangeBox.module.css";

const ChallangeBox: React.FC = () => {
  const hasActiveChallange = true;

  return (
    <div className={styles.challangeBoxContainer}>
      {hasActiveChallange ? (
        <div className={styles.challangeActive}>
          <header>Ganhe 400xp</header>
          <main>
            <img src="icons/body.svg" alt="" />
            <strong>Novo desafio</strong>
            <p>Levante e faça uma caminhada de 3 minutos</p>
          </main>

          <footer>
            <button type="button" className={styles.challangeFailedButton}>
              Falhei
            </button>
            <button type="button" className={styles.challangeSucceededButton}>
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
