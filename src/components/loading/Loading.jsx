import styles from "./loading.module.css";

const Loading = () => {
  return (
    <div className="bg-gray-950 fixed w-full z-[1200] right-0 top-0 bottom-0 flex justify-center items-center">
      <ul className={styles.loadingCnt}>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </ul>
    </div>
  );
};

export default Loading;
