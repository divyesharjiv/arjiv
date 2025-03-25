import styles from "./Button.module.scss";

const Button = ({ text, variant = "outline" }) => {
  return (
    <button className={`${styles.btn} ${variant === "filled" ? styles.filled : ""}`}>
      <span>{text}</span>
    </button>
  );
};

export default Button;
