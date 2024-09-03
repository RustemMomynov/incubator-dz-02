import s from "./Loader.module.css";
import preloader from "./../../preloader/loading-green-loading.gif";

export const Loader = () => (
  <div className={s.loader}>
    <img src={preloader} alt="" width={150} height={150} />
  </div>
);
