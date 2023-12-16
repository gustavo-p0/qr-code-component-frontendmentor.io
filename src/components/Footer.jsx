import styles from "./Footer.module.css";
function Footer() {
  return (
    <footer className={styles["c-footer"]}>
      <p>
        Challenge by{" "}
        <a
          href="https://www.frontendmentor.io/"
          rel="noreferrer noopener"
          target="_blank"
        >
          Frontend Mentor
        </a>
        . Coded by{" "}
        <a
          href="https://github.com/gustavo-p0"
          rel="noreferrer noopener"
          target="_blank"
        >
          Gustavo Costa
        </a>
        .
      </p>
    </footer>
  );
}

export { Footer };
