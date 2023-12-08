import { useRouter } from "next/router";
import Link from "next/link";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import { Container, Navbar, Nav } from "react-bootstrap";

import { useWindowSize } from "react-use";

import MainButton from "../main-button";

import styles from "./navbar.module.scss";

const MainNavbar = () => {
  const { width } = useWindowSize();
  const router = useRouter();

  return (
    <Navbar
      expand="lg"
      sticky="top"
      collapseOnSelect
      className={styles.navbarCon}
    >
      <Container>
        <Link href="/">
          <Navbar.Brand className={styles.navbarBrand}>
            <Image
              width={65}
              height={65}
              className={styles.mainLogo}
              alt="icon"
              src="/images/msc-logo.svg"
            />
          </Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" color="white" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className={styles.navbarRoutes}>
            <Link href="/#aboutUs" className={styles.navbarLink}>
              <div>About Us</div>
            </Link>
            <Link href="/#services" className={styles.navbarLink}>
              <div>Services</div>
            </Link>
            <Link href="/#our-commitment" className={styles.navbarLink}>
              <div>Our Commitment</div>
            </Link>
            <Link href="/blogs" className={styles.navbarLink}>
              <div>Blog</div>
            </Link>
            {/* ///cms */}
            <Link
              href={`mailto:email@email.com?subject=hello`}
              className={styles.navbarLink}
            >
              <div>Contact us</div>
            </Link>
          </Nav>

          <Nav className={styles.rightLinks}>
            {/* ///cms */}
            <MainButton
              isPhone
              text="phone number"
              isSmall
              onClick={() => {
                router.push(`tel:phone number`);
              }}
            />
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default MainNavbar;
