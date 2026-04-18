import { useEffect, useState } from 'react';
import { Alert, Avatar, Button, Card, Col, Empty, Row, Skeleton, Space, Tag, Typography } from 'antd';
import {
  ArrowRightOutlined,
  AuditOutlined,
  CheckSquareOutlined,
  BankOutlined,
  CheckCircleOutlined,
  CrownOutlined,
  HeartOutlined,
  IdcardOutlined,
  SafetyOutlined,
  SafetyCertificateOutlined,
  SolutionOutlined,
  TeamOutlined,
  UserOutlined,
  TrophyOutlined
} from '@ant-design/icons';
import navamaniPhoto from '../assect/img/Navamani_pillappa.jpeg';
import sridharPhoto from '../assect/img/Sridhar.jpeg';
import krishnaMurthyPhoto from '../assect/img/Krishna_Murthy.jpeg';
import veluPhoto from '../assect/img/Velu.jpeg';
import sagarPhoto from '../assect/img/Sagar.jpeg';

const values = [
  {
    title: 'Vision',
    description: 'To be a trusted and preferred partner in delivering integrated facility management solutions, known for reliability, quality service, and long-term client relationships.',
    ribbon: 'Vision'
  },
  {
    title: 'Mission',
    description: 'To provide efficient, safe, and high-quality facility management, housekeeping, security, deep cleaning, and indoor gardening services through trained manpower, structured processes, and a customer-focused approach, ensuring clean, secure, and well-maintained environments for every client.',
    ribbon: 'Mission'
  },
  {
    title: 'Values',
    points: [
      {
        icon: <CheckSquareOutlined />,
        title: 'Integrity',
        description: 'We operate with honesty, transparency, and accountability.'
      },
      {
        icon: <CheckCircleOutlined />,
        title: 'Reliability',
        description: 'Consistent and dependable service delivery at all times.'
      },
      {
        icon: <TrophyOutlined />,
        title: 'Quality',
        description: 'Commitment to high standards in every service we provide.'
      },
      {
        icon: <UserOutlined />,
        title: 'Professionalism',
        description: 'Skilled workforce with disciplined execution.'
      },
      {
        icon: <HeartOutlined />,
        title: 'Customer Focus',
        description: 'Understanding and meeting client needs with care and responsiveness.'
      },
      {
        icon: <SafetyOutlined />,
        title: 'Safety & Hygiene',
        description: 'Prioritizing safe and healthy environments in all operations.'
      }
    ],
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

const overviewPillars = ['Professionalism', 'Reliability', 'Structured Delivery'];

const serviceFocusItems = [
  { title: 'Security Services', icon: <SafetyCertificateOutlined /> },
  { title: 'Housekeeping', icon: <CheckCircleOutlined /> },
  { title: 'Facility Management', icon: <AuditOutlined /> },
  { title: 'Deep Cleaning', icon: <SolutionOutlined /> },
  { title: 'Indoor Gardening', icon: <BankOutlined /> }
];

const directors = [
  {
    name: 'Navamani Pillappa',
    icon: <CrownOutlined />,
    photo: navamaniPhoto,
    role: 'Director - Operations - Facility Management',
    description: 'Navamani P, Head of Business Operations - Housekeeping & Facility Management, brings over 37 years of industry experience since 1989. With a background in engineering, he has worked with leading organizations including DTSS, HFPL, CLR, and Uttara. His expertise spans training, transition, end-to-end operations, and client management. He is known for his structured approach and strong leadership in delivering consistent service excellence.'
  },
  {
    name: 'Sridhar S',
    icon: <SafetyCertificateOutlined />,
    photo: sridharPhoto,
    role: 'Director - Security Services',
    description: 'S. Sridhar holds a B.E. in Mechanical Engineering along with a Diploma in Mechanical Engineering and brings extensive experience in the security industry. He has served for over 15 years with Eagle Eye, where he gained strong expertise in operations management and recruitment, particularly in selecting and deploying personnel across various security functions. Under his leadership, Protector Redefining Security, established in December 2002, has grown into a trusted service provider across Karnataka, with a workforce of over 450 trained security personnel.'
  },
  {
    name: 'Krishna Murthy',
    icon: <IdcardOutlined />,
    photo: krishnaMurthyPhoto,
    role: 'Director - Facility Management & Garden and Landscape Architect',
    description: 'Krishna Murthy is a seasoned professional in facility management and landscape architecture, bringing extensive experience in creating and maintaining functional and aesthetically enhanced environments. With a strong understanding of indoor and outdoor space management, he specializes in integrating greenery solutions with operational efficiency. His expertise includes facility maintenance planning, indoor gardening, landscape design, and sustainable green solutions. He plays a key role in enhancing workplace environments by combining practical facility operations with modern landscaping concepts, ensuring both visual appeal and environmental well-being.'
  },
  {
    name: 'Nirmal',
    icon: <TeamOutlined />,
    role: 'General Manager Operations',
    description: 'Nirmal oversees day-to-day operations across multiple service verticals, ensuring smooth execution and adherence to quality standards. With strong operational expertise, he is responsible for team coordination, service delivery, client servicing, and performance monitoring. He brings a hands-on approach to managing workforce deployment and ensures that all services are delivered efficiently, maintaining consistency, discipline, and client satisfaction.'
  },
  {
    name: 'Velayutham Raja',
    icon: <AuditOutlined />,
    photo: veluPhoto,
    role: 'Senior Manager Operations',
    description: 'Velayutham Raja supports operational management with a focus on execution, supervision, and quality control. He plays a critical role in coordinating field teams, monitoring service performance, and ensuring compliance with company standards. With practical experience in handling on-ground challenges, he contributes to maintaining service reliability and operational efficiency across projects.'
  },
  {
    name: 'Sagar Venkatesh',
    icon: <BankOutlined />,
    photo: sagarPhoto,
    role: 'Finance Consultant',
    description: 'Sagar is responsible for overseeing financial planning, compliance, and advisory functions of the organization. With expertise in accounting, taxation, and financial management, he ensures strong financial discipline and regulatory compliance. He supports the organization in strategic decision-making by providing financial insights, cost optimization strategies, and structured financial reporting.'
  }
];

function DirectorAvatar({ director }) {
  if (director.photo) {
    return <Avatar src={director.photo} className="about-card__avatar" />;
  }

  return director.icon;
}

function ServiceFocusCard({ icon, title }) {
  return (
    <div className="about-page__focus-item">
      <div className="about-page__focus-icon">{icon}</div>
      <Typography.Text className="about-page__focus-title">{title}</Typography.Text>
    </div>
  );
}

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
            housekeeping, facility management, deep cleaning, and indoor gardening capabilities.
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

        {isLoading ? (
          <Card className="theme-card about-page__overview-card">
            <Skeleton active paragraph={{ rows: 6 }} />
          </Card>
        ) : (
          <Row gutter={[28, 28]}>
            <Col xs={24} lg={14}>
              <Card className="about-page__overview-card">
                <div className="about-card__ribbon">
                  <span>Company Profile</span>
                </div>
                <Typography.Title level={3} className="about-page__overview-title">
                  Built for Reliable Facility & Support Services Delivery
                </Typography.Title>
                <Typography.Paragraph className="about-page__overview-text">
                  We are a business-focused service provider delivering facility management, housekeeping,
                  security services, deep cleaning, and indoor gardening solutions to organizations that require dependable operational support.
                </Typography.Paragraph>
                <Typography.Paragraph className="about-page__overview-text">
                  Built on professionalism, reliability, and structured service delivery, we provide trained manpower
                  and disciplined execution to ensure safe, clean, and well-maintained environments.
                </Typography.Paragraph>
                <Typography.Paragraph className="about-page__overview-text">
                  Our services are designed to reduce operational burden and help clients maintain efficient and hygienic workplaces.
                </Typography.Paragraph>
                <Space wrap size={[10, 10]} className="about-page__overview-pillars">
                  {overviewPillars.map((item) => (
                    <Tag key={item} className="about-page__overview-pill">
                      {item}
                    </Tag>
                  ))}
                </Space>
              </Card>
            </Col>
            <Col xs={24} lg={10}>
              <Card className="about-page__expertise-card">
                <Typography.Text className="service-detail-card__panel-label">
                  Service Focus
                </Typography.Text>
                <Typography.Paragraph className="about-page__expertise-intro">
                  Operational support services aligned for dependable day-to-day execution.
                </Typography.Paragraph>
                <Row gutter={[14, 14]} className="about-page__expertise-list">
                  {serviceFocusItems.map((item) => (
                    <Col xs={24} sm={12} key={item.title}>
                      <ServiceFocusCard {...item} />
                    </Col>
                  ))}
                </Row>
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
            <Col xs={24} lg={10}>
              <Row gutter={[28, 28]}>
                {values.filter((item) => item.title !== 'Values').map((item) => (
                  <Col xs={24} key={item.title}>
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
            </Col>
            <Col xs={24} lg={14}>
              {values.filter((item) => item.title === 'Values').map((item) => (
                <Card className="about-card about-page__values-card" key={item.title}>
                  <div className="about-card__ribbon">
                    <span>{item.ribbon}</span>
                  </div>
                  <div className="about-card__icon">
                    <AuditOutlined />
                  </div>
                  <Typography.Title level={4} className="about-card__title">
                    {item.title}
                  </Typography.Title>
                  <Row gutter={[12, 12]} className="about-page__values-list">
                    {item.points.map((point) => (
                      <Col xs={24} md={12} xl={8} key={point.title}>
                        <div className="about-page__values-item">
                          <div className="about-page__values-item-icon">{point.icon}</div>
                          <Typography.Title level={5} className="about-page__values-item-title">
                            {point.title}
                          </Typography.Title>
                          <Typography.Paragraph className="about-page__values-item-description">
                            {point.description}
                          </Typography.Paragraph>
                        </div>
                      </Col>
                    ))}
                  </Row>
                </Card>
              ))}
            </Col>
          </Row>
        ) : (
          <Card className="theme-card">
            <Empty description="Mission and vision details are not available right now." />
          </Card>
        )}
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
            <Col xs={24} md={12} xl={8} key={director.name}>
              <Card className="about-card about-page__director-card">
                <div className="about-card__ribbon">
                  <span>Leadership</span>
                </div>
                <div className="about-card__icon">
                  <DirectorAvatar director={director} />
                </div>
                <Typography.Title level={4} className="about-card__title">
                  {director.name}
                </Typography.Title>
                <Typography.Text className="about-page__director-role">
                  {director.role}
                </Typography.Text>
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
