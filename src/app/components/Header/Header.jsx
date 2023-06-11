import styles from "./styles.module.css";

export default function Header({ steps, changeActiveStep }) {
  return (
    <div>
      {steps.map(({ stepTitle, status }, index) => (
        <span key={index}>
          <span className={`${styles[status]}`}>{stepTitle}</span>{" "}
          {index !== steps.length - 1 && "> "}
        </span>
      ))}
    </div>
  );
}
