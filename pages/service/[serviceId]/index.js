import { Container, Col, Row } from "react-bootstrap";
import Image from "next/image";
import { useRouter } from "next/router";

import PageBanner from "@/sections/page-banner";
import AppHead from "@/components/app-head";
import DetailsBanner from "@/components/details-banner";
import useFetch from "@/hooks/useFetch";

import styles from "./service.module.scss";

const Service = () => {
  const router = useRouter();

  const { data: serviceData, loading } = useFetch(
    router.query.serviceId &&
      `api/services/?filters[id][$eq]=${router.query.serviceId}`
  );
  console.log(serviceData);
  return (
    <>
      <AppHead
        title="Service | M.S.C."
        description="Explore our service"
        url="service"
      />
      {serviceData && (
        <div className={styles.wrapper}>
          <Container>
            <Row>
              <div className={styles.detailsDiv}>
                <p className={styles.pageTitle}>
                  {serviceData[0]?.attributes.name}
                </p>
                <p style={{paddingLeft:"10%", paddingRight: "10%"}} className="section-text">
                  {serviceData[0]?.attributes.description}
                </p>
              </div>
            </Row>
            <Row>
              <DetailsBanner
                price={serviceData[0]?.attributes.cost_per_hour}
                phone={serviceData[0]?.attributes.phone_number}
              />
            </Row>
            <Row className={styles.serviceRow}>
              <Col lg={6}>
                <p className="section-title-big">{serviceData[0]?.attributes.explanation_title}</p>
                <p className="section-text">
                  text area text area text area text area text area text area
                  text area text area text area text area text area text area
                  text area text area text area text area
                </p>
                <div>
                  <p className="section-title-small">
                    overview of this service:
                  </p>

                  <p className="section-text">
                    text area text area text area text area text area text area
                    text area text area text area text area text area text area
                    text area text area text area text area
                  </p>
                </div>
                {[1, 2, 3].map((item, index) => (
                  <div style={{ display: "flex" }} key={index}>
                    <Image
                      width={15}
                      height={15}
                      alt="icon"
                      src="/images/arrow-right.svg"
                      style={{ marginTop: "6px", marginRight: "8px" }}
                    />

                    <div>
                      <p
                        className="section-title-small"
                        style={{ fontSize: "16px", marginBottom: "0" }}
                      >
                        small yello title
                      </p>
                      <p className="section-text">
                        text area text area text area text area text area text
                        area text area text area text area text area text area
                        text area text area text area text area text area
                      </p>
                    </div>
                  </div>
                ))}
              </Col>
              <Col lg={6}>
                <Image
                  width={400}
                  height={200}
                  alt="icon"
                  src="/images/222.jpg"
                  style={{ objectFit: "cover", width: "100%" }}
                />
              </Col>
            </Row>
          </Container>
        </div>
      )}
    </>
  );
};

export default Service;
