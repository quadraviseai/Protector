import { useState } from 'react';
import {
  Alert,
  Button,
  Card,
  Col,
  Form,
  Input,
  Row,
  Space,
  Tag,
  Typography,
  message
} from 'antd';
import { FileTextOutlined, PhoneOutlined, SafetyCertificateOutlined } from '@ant-design/icons';
import QuickContactActions from '../components/QuickContactActions';

const serviceOptions = [
  { label: 'Security Services', value: 'Security Services' },
  { label: 'Housekeeping', value: 'Housekeeping' },
  { label: 'Facility Management', value: 'Facility Management' },
  { label: 'Deep Cleaning', value: 'Deep Cleaning' },
  { label: 'Indoor Gardening', value: 'Indoor Gardening' }
];

function InquiryPage() {
  const phoneNumber = '+919900431123';
  const whatsappLink = 'https://wa.me/919900431123';
  const [form] = Form.useForm();
  const [messageApi, contextHolder] = message.useMessage();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState('');

  const handleSubmit = async (values) => {
    setSubmitError('');
    setIsSubmitting(true);

    await new Promise((resolve) => {
      window.setTimeout(resolve, 1200);
    });

    if (values.email?.toLowerCase().includes('fail')) {
      setIsSubmitting(false);
      setSubmitError('Inquiry submission failed. Please retry or use quick contact options.');
      return;
    }

    setIsSubmitting(false);
    messageApi.success('Thank you. Your request has been received and our team will contact you within 24 hours.');
    form.resetFields();
  };

  return (
    <div className="inquiry-page">
      {contextHolder}

      <section className="inquiry-page__hero">
        <div className="inquiry-page__hero-overlay" />
        <div className="inquiry-page__hero-content">
          <Tag className="hero-section__eyebrow">Request a Quote</Tag>
          <Typography.Title className="hero-section__title inquiry-page__hero-title">
            Fast Quote Requests for <span className="hero-section__title-accent">Business Services</span>
          </Typography.Title>
          <Typography.Paragraph className="inquiry-page__hero-text">
            Share your service requirement through a simple dedicated inquiry form.
            The page is designed to reduce friction and support quick conversion.
          </Typography.Paragraph>
          <Space wrap className="inquiry-page__hero-actions">
            <Button
              type="primary"
              size="large"
              icon={<FileTextOutlined />}
              className="hero-section__button hero-section__button--primary"
              href="#inquiry-form"
            >
              Start Inquiry
            </Button>
            <QuickContactActions
              phoneNumber={phoneNumber}
              whatsappLink={whatsappLink}
              className="hero-section__quick-actions"
            />
          </Space>
        </div>
      </section>

      <section id="inquiry-form" className="section-block">
        <Typography.Title level={2} className="theme-section-title">
          Inquiry Form
        </Typography.Title>
        <Typography.Paragraph className="theme-section-intro">
          Enter your details, select the required service, and describe your requirement.
          Only essential fields are included to keep the process simple and fast.
        </Typography.Paragraph>

        <Row gutter={[28, 28]}>
          <Col xs={24} lg={9}>
            <Card className="inquiry-page__info-card">
              <div className="about-card__ribbon">
                <span>Assurance</span>
              </div>
              <div className="inquiry-page__info-icon">
                <SafetyCertificateOutlined />
              </div>
              <Typography.Title level={3} className="inquiry-page__info-title">
                Safe and Confidential
              </Typography.Title>
              <Typography.Paragraph className="inquiry-page__info-text">
                Your information is safe and confidential. Our team reviews submitted requirements
                and follows up with the appropriate service response.
              </Typography.Paragraph>
              <Typography.Paragraph className="inquiry-page__info-note">
                Our team will contact you within 24 hours after submission.
              </Typography.Paragraph>
              <div className="inquiry-page__alt-contact">
                <Typography.Text className="service-detail-card__panel-label">
                  Alternative Contact
                </Typography.Text>
                <QuickContactActions phoneNumber={phoneNumber} whatsappLink={whatsappLink} />
              </div>
            </Card>
          </Col>
          <Col xs={24} lg={15}>
            <Card className="contact-form-card inquiry-page__form-card">
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
                      label="Phone Number"
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
                      label="Service Type"
                      name="serviceType"
                      rules={[{ required: true, message: 'Select a service type' }]}
                    >
                      <Input
                        placeholder="Security / Housekeeping / Facility / Deep Cleaning / Indoor Gardening"
                        list="service-types"
                      />
                    </Form.Item>
                    <datalist id="service-types">
                      {serviceOptions.map((option) => (
                        <option key={option.value} value={option.value} />
                      ))}
                    </datalist>
                  </Col>
                  <Col xs={24}>
                    <Form.Item
                      label="Message"
                      name="message"
                      rules={[{ required: true, message: 'Enter your requirements' }]}
                    >
                      <Input.TextArea rows={6} placeholder="Describe your service requirement" />
                    </Form.Item>
                  </Col>
                </Row>
                <Space wrap className="inquiry-page__form-actions">
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
                  <Button
                    size="large"
                    icon={<PhoneOutlined />}
                    className="inquiry-page__secondary-button"
                    href={`tel:${phoneNumber}`}
                  >
                    Call Now
                  </Button>
                </Space>
              </Form>
            </Card>
          </Col>
        </Row>
      </section>
    </div>
  );
}

export default InquiryPage;
