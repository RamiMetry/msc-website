import React from "react";
import { useRouter } from "next/router";
import Image from "next/image";

import styles from "./mobile.module.scss";

const MobileLink = ({ mobile }) => {
  const router = useRouter();

  return (
    <div className={styles.wrapper}>
      <div className={styles.gradient}>
        <p className={styles.title}>Always Available & Reliable</p>
        <div className={styles.mobileDiv}>
          <div className={styles.imageDiv}>
            <Image
              width={25}
              height={25}
              alt="image"
              src="/images/phone.svg"
              style={{ objectFit: "cover" }}
            />
          </div>
          <p
            className={styles.phone}
            onClick={() => {
              router.push(`tel:phone number`);
            }}
          >
            {mobile}
          </p>
        </div>
      </div>
    </div>
  );
};

export default MobileLink;
