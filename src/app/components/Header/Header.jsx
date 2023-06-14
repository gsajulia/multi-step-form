import styles from "./styles.module.css";

export default function Header({ steps, changeActiveStep }) {
  return (
    <div className={styles.container}>
      <div className={styles.steps}>
        {steps.map(({ stepTitle, status, id }, index) => (
          <span key={index}>
            <span
              className={`${styles[status]} ${styles.id} ${
                status === "todo"
                  ? styles.numberStepToDo
                  : status === "active"
                  ? styles.numberStepActive
                  : styles.numberStepDone
              }`}
            >
              {status === "done" ? <span>&#x2713;</span> : id}
            </span>{" "}
            <span className={`${styles[status]} ${styles.title}`}>
              {stepTitle}
            </span>{" "}
            {index !== steps.length - 1 && "> "}
          </span>
        ))}
      </div>
      <div className={styles.divider}></div>
    </div>
  );
}
