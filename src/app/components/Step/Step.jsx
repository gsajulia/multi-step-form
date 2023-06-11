import styles from "./styles.module.css";

export default function Step({ fields, onChangeField }) {
  return fields.map((field) => (
    <div key={field.name}>
      <label>{field.label}</label>
      <input
        key={field.name}
        id={field.name}
        type={field.type}
        name={field.name}
        placeholder={field.placeholder}
        value={field.value}
        onChange={(e) => onChangeField(e, field.name)}
      />
    </div>
  ));
}
