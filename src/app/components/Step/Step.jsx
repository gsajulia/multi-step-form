import styles from "./styles.module.css";

export default function Step({ fields, onChangeField }) {
  return fields.map((field) => (
    <div key={field.name} className={styles.container}>
      <label className={styles.label}>{field.label}</label>
      {field.typeElement === "textarea" ? (
        <textarea
          style={{ resize: "none", overflow: "visible", height: "auto" }}
          className={styles.input}
          key={field.name}
          id={field.name}
          type={field.type}
          name={field.name}
          placeholder={field.placeholder}
          value={field.value}
          onChange={(e) => onChangeField(e, field.name)}
          rows={5}
          cols={5}
        />
      ) : (
        <input
          className={styles.input}
          key={field.name}
          id={field.name}
          name={field.name}
          placeholder={field.placeholder}
          value={field.value}
          onChange={(e) => onChangeField(e, field.name)}
        />
      )}
    </div>
  ));
}
