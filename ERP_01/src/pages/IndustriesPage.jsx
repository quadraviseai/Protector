import { useEffect, useState } from 'react';
import { Alert, Button, Card, Col, Empty, Row, Skeleton, Space, Tag, Typography } from 'antd';
import {
  ApartmentOutlined,
  ArrowRightOutlined,
  BankOutlined,
  BuildOutlined,
  CheckCircleOutlined,
  HomeOutlined,
  MedicineBoxOutlined,
  ShopOutlined,
  SolutionOutlined
} from '@ant-design/icons';

const industries = [
  {
    key: 'corporate',
    title: 'Corporate Offices',
    icon: <BankOutlined />,
    summary: 'Professional support for office campuses, admin buildings, and corporate facilities.',
    description:
      'We tailor security, housekeeping, and facility support for office environments where presentation, discipline, and operational continuity matter.',
    challenges: ['Visitor and access management', 'Daily hygiene standards', 'Multi-floor operational consistency'],
    benefits: ['Professional front-facing environment', 'Disciplined workforce support', 'Reliable facility coordination']
  },
  {
    key: 'manufacturing',
    title: 'Manufacturing / Factories',
    icon: <BuildOutlined />,
    summary: 'Operational manpower and support services for industrial and factory environments.',
    description:
      'Industrial sites require dependable staffing, strong site discipline, and practical support aligned with production operations and safety expectations.',
    challenges: ['Large-site supervision', 'Industrial cleanliness', 'Shift-based support deployment'],
    benefits: ['Improved operational discipline', 'Better plant upkeep', 'Scalable site support']
  },
  {
    key: 'healthcare',
    title: 'Healthcare / Hospitals',
    icon: <MedicineBoxOutlined />,
    summary: 'Sensitive support services for healthcare facilities and patient-facing environments.',
    description:
      'Healthcare spaces need structured housekeeping, controlled movement, and reliable manpower support for hygiene-sensitive operations.',
    challenges: ['High hygiene expectations', 'Patient-facing service quality', 'Continuous support needs'],
    benefits: ['Cleaner controlled spaces', 'Reliable support staff', 'Better visitor and facility management']
  },
  {
    key: 'education',
    title: 'Education / Schools',
    icon: <HomeOutlined />,
    summary: 'Disciplined services for schools, campuses, and institutional learning spaces.',
    description:
      'Educational institutions benefit from dependable housekeeping, campus support, and professional staffing for safe and orderly environments.',
    challenges: ['Campus discipline', 'Shared-space hygiene', 'Daily operational coverage'],
    benefits: ['Safer campus operations', 'Improved cleanliness', 'Structured support routines']
  },
  {
    key: 'retail',
    title: 'Retail / Malls',
    icon: <ShopOutlined />,
    summary: 'Customer-facing support for retail stores, shopping areas, and commercial spaces.',
    description:
      'Retail spaces need presentable, responsive, and consistent support that improves customer experience and site reliability.',
    challenges: ['High footfall management', 'Continuous cleaning needs', 'Front-facing staff discipline'],
    benefits: ['Better customer environment', 'Faster support response', 'Consistent site presentation']
  },
  {
    key: 'residential',
    title: 'Residential Societies',
    icon: <ApartmentOutlined />,
    summary: 'Integrated support for residential communities and shared facility environments.',
    description:
      'Residential properties need dependable gate management, upkeep, and staffing that supports residents and shared amenities smoothly.',
    challenges: ['Entry and visitor control', 'Common-area maintenance', 'Round-the-clock community support'],
    benefits: ['Improved resident confidence', 'Cleaner shared spaces', 'Reliable property support']
  }
];

function IndustriesPage() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = window.setTimeout(() => {
      setIsLoading(false);
    }, 700);

    return () => window.clearTimeout(timer);
  }, []);

  return (
    <div className="industries-page">
      <section className="industries-page__hero">
        <div className="industries-page__hero-overlay" />
        <div className="industries-page__hero-content">
          <Tag className="hero-section__eyebrow">Industries</Tag>
          <Typography.Title className="hero-section__title industries-page__hero-title">
            Industry-Specific Support for <span className="hero-section__title-accent">B2B Clients</span>
          </Typography.Title>
          <Typography.Paragraph className="industries-page__hero-text">
            Explore the industries we serve and see how our security, housekeeping,
            and facility support models adapt to different business environments.
          </Typography.Paragraph>
          <Space wrap className="industries-page__hero-actions">
            <Button
              type="primary"
              size="large"
              icon={<ArrowRightOutlined />}
              className="hero-section__button hero-section__button--primary"
              href="#industries-overview"
            >
              View Industries
            </Button>
            <Button
              size="large"
              className="hero-section__button hero-section__button--secondary"
              href="/contact"
            >
              Contact Us
            </Button>
          </Space>
        </div>
      </section>

      <section id="industries-navigation" className="section-block service-nav-section">
        <Typography.Title level={2} className="theme-section-title">
          Quick Industry Navigation
        </Typography.Title>
        <Typography.Paragraph className="theme-section-intro">
          Jump directly to your sector and review how our services solve real business challenges.
        </Typography.Paragraph>
        <Space wrap className="service-nav-section__links">
          {industries.map((industry) => (
            <Button key={industry.key} href={`#${industry.key}`} className="service-nav-section__button">
              {industry.title}
            </Button>
          ))}
        </Space>
      </section>

      <section id="industries-overview" className="section-block">
        <Typography.Title level={2} className="theme-section-title">
          Industries Overview
        </Typography.Title>
        <Typography.Paragraph className="theme-section-intro">
          Each industry card is clearly separated so visitors can quickly identify whether their business is covered.
        </Typography.Paragraph>

        {isLoading ? (
          <Row gutter={[28, 28]}>
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <Col xs={24} sm={12} lg={8} key={item}>
                <Card className="industry-overview-card">
                  <Skeleton active paragraph={{ rows: 4 }} />
                </Card>
              </Col>
            ))}
          </Row>
        ) : industries.length > 0 ? (
          <Row gutter={[28, 28]}>
            {industries.map((industry) => (
              <Col xs={24} sm={12} lg={8} key={industry.key}>
                <Card className="industry-overview-card" hoverable>
                  <Button type="link" href={`#${industry.key}`} className="service-overview-card__cta">
                    Know More
                  </Button>
                  <div className="industry-overview-card__icon">{industry.icon}</div>
                  <Typography.Title level={4} className="industry-overview-card__title">
                    {industry.title}
                  </Typography.Title>
                  <Typography.Paragraph className="industry-overview-card__summary">
                    {industry.summary}
                  </Typography.Paragraph>
                </Card>
              </Col>
            ))}
          </Row>
        ) : (
          <Card className="theme-card">
            <Empty description="No industries are configured right now." />
          </Card>
        )}
      </section>

      <section className="section-block">
        <Typography.Title level={2} className="theme-section-title">
          Industry Details
        </Typography.Title>
        <Typography.Paragraph className="theme-section-intro">
          Detailed sections explain how our services apply to each industry, including common challenges and industry-specific benefits.
        </Typography.Paragraph>

        {isLoading ? (
          <Card className="theme-card service-detail-card">
            <Skeleton active paragraph={{ rows: 8 }} />
          </Card>
        ) : industries.length > 0 ? (
          <Space direction="vertical" size={28} className="service-detail-stack">
            {industries.map((industry) => (
              <Card key={industry.key} id={industry.key} className="service-detail-card">
                <Row gutter={[24, 24]} align="middle">
                  <Col xs={24} md={7} xl={6}>
                    <div className="service-detail-card__intro">
                      <div className="service-detail-card__header">
                        <div className="service-detail-card__icon">{industry.icon}</div>
                        <Typography.Title level={3} className="service-detail-card__title">
                          {industry.title}
                        </Typography.Title>
                      </div>
                      <Typography.Paragraph className="service-detail-card__description">
                        {industry.description}
                      </Typography.Paragraph>
                      <Button
                        type="primary"
                        size="large"
                        href="/contact"
                        icon={<ArrowRightOutlined />}
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
                              Challenges Addressed
                            </Typography.Text>
                          </div>
                          <Space direction="vertical" size={12} className="service-detail-card__list">
                            {industry.challenges.map((item) => (
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
                              Industry Benefits
                            </Typography.Text>
                          </div>
                          <Space direction="vertical" size={12} className="service-detail-card__list">
                            {industry.benefits.map((item) => (
                              <div key={item} className="service-detail-card__list-item">
                                <SolutionOutlined />
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
          <Alert type="warning" showIcon message="Industry details are unavailable at the moment." />
        )}
      </section>
    </div>
  );
}

export default IndustriesPage;
