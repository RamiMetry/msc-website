import { Container, Col, Row } from "react-bootstrap";
import { useRouter } from "next/router";

import MainButton from "@/components/main-button";
import AppHead from "@/components/app-head";

import styles from "./404.module.scss";

const NotFound = () => {
  const router = useRouter();

  return (
    <>
      <AppHead title="404 | M.S.C." url="404" />

      <div
        className={styles.wrapper}
        style={{
          backgroundImage: `url(/images/444.jpg)`,
        }}
      >
        <div>
          <Container>
            <Row className={styles.heroContainer}>
              <Col>
                <p className={styles.error}>404</p>
                <p className={styles.notFound}>Page Not Found</p>

                <div className={styles.btnDiv}>
                  <MainButton
                    text="back to home"
                    onClick={() => {
                      router.push("/");
                    }}
                  />
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    </>
  );
};

export default NotFound;
