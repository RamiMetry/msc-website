import React from "react";
import Image from "next/image";

import Loader from "../loader/loader";

import styles from "./button.module.scss";

const MainButton = ({
  text,
  onClick,
  disabled,
  disabledText,
  padding = "10px 20px",
  fontSize = "14px",
  minWidth = "130px",
  style2 = false,
  isSmall = false,
  isLoading = false,
  isPhone = false,
}) => {
  return (
    <>
      {text ? (
        <button
          className={styles.btn}
          onClick={onClick}
          disabled={disabled || isLoading}
          onMouseOver={(e) =>
            (e.target.style.backgroundColor = disabled
              ? "var(--disabled1)"
              : style2
              ? "var(--secondary-dark)"
              : "var(--orange)")
          }
          onMouseOut={(e) =>
            (e.target.style.backgroundColor = disabled
              ? "var(--disabled1)"
              : style2
              ? "var(--secondary)"
              : "var(--orange)")
          }
          style={{
            fontSize: fontSize,
            padding: isSmall ? "6px 15px " : padding,
            minWidth: minWidth,
            color: disabled
              ? "var(--disabled2)"
              : style2
              ? "var(--orange)"
              : "var(--purple)",
            backgroundColor: disabled
              ? "var(--disabled1)"
              : style2
              ? "var(--purple)"
              : "var(--orange)",
          }}
        >
          {isPhone && (
            <Image
              width={15}
              height={15}
              alt="image"
              src="/images/phone.svg"
              style={{ objectFit: "cover", marginRight: "5px" }}
            />
          )}
          {!isLoading && (disabled && disabledText ? disabledText : text)}
          {isLoading && <Loader />}
        </button>
      ) : (
        <></>
      )}
    </>
  );
};

export default MainButton;
