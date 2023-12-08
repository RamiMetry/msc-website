import { Container, Col, Row } from "react-bootstrap";

import styles from "./hero.module.scss";

const Hero = ({ welcome, title }) => {
  return (
    <div
      className={styles.wrapper}
      style={{
        backgroundImage: `url(/images/444.jpg)`,
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
              {/* <div className="section-text">
                text area text area text area text area text area text area text
                area text area text area text area text area text area text area
                text area text area text area text area text area text area text
                area
              </div> */}
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default Hero;
