import { Container, Col, Row } from "react-bootstrap";
import Image from "next/image";
import { useRouter } from "next/router";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

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
                <p
                  style={{ paddingLeft: "10%", paddingRight: "10%" }}
                  className="section-text"
                >
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
              <ReactMarkdown
                  remarkPlugins={[remarkGfm]}
                  className="sectionSubtitle"
                >
                  {serviceData[0]?.attributes.service_overview}
                </ReactMarkdown>
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
