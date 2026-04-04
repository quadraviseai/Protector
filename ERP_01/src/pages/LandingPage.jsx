import { Button, Card, Col, Row, Space, Statistic, Tag, Typography } from 'antd';
import {
  AppstoreOutlined,
  FileTextOutlined,
  TeamOutlined,
  BankOutlined,
  DeploymentUnitOutlined,
  SafetyCertificateOutlined,
  CheckCircleOutlined,
  SolutionOutlined,
  TrophyOutlined,
  HomeOutlined,
  MedicineBoxOutlined,
  ShopOutlined,
  ApartmentOutlined,
  BuildOutlined,
} from '@ant-design/icons';
import QuickContactActions from '../components/QuickContactActions';
import ServiceSection from '../components/ServiceSection';

const industries = [
  {
    title: 'Corporate Offices',
    icon: <BankOutlined />,
    description: 'Structured support for office campuses, admin blocks, and business centers.'
  },
  {
    title: 'Hospitals',
    icon: <MedicineBoxOutlined />,
    description: 'Reliable housekeeping and manpower support for sensitive care environments.'
  },
  {
    title: 'Schools',
    icon: <HomeOutlined />,
    description: 'Disciplined staffing and facility support for schools and institutions.'
  },
  {
    title: 'Factories',
    icon: <BuildOutlined />,
    description: 'Operational support designed for industrial discipline and site continuity.'
  },
  {
    title: 'Retail',
    icon: <ShopOutlined />,
    description: 'Customer-facing support for clean, secure, and well-managed retail spaces.'
  },
  {
    title: 'Residential Communities',
    icon: <ApartmentOutlined />,
    description: 'Integrated services for gated communities and shared residential facilities.'
  }
];

const testimonials = [
  {
    name: 'Operations Manager, Corporate Park',
    text: 'The team helped us standardize housekeeping and site discipline without adding management overhead.'
  },
  {
    name: 'Admin Head, Multi-site Retail Group',
    text: 'Responsive support, trained personnel, and dependable execution across locations.'
  }
];

const aboutCards = [
  {
    title: 'Professional Teams',
    icon: <TeamOutlined />,
    description: 'Staff are deployed with clear operational roles, discipline, and service expectations.'
  },
  {
    title: 'Business Readiness',
    icon: <BankOutlined />,
    description: 'Processes align with the needs of corporate offices, institutions, and industrial sites.'
  },
  {
    title: 'Scalable Support',
    icon: <DeploymentUnitOutlined />,
    description: 'Service packages can be adapted for single locations or multi-site engagements.'
  }
];

const whyChooseCards = [
  {
    title: 'Trained Staff',
    icon: <SafetyCertificateOutlined />,
    description: 'Trained and supervised workforce ready for disciplined on-site execution.'
  },
  {
    title: 'Service Quality',
    icon: <CheckCircleOutlined />,
    description: 'Consistent service quality across sites with strong operational follow-through.'
  },
  {
    title: 'Reliability',
    icon: <SolutionOutlined />,
    description: 'Reliable staffing and support models built for long-term business contracts.'
  },
  {
    title: 'Experience',
    icon: <TrophyOutlined />,
    description: 'Business-focused execution and reporting that supports client confidence.'
  }
];

const services = [
  {
    key: 'security',
    title: 'Security Services',
    description: 'Trained security teams for offices, campuses, and industrial facilities.'
  },
  {
    key: 'housekeeping',
    title: 'Housekeeping',
    description: 'Professional cleaning support designed for high-traffic business spaces.'
  },
  {
    key: 'facility',
    title: 'Facility Management',
    description: 'Integrated operations support to keep sites efficient, safe, and compliant.'
  },
  {
    key: 'b2b',
    title: 'B2B Solutions',
    description: 'Custom service plans built for corporate, retail, and institutional clients.'
  }
];

function LandingPage() {
  const phoneNumber = '+910000000000';
  const whatsappLink = 'https://wa.me/910000000000';

  return (
    <div className="landing-page">
      <section id="home" className="hero-section">
        <div className="hero-section__overlay" />
        <div className="hero-section__content">
          <Tag className="hero-section__eyebrow">
            Security, Housekeeping, Facility Management & B2B Solutions
          </Tag>
          <Typography.Title className="hero-section__title">
            Reliable Support Services for{' '}
            <span className="hero-section__title-accent">Business Operations</span>
          </Typography.Title>
          
          <Space className="hero-section__actions">
            <Button
              type="primary"
              size="large"
              href="#contact"
              icon={<FileTextOutlined />}
              className="hero-section__button hero-section__button--primary"
            >
              Get Quote
            </Button>
            <Button
              size="large"
              href="/services"
              icon={<AppstoreOutlined />}
              className="hero-section__button hero-section__button--secondary"
            >
              Explore Services
            </Button>
            <QuickContactActions
              phoneNumber={phoneNumber}
              whatsappLink={whatsappLink}
              className="hero-section__quick-actions"
              showWhatsApp={false}
            />
          </Space>
          
        </div>
      </section>

      <ServiceSection services={services} />

      <section id="about" className="section-block about-section">
        <Typography.Title level={2} className="about-section__title">
          About the Company
        </Typography.Title>
        <Typography.Paragraph>
          We support businesses that need dependable field execution across security, housekeeping, facility operations,
          and outsourced service delivery. Our focus is professional deployment, consistent supervision, and service
          structures that fit commercial environments.
        </Typography.Paragraph>
        <Row gutter={[28, 28]} justify="center" className="section-block__spacer">
          {aboutCards.map((item) => (
            <Col xs={24} md={12} xl={8} key={item.title}>
              <Card className="about-card">
                <div className="about-card__ribbon">
                  <span>About</span>
                </div>
                <div className="about-card__icon">{item.icon}</div>
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

        <Typography.Title level={2} className="about-section__title">
          Why Choose Us
        </Typography.Title>
        <Row gutter={[28, 28]} justify="center">
          {whyChooseCards.map((item) => (
            <Col xs={24} sm={12} xl={6} key={item.title}>
              <Card className="about-card why-card">
                <div className="about-card__ribbon">
                  <span>Why Us</span>
                </div>
                <div className="about-card__icon">{item.icon}</div>
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
      </section>

      <section id="industries" className="section-block">
        <Typography.Title level={2} className="services-section__title">
          Industries We Serve
        </Typography.Title>
        <Typography.Paragraph>
          Built for environments where operational discipline, hygiene, and site reliability directly affect business outcomes.
        </Typography.Paragraph>
        <Row gutter={[28, 28]} justify="center">
          {industries.map((industry) => (
            <Col xs={24} sm={12} lg={8} key={industry.title}>
              <Card className="industry-card industry-card--alt">
                <div className="industry-card__accent" />
                <div className="industry-card__icon">{industry.icon}</div>
                <Typography.Title level={4} className="industry-card__title">
                  {industry.title}
                </Typography.Title>
                <Typography.Paragraph className="industry-card__description">
                  {industry.description}
                </Typography.Paragraph>
              </Card>
            </Col>
          ))}
        </Row>
      </section>

      <section id="testimonials" className="section-block testimonials-section">
        <Typography.Title level={2} className="services-section__title">
          Client Trust
        </Typography.Title>
        <Typography.Paragraph>
          Proof points that help visitors feel confident before submitting an inquiry.
        </Typography.Paragraph>
        <Row gutter={[28, 28]} justify="center">
          {testimonials.map((testimonial) => (
            <Col xs={24} md={12} key={testimonial.name}>
              <Card className="testimonial-card">
                <div className="about-card__ribbon">
                  <span>Trusted</span>
                </div>
                <Typography.Paragraph className="testimonial-card__text">
                  {testimonial.text}
                </Typography.Paragraph>
                <Typography.Text strong className="testimonial-card__name">
                  {testimonial.name}
                </Typography.Text>
              </Card>
            </Col>
          ))}
        </Row>
      </section>
    </div>
  );
}

export default LandingPage;
