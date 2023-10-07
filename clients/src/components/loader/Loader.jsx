import styles from "./Loader.module.scss";
import { createPortal } from "react-dom";
import loaderImg from "../../assets/loader.gif";

const Loader = () => {
  return createPortal(
    <div className={styles.wrapper}>
      <div className={styles.loader}>
        <img src={loaderImg} title="loading icon" alt="loading" />
      </div>
    </div>,
    document.getElementById("loader")
  );
};

export const Spinner = () => {
  return (
    <div className="--center-all">
      <img src={loaderImg} alt="loading" width={40} />
    </div>
  );
};

export default Loader;
