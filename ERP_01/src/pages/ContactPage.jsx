import { useEffect, useState } from 'react';
import {
  Alert,
  Button,
  Card,
  Col,
  Form,
  Input,
  Row,
  Skeleton,
  Space,
  Tag,
  Typography,
  message
} from 'antd';
import {
  EnvironmentOutlined,
  FileTextOutlined,
  MailOutlined,
  PhoneOutlined
} from '@ant-design/icons';
import QuickContactActions from '../components/QuickContactActions';
import logo from '../assect/img/logo.png';

function ContactPage() {
  const phoneNumber = '+919900431123';
  const whatsappLink = 'https://wa.me/919900431123';
  const officeAddress = 'No. 25A 1st floor Venkateshwara, Commercial 6th Main, R T Nagar, Bangalore North, Bangalore - 560032, Karnataka';
  const googleMapsQuery = 'No.%2025A%201st%20floor%20Venkateshwara%20Commercial%206th%20Main%20R%20T%20Nagar%20Bangalore%20560032';
  const googleMapsUrl = `https://maps.google.com/?q=${googleMapsQuery}`;
  const googleMapsEmbedUrl = `https://www.google.com/maps?q=${googleMapsQuery}&output=embed`;
  const [form] = Form.useForm();
  const [messageApi, contextHolder] = message.useMessage();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState('');
  const [mapLoading, setMapLoading] = useState(true);
  const [mapError] = useState(false);

  useEffect(() => {
    const timer = window.setTimeout(() => {
      setMapLoading(false);
    }, 700);

    return () => window.clearTimeout(timer);
  }, []);

  const handleSubmit = async (values) => {
    setSubmitError('');
    setIsSubmitting(true);

    await new Promise((resolve) => {
      window.setTimeout(resolve, 1200);
    });

    if (values.email?.toLowerCase().includes('fail')) {
      setIsSubmitting(false);
      setSubmitError('Message submission failed. Please try again or use quick contact options.');
      return;
    }

    setIsSubmitting(false);
    messageApi.success('Your inquiry has been submitted successfully.');
    form.resetFields();
  };

  return (
    <div className="contact-page">
      {contextHolder}

      <section className="contact-page__hero">
        <div className="contact-page__hero-overlay" />
        <div className="contact-page__hero-content">
          <Tag className="hero-section__eyebrow">Contact Us</Tag>
          <Typography.Title className="hero-section__title contact-page__hero-title">
            Fast Communication for{' '}
            <span className="hero-section__title-accent">Business Inquiries</span>
          </Typography.Title>
          <Typography.Paragraph className="contact-page__hero-text">
            Reach our team through phone, email, quick actions, or the inquiry form.
            The page is designed for fast communication and easy lead capture.
          </Typography.Paragraph>
          <Space wrap className="contact-page__hero-actions">
            <Button
              type="primary"
              size="large"
              icon={<FileTextOutlined />}
              className="hero-section__button hero-section__button--primary"
              href="#contact-form"
            >
              Send Inquiry
            </Button>
            <QuickContactActions
              phoneNumber={phoneNumber}
              whatsappLink={whatsappLink}
              className="hero-section__quick-actions"
            />
          </Space>
        </div>
      </section>

      <section className="section-block">
        <Typography.Title level={2} className="theme-section-title">
          Contact Information
        </Typography.Title>
        <Typography.Paragraph className="theme-section-intro">
          Choose the communication method that works best for you. All major contact options are clearly visible and clickable.
        </Typography.Paragraph>

        <Row gutter={[28, 28]}>
          <Col xs={24} md={8}>
            <Card className="about-card contact-info-card">
              <div className="about-card__ribbon">
                <span>Call</span>
              </div>
              <div className="about-card__icon">
                <PhoneOutlined />
              </div>
              <Typography.Title level={4} className="about-card__title">
                Phone Number
              </Typography.Title>
              <Typography.Paragraph className="about-card__description">
                <a href={`tel:${phoneNumber}`}>{phoneNumber}</a>
              </Typography.Paragraph>
            </Card>
          </Col>
          <Col xs={24} md={8}>
            <Card className="about-card contact-info-card">
              <div className="about-card__ribbon">
                <span>Email</span>
              </div>
              <div className="about-card__icon">
                <MailOutlined />
              </div>
              <Typography.Title level={4} className="about-card__title">
                Email Address
              </Typography.Title>
              <Typography.Paragraph className="about-card__description">
                <a href="mailto:contact@yashaswi.com">contact@yashaswi.com</a>
              </Typography.Paragraph>
            </Card>
          </Col>
          <Col xs={24} md={8}>
            <Card className="about-card contact-info-card">
              <div className="about-card__ribbon">
                <span>Visit</span>
              </div>
              <div className="about-card__icon">
                <EnvironmentOutlined />
              </div>
              <Typography.Title level={4} className="about-card__title">
                Office Location
              </Typography.Title>
              <Typography.Paragraph className="about-card__description">
                {officeAddress}
              </Typography.Paragraph>
            </Card>
          </Col>
        </Row>
      </section>

      <section id="contact-form" className="section-block">
        <Typography.Title level={2} className="theme-section-title">
          Inquiry Form
        </Typography.Title>
        <Typography.Paragraph className="theme-section-intro">
          Submit your details and our team will get back to you. Only essential fields are included for faster completion.
        </Typography.Paragraph>

        <Row gutter={[28, 28]}>
          <Col xs={24} lg={10}>
            <Card className="contact-form-side-card">
              <div className="about-card__ribbon">
                <span>Quick Actions</span>
              </div>
              <Typography.Title level={3} className="contact-form-side-card__title">
                Need Immediate Help?
              </Typography.Title>
              <Typography.Paragraph className="contact-form-side-card__text">
                Use one-click contact actions for urgent communication instead of waiting for form response.
              </Typography.Paragraph>
              <QuickContactActions phoneNumber={phoneNumber} whatsappLink={whatsappLink} />
              <div className="contact-form-side-card__service-area">
                <Typography.Text className="service-detail-card__panel-label">
                  Service Areas
                </Typography.Text>
                <Typography.Paragraph className="contact-form-side-card__text">
                  Bangalore North, R T Nagar, and nearby operational regions across Karnataka.
                </Typography.Paragraph>
              </div>
            </Card>
          </Col>
          <Col xs={24} lg={14}>
            <Card className="contact-form-card">
              {submitError ? (
                <Alert
                  type="error"
                  showIcon
                  message={submitError}
                  className="contact-card__alert"
                />
              ) : null}
              <Form form={form} layout="vertical" onFinish={handleSubmit}>
                <Row gutter={16}>
                  <Col xs={24} md={12}>
                    <Form.Item
                      label="Name"
                      name="name"
                      rules={[
                        { required: true, message: 'Enter your name' },
                        { min: 2, message: 'Name must be at least 2 characters' }
                      ]}
                    >
                      <Input placeholder="Your name" />
                    </Form.Item>
                  </Col>
                  <Col xs={24} md={12}>
                    <Form.Item
                      label="Phone"
                      name="phone"
                      rules={[
                        { required: true, message: 'Enter your phone number' },
                        { pattern: /^[0-9+\-\s]{8,15}$/, message: 'Enter a valid phone number' }
                      ]}
                    >
                      <Input placeholder="Phone number" />
                    </Form.Item>
                  </Col>
                  <Col xs={24} md={12}>
                    <Form.Item
                      label="Email"
                      name="email"
                      rules={[{ type: 'email', message: 'Enter a valid email address' }]}
                    >
                      <Input placeholder="Email address" />
                    </Form.Item>
                  </Col>
                  <Col xs={24} md={12}>
                    <Form.Item
                      label="Subject"
                      name="subject"
                      rules={[{ required: true, message: 'Enter a subject' }]}
                    >
                      <Input placeholder="Subject" />
                    </Form.Item>
                  </Col>
                  <Col xs={24}>
                    <Form.Item
                      label="Message"
                      name="message"
                      rules={[{ required: true, message: 'Enter your message' }]}
                    >
                      <Input.TextArea rows={5} placeholder="Tell us how we can help" />
                    </Form.Item>
                  </Col>
                </Row>
                <Button
                  type="primary"
                  htmlType="submit"
                  size="large"
                  icon={<FileTextOutlined />}
                  loading={isSubmitting}
                  className="contact-form-card__button"
                >
                  Submit Inquiry
                </Button>
              </Form>
            </Card>
          </Col>
        </Row>
      </section>

      <section className="section-block">
        <Typography.Title level={2} className="theme-section-title">
          Location & Directions
        </Typography.Title>
        <Typography.Paragraph className="theme-section-intro">
          Find our office location below and open directions instantly in Google Maps.
        </Typography.Paragraph>

        {mapLoading ? (
          <Card className="theme-card contact-map-card">
            <Skeleton active paragraph={{ rows: 8 }} />
          </Card>
        ) : mapError ? (
          <Alert type="warning" showIcon message="Map could not be loaded. Please use the address above." />
        ) : (
          <Card className="contact-map-card">
            <a
              href={googleMapsUrl}
              target="_blank"
              rel="noreferrer"
              className="contact-map-card__frame"
            >
              <div className="contact-map-card__map-pin" aria-hidden="true">
                <div className="contact-map-card__map-pin-badge">
                  <img src={logo} alt="" className="contact-map-card__map-pin-logo" />
                </div>
                <span className="contact-map-card__map-pin-tip" />
              </div>
              <iframe
                title="Business Location"
                src={googleMapsEmbedUrl}
                loading="lazy"
                className="contact-map-card__iframe"
              />
            </a>
          </Card>
        )}
      </section>
    </div>
  );
}

export default ContactPage;
