import styles from "./Wrapper.module.css";
import qrcode from "../assets/qrcode.png";
function Wrapper() {
  return (
    <article className={styles["c-wrapper"]}>
      <img
        className={styles["c-wrapper_qr-code"]}
        src={qrcode}
        alt="QR Code to Frontend Mentor website"
      />
      <h1 className={styles["c-wrapper_title"]}>
        Improve your front-end skills by building projects
      </h1>
      <p className={styles["c-wrapper_description"]}>
        Scan the QR code to visit Frontend Mentor and take your coding skills to
        the next level
      </p>
    </article>
  );
}

export { Wrapper };
