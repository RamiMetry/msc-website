import { Container, Col, Row } from "react-bootstrap";

import styles from "./hero.module.scss";

const Hero = ({ welcome, title, image_url }) => {
  return (
    <div
      className={styles.wrapper}
      style={{
        backgroundImage: `url(${image_url})`,
      }}
    >
      <div className={styles.gradient}>
        <Container>
          <Row className={styles.heroContainer}>
            <Col>
              <p className="section-title-small">{welcome}</p>
              <p className="section-title-big" style={{ fontSize: "48px" }}>
                {title}
              </p>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default Hero;
