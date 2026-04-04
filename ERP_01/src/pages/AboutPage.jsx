import { useEffect, useState } from 'react';
import { Alert, Button, Card, Col, Empty, Row, Skeleton, Space, Tag, Typography } from 'antd';
import {
  ArrowRightOutlined,
  AuditOutlined,
  BankOutlined,
  CheckCircleOutlined,
  CrownOutlined,
  IdcardOutlined,
  SafetyCertificateOutlined,
  SolutionOutlined,
  TeamOutlined,
  TrophyOutlined
} from '@ant-design/icons';

const highlights = [
  { label: 'Years of Experience', value: '12+', icon: <TrophyOutlined /> },
  { label: 'Trained Staff', value: '250+', icon: <TeamOutlined /> },
  { label: 'Clients Served', value: '100+', icon: <BankOutlined /> },
  { label: 'Projects Managed', value: '300+', icon: <SolutionOutlined /> }
];

const values = [
  {
    title: 'Vision',
    description: 'To become a trusted long-term operations partner for businesses that need reliable support services.',
    ribbon: 'Vision'
  },
  {
    title: 'Mission',
    description: 'To deliver disciplined security, housekeeping, facility management, and B2B support with consistency and professionalism.',
    ribbon: 'Mission'
  },
  {
    title: 'Core Values',
    description: 'Professionalism, reliability, safety, accountability, and service quality guide every client engagement.',
    ribbon: 'Values'
  }
];

const certifications = [
  'ISO-aligned operational processes',
  'Background verification and disciplined workforce deployment',
  'Compliance-oriented site supervision and documentation'
];

const workforcePoints = [
  'Trained personnel with clear role-based deployment',
  'Background verification and supervision practices',
  'Professional conduct and on-site discipline standards'
];

const industries = ['Corporate', 'Healthcare', 'Retail', 'Manufacturing', 'Education'];

const directors = [
  {
    name: 'Managing Director',
    icon: <CrownOutlined />,
    description: 'Provides strategic direction for Protector Services Pvt Ltd, focusing on long-term B2B growth, trust, and disciplined service delivery.'
  },
  {
    name: 'Operations Director',
    icon: <IdcardOutlined />,
    description: 'Leads workforce supervision, operational quality, and field execution to ensure reliable client outcomes across service categories.'
  }
];

function AboutPage() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = window.setTimeout(() => {
      setIsLoading(false);
    }, 700);

    return () => window.clearTimeout(timer);
  }, []);

  return (
    <div className="about-page">
      <section className="about-page__hero">
        <div className="about-page__hero-overlay" />
        <div className="about-page__hero-content">
          <Tag className="hero-section__eyebrow">About Us</Tag>
          <Typography.Title className="hero-section__title about-page__hero-title">
            Trust, Expertise & <span className="hero-section__title-accent">Business Reliability</span>
          </Typography.Title>
          <Typography.Paragraph className="about-page__hero-text">
            Learn who we are, what we do, and why businesses trust our security,
            housekeeping, facility management, and B2B support capabilities.
          </Typography.Paragraph>
          <Space wrap className="about-page__hero-actions">
            <Button
              type="primary"
              size="large"
              icon={<ArrowRightOutlined />}
              className="hero-section__button hero-section__button--primary"
              href="#company-overview"
            >
              Explore About Us
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

      <section id="company-overview" className="section-block">
        <Typography.Title level={2} className="theme-section-title">
          Company Overview
        </Typography.Title>
        <Typography.Paragraph className="theme-section-intro">
          We are a business-focused service company providing security, housekeeping,
          facility management, and B2B manpower solutions for organizations that need dependable operational support.
        </Typography.Paragraph>

        {isLoading ? (
          <Card className="theme-card about-page__overview-card">
            <Skeleton active paragraph={{ rows: 6 }} />
          </Card>
        ) : (
          <Row gutter={[28, 28]}>
            <Col xs={24} lg={14}>
              <Card className="about-page__overview-card">
                <div className="about-card__ribbon">
                  <span>Company</span>
                </div>
                <Typography.Title level={3} className="about-page__overview-title">
                  Built for B2B confidence and long-term service delivery
                </Typography.Title>
                <Typography.Paragraph className="about-page__overview-text">
                  Our company supports corporate, institutional, and industrial clients with structured service delivery,
                  trained manpower, and disciplined site execution. We focus on building trust through professionalism,
                  reliability, and clear operational accountability.
                </Typography.Paragraph>
                <Typography.Paragraph className="about-page__overview-text">
                  The business is positioned around practical support services that reduce operational burden and help
                  clients maintain safer, cleaner, and better-managed environments.
                </Typography.Paragraph>
              </Card>
            </Col>
            <Col xs={24} lg={10}>
              <Card className="about-page__expertise-card">
                <Typography.Text className="service-detail-card__panel-label">
                  Service Focus
                </Typography.Text>
                <Space direction="vertical" size={14} className="about-page__expertise-list">
                  {[
                    'Security Services',
                    'Housekeeping',
                    'Facility Management',
                    'B2B Solutions'
                  ].map((item) => (
                    <div key={item} className="service-detail-card__list-item">
                      <CheckCircleOutlined />
                      <span>{item}</span>
                    </div>
                  ))}
                </Space>
              </Card>
            </Col>
          </Row>
        )}
      </section>

      <section className="section-block">
        <Typography.Title level={2} className="theme-section-title">
          Vision, Mission & Values
        </Typography.Title>
        <Typography.Paragraph className="theme-section-intro">
          Simple principles that define how we work and why corporate clients rely on our service standards.
        </Typography.Paragraph>

        {isLoading ? (
          <Row gutter={[28, 28]}>
            {[1, 2, 3].map((item) => (
              <Col xs={24} md={8} key={item}>
                <Card className="about-card">
                  <Skeleton active paragraph={{ rows: 4 }} />
                </Card>
              </Col>
            ))}
          </Row>
        ) : values.length > 0 ? (
          <Row gutter={[28, 28]}>
            {values.map((item) => (
              <Col xs={24} md={8} key={item.title}>
                <Card className="about-card">
                  <div className="about-card__ribbon">
                    <span>{item.ribbon}</span>
                  </div>
                  <div className="about-card__icon">
                    <AuditOutlined />
                  </div>
                  <Typography.Title level={4} className="about-card__title">
                    {item.title}
                  </Typography.Title>
                  <Typography.Paragraph className="about-card__description">
                    {item.description}
                  </Typography.Paragraph>
                </Card>
              </Col>
            ))}
          </Row>
        ) : (
          <Card className="theme-card">
            <Empty description="Mission and vision details are not available right now." />
          </Card>
        )}
      </section>

      <section className="section-block">
        <Typography.Title level={2} className="theme-section-title">
          Company Highlights
        </Typography.Title>
        <Typography.Paragraph className="theme-section-intro">
          Quick indicators that help visitors assess company capability and business scale.
        </Typography.Paragraph>

        <Row gutter={[28, 28]}>
          {highlights.map((item) => (
            <Col xs={12} md={6} key={item.label}>
              <Card className="about-page__highlight-card">
                <div className="about-page__highlight-icon">{item.icon}</div>
                <Typography.Title level={2} className="about-page__highlight-value">
                  {item.value}
                </Typography.Title>
                <Typography.Paragraph className="about-page__highlight-label">
                  {item.label}
                </Typography.Paragraph>
              </Card>
            </Col>
          ))}
        </Row>
      </section>

      <section className="section-block">
        <Typography.Title level={2} className="theme-section-title">
          Directors Profile
        </Typography.Title>
        <Typography.Paragraph className="theme-section-intro">
          Leadership oversight focused on business reliability, disciplined execution, and long-term client confidence.
        </Typography.Paragraph>
        <Row gutter={[28, 28]} justify="center">
          {directors.map((director) => (
            <Col xs={24} md={12} key={director.name}>
              <Card className="about-card about-page__director-card">
                <div className="about-card__ribbon">
                  <span>Leadership</span>
                </div>
                <div className="about-card__icon">{director.icon}</div>
                <Typography.Title level={4} className="about-card__title">
                  {director.name}
                </Typography.Title>
                <Typography.Paragraph className="about-card__description">
                  {director.description}
                </Typography.Paragraph>
              </Card>
            </Col>
          ))}
        </Row>
      </section>

      <section className="section-block">
        <Typography.Title level={2} className="theme-section-title">
          Certifications & Compliance
        </Typography.Title>
        <Typography.Paragraph className="theme-section-intro">
          Credibility factors that help cautious clients assess legitimacy and professional standards.
        </Typography.Paragraph>

        <Row gutter={[28, 28]}>
          <Col xs={24} lg={12}>
            <Card className="service-detail-card__panel about-page__compliance-card">
              <div className="service-detail-card__panel-header">
                <Typography.Text className="service-detail-card__panel-label">
                  Compliance
                </Typography.Text>
              </div>
              <Space direction="vertical" size={12} className="service-detail-card__list">
                {certifications.map((item) => (
                  <div key={item} className="service-detail-card__list-item">
                    <SafetyCertificateOutlined />
                    <span>{item}</span>
                  </div>
                ))}
              </Space>
            </Card>
          </Col>
          <Col xs={24} lg={12}>
            <Card className="service-detail-card__panel about-page__workforce-card">
              <div className="service-detail-card__panel-header">
                <Typography.Text className="service-detail-card__panel-label">
                  Workforce Quality
                </Typography.Text>
              </div>
              <Space direction="vertical" size={12} className="service-detail-card__list">
                {workforcePoints.map((item) => (
                  <div key={item} className="service-detail-card__list-item">
                    <TeamOutlined />
                    <span>{item}</span>
                  </div>
                ))}
              </Space>
            </Card>
          </Col>
        </Row>
      </section>

      <section className="section-block">
        <Typography.Title level={2} className="theme-section-title">
          Industries Experience
        </Typography.Title>
        <Typography.Paragraph className="theme-section-intro">
          Sectors where our business support model and operational expertise are relevant.
        </Typography.Paragraph>
        <Row gutter={[20, 20]} justify="center">
          {industries.map((item) => (
            <Col xs={12} md={8} lg={4} key={item}>
              <Card className="about-page__industry-chip">
                <Typography.Text>{item}</Typography.Text>
              </Card>
            </Col>
          ))}
        </Row>
      </section>

      <section className="section-block about-page__cta-section">
        <Card className="about-page__cta-card">
          <Typography.Title level={2} className="theme-section-title">
            Ready to Work With Us?
          </Typography.Title>
          <Typography.Paragraph className="theme-section-intro">
            Take the next step with a team built for trust, professionalism, and business-focused execution.
          </Typography.Paragraph>
          <Space wrap className="about-page__cta-actions">
            <Button
              type="primary"
              size="large"
              className="hero-section__button hero-section__button--primary"
              href="/contact"
            >
              Contact Us
            </Button>
            <Button
              size="large"
              className="hero-section__button hero-section__button--secondary"
              href="/services"
            >
              Explore Services
            </Button>
          </Space>
        </Card>
      </section>
    </div>
  );
}

export default AboutPage;
