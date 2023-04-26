import React from "react";

import styles from "~/styles/loader.module.css";

function Loader() {
  return (
    <div className="relative flex h-[100px] w-full items-center justify-center">
      <div className={styles.cube}>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
}

export default Loader;
