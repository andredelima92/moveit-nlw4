import styles from "../styles/components/CompletedChallanges.module.css";

const CompletedChallanges: React.FC = () => {
  return (
    <div className={styles.completedChallangesContainer}>
      <span>Desafios completos</span>
      <span>5</span>
    </div>
  );
};

export default CompletedChallanges;
