import { useEffect, useState } from 'react';
import {
  Alert,
  Button,
  Card,
  Col,
  Empty,
  Row,
  Skeleton,
  Space,
  Tag,
  Typography
} from 'antd';
import {
  AppstoreOutlined,
  ArrowRightOutlined,
  BankOutlined,
  BuildOutlined,
  CheckCircleOutlined,
  DeploymentUnitOutlined,
  FileTextOutlined,
  HomeOutlined,
  SafetyCertificateOutlined,
  TeamOutlined
} from '@ant-design/icons';

const services = [
  {
    key: 'security',
    title: 'Security Services',
    summary: 'Guards, industrial security, event security, and personal security support.',
    icon: <SafetyCertificateOutlined />,
    description:
      'Security services designed for offices, industrial sites, events, and business campuses that need disciplined on-ground protection.',
    useCases: ['Corporate guards', 'Industrial security', 'Event security', 'Personal security'],
    benefits: ['Visible protection', 'Improved site discipline', 'Reliable incident support']
  },
  {
    key: 'housekeeping',
    title: 'Housekeeping',
    summary: 'Office cleaning, industrial cleaning, deep cleaning, and support staff deployment.',
    icon: <HomeOutlined />,
    description:
      'Housekeeping offerings built for commercial spaces that need consistent hygiene, upkeep, and support staff coverage.',
    useCases: ['Office cleaning', 'Industrial cleaning', 'Deep cleaning', 'Support staff'],
    benefits: ['Cleaner environments', 'Better presentation', 'Consistent maintenance quality']
  },
  {
    key: 'facility',
    title: 'Facility Management',
    summary: 'End-to-end facility operations and operational support for business sites.',
    icon: <BuildOutlined />,
    description:
      'Facility management solutions that help organizations outsource daily operational support with clear accountability.',
    useCases: ['Site operations', 'Maintenance coordination', 'Manpower supervision', 'Multi-site support'],
    benefits: ['Operational efficiency', 'Centralized coordination', 'Scalable service delivery']
  },
  {
    key: 'b2b',
    title: 'B2B Solutions',
    summary: 'Enterprise manpower outsourcing, integrated services, and long-term contracts.',
    icon: <DeploymentUnitOutlined />,
    description:
      'B2B service solutions for companies looking for reliable outsourcing models, integrated support, and long-term engagement.',
    useCases: ['Manpower outsourcing', 'Integrated service contracts', 'Corporate support models', 'Long-term deployments'],
    benefits: ['Contract-ready structure', 'Business-focused execution', 'Flexible enterprise scaling']
  }
];

function ServicePage() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = window.setTimeout(() => {
      setIsLoading(false);
    }, 700);

    return () => window.clearTimeout(timer);
  }, []);

  return (
    <div className="service-page">
      <section id="service-home" className="service-page__hero">
        <div className="service-page__hero-overlay" />
        <div className="service-page__hero-content">
          <Tag className="hero-section__eyebrow">Services Page</Tag>
          <Typography.Title className="hero-section__title service-page__hero-title">
            Security, Housekeeping, Facility Management &{' '}
            <span className="hero-section__title-accent">B2B Solutions</span>
          </Typography.Title>
          <Typography.Paragraph className="service-page__hero-text">
            Explore all major service categories in one place, compare offerings quickly,
            and jump directly to the service details that matter to your business.
          </Typography.Paragraph>
          <Space wrap className="service-page__hero-actions">
            <Button
              type="primary"
              size="large"
              icon={<ArrowRightOutlined />}
              className="hero-section__button hero-section__button--primary"
              href="#service-overview"
            >
              View Services
            </Button>
            <Button
              size="large"
              icon={<AppstoreOutlined />}
              className="hero-section__button hero-section__button--secondary"
              href="#service-navigation"
            >
              Jump to Categories
            </Button>
          </Space>
        </div>
      </section>

      <section id="service-navigation" className="section-block service-nav-section">
        <Typography.Title level={2} className="theme-section-title">
          Quick Navigation
        </Typography.Title>
        <Typography.Paragraph className="theme-section-intro">
          Move between service categories without scrolling through the full page first.
        </Typography.Paragraph>
        <Space wrap className="service-nav-section__links">
          {services.map((service) => (
            <Button key={service.key} href={`#${service.key}`} className="service-nav-section__button">
              {service.title}
            </Button>
          ))}
        </Space>
      </section>

      <section id="service-overview" className="section-block">
        <Typography.Title level={2} className="theme-section-title">
          Services Overview
        </Typography.Title>
        <Typography.Paragraph className="theme-section-intro">
          All major service categories are grouped clearly so visitors can compare and choose quickly.
        </Typography.Paragraph>

        {isLoading ? (
          <Row gutter={[28, 28]}>
            {[1, 2, 3, 4].map((item) => (
              <Col xs={24} sm={12} lg={6} key={item}>
                <Card className="service-overview-card service-overview-card--loading">
                  <Skeleton active paragraph={{ rows: 4 }} />
                </Card>
              </Col>
            ))}
          </Row>
        ) : services.length > 0 ? (
          <Row gutter={[28, 28]}>
            {services.map((service) => (
              <Col xs={24} sm={12} lg={6} key={service.key}>
                <Card className="service-overview-card" hoverable>
                  <Button type="link" href={`#${service.key}`} className="service-overview-card__cta">
                    Know More
                  </Button>
                  <div className="service-overview-card__icon">{service.icon}</div>
                  <Typography.Title level={4} className="service-overview-card__title">
                    {service.title}
                  </Typography.Title>
                  <Typography.Paragraph className="service-overview-card__summary">
                    {service.summary}
                  </Typography.Paragraph>
                </Card>
              </Col>
            ))}
          </Row>
        ) : (
          <Card className="theme-card">
            <Empty description="No services configured right now." />
          </Card>
        )}
      </section>

      <section className="section-block">
        <Typography.Title level={2} className="theme-section-title">
          Service Details
        </Typography.Title>
        <Typography.Paragraph className="theme-section-intro">
          Each category includes a business-focused description, practical usage scenarios, benefits, and a visible action path.
        </Typography.Paragraph>

        {isLoading ? (
          <Card className="theme-card service-detail-card">
            <Skeleton active paragraph={{ rows: 8 }} />
          </Card>
        ) : services.length > 0 ? (
          <Space direction="vertical" size={28} className="service-detail-stack">
            {services.map((service) => (
              <Card key={service.key} id={service.key} className="service-detail-card">
                <Row gutter={[24, 24]} align="middle">
                  <Col xs={24} md={7} xl={6}>
                    <div className="service-detail-card__intro">
                      <div className="service-detail-card__header">
                        <div className="service-detail-card__icon">{service.icon}</div>
                        <Typography.Title level={3} className="service-detail-card__title">
                          {service.title}
                        </Typography.Title>
                      </div>
                      <Typography.Paragraph className="service-detail-card__description">
                        {service.description}
                      </Typography.Paragraph>
                      <Button
                        type="primary"
                        size="large"
                        href="#service-navigation"
                        icon={<FileTextOutlined />}
                        className="service-detail-card__button"
                      >
                        Get Quote
                      </Button>
                    </div>
                  </Col>
                  <Col xs={24} md={17} xl={18}>
                    <Row gutter={[20, 20]}>
                      <Col xs={24} lg={12}>
                        <Card className="service-detail-card__panel">
                          <div className="service-detail-card__panel-header">
                            <Typography.Text className="service-detail-card__panel-label">
                              Use Cases
                            </Typography.Text>
                          </div>
                          <Space direction="vertical" size={12} className="service-detail-card__list">
                            {service.useCases.map((item) => (
                              <div key={item} className="service-detail-card__list-item">
                                <CheckCircleOutlined />
                                <span>{item}</span>
                              </div>
                            ))}
                          </Space>
                        </Card>
                      </Col>
                      <Col xs={24} lg={12}>
                        <Card className="service-detail-card__panel">
                          <div className="service-detail-card__panel-header">
                            <Typography.Text className="service-detail-card__panel-label">
                              Business Benefits
                            </Typography.Text>
                          </div>
                          <Space direction="vertical" size={12} className="service-detail-card__list">
                            {service.benefits.map((item) => (
                              <div key={item} className="service-detail-card__list-item">
                                <TeamOutlined />
                                <span>{item}</span>
                              </div>
                            ))}
                          </Space>
                        </Card>
                      </Col>
                    </Row>
                  </Col>
                </Row>
              </Card>
            ))}
          </Space>
        ) : (
          <Alert type="warning" showIcon message="Service detail is unavailable at the moment." />
        )}
      </section>
    </div>
  );
}

export default ServicePage;
