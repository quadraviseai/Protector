import { useEffect, useState } from 'react';
import { Button, Card, Col, Empty, Row, Skeleton, Typography } from 'antd';
import homeWhyImage from '../assect/img/home_why.png';

function ServiceSection({ services }) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = window.setTimeout(() => {
      setIsLoading(false);
    }, 800);

    return () => window.clearTimeout(timer);
  }, []);

  return (
    <section id="services" className="section-block services-section">
      <Typography.Title level={2} className="services-section__title">
        Services
      </Typography.Title>

      {isLoading ? (
        <Row gutter={[24, 24]}>
          {[1, 2, 3, 4].map((item) => (
            <Col xs={24} sm={12} lg={6} key={item}>
              <Card className="service-card">
                <Skeleton active paragraph={{ rows: 3 }} />
              </Card>
            </Col>
          ))}
        </Row>
      ) : services.length > 0 ? (
        <Row gutter={[28, 28]} justify="center">
          {services.map((service) => (
            <Col xs={24} sm={12} lg={6} key={service.title}>
              <Card
                className="service-card service-card--visual"
                cover={
                  <div
                    className="service-card__image"
                    style={{ backgroundImage: `url(${homeWhyImage})` }}
                  >
                    <Button size="small" href="/services" className="service-card__action">
                      Know More
                    </Button>
                    <div className="service-card__label">{service.title}</div>
                  </div>
                }
              >
                <Typography.Paragraph className="service-card__description">
                  {service.description}
                </Typography.Paragraph>
                <Button type="link" href="/services" className="service-card__link">
                  View Details
                </Button>
              </Card>
            </Col>
          ))}
        </Row>
      ) : (
        <Card>
          <Empty
            description="Service details are being updated. Contact us directly for the latest offerings."
          />
        </Card>
      )}
    </section>
  );
}

export default ServiceSection;
