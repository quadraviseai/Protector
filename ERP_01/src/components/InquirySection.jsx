import { useState } from 'react';
import { Alert, Button, Card, Col, Form, Input, Row, Select, Space, Typography, message } from 'antd';
import QuickContactActions from './QuickContactActions';

function InquirySection({ services, phoneNumber, whatsappLink }) {
  const [form] = Form.useForm();
  const [messageApi, contextHolder] = message.useMessage();
  const [submitError, setSubmitError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (values) => {
    setSubmitError('');
    setIsSubmitting(true);

    await new Promise((resolve) => {
      window.setTimeout(resolve, 1200);
    });

    const shouldFail = values.email?.toLowerCase().includes('fail');

    if (shouldFail) {
      setIsSubmitting(false);
      setSubmitError('Submission failed. Please try again or use the quick contact options.');
      return;
    }

    setIsSubmitting(false);
    messageApi.success(`Inquiry submitted for ${values.serviceType}. We will contact you shortly.`);
    form.resetFields();
  };

  return (
    <section id="contact" className="section-block">
      {contextHolder}
      <Typography.Title level={2}>Request a Callback</Typography.Title>
      <Typography.Paragraph>
        Share your requirement and our team will connect with you for a suitable service proposal.
      </Typography.Paragraph>
      <Card className="contact-card">
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
              <Form.Item label="Name" name="name" rules={[{ required: true, message: 'Enter your name' }]}>
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
                rules={[
                  { required: true, message: 'Enter your email' },
                  { type: 'email', message: 'Enter a valid email address' }
                ]}
              >
                <Input placeholder="Email address" />
              </Form.Item>
            </Col>
            <Col xs={24} md={12}>
              <Form.Item
                label="Service Type"
                name="serviceType"
                rules={[{ required: true, message: 'Select a service' }]}
              >
                <Select
                  placeholder="Choose a service"
                  options={services.map((service) => ({
                    label: service.title,
                    value: service.title
                  }))}
                />
              </Form.Item>
            </Col>
            <Col xs={24}>
              <Form.Item label="Message" name="message">
                <Input.TextArea rows={4} placeholder="Tell us about your requirement" />
              </Form.Item>
            </Col>
          </Row>
          <Space wrap>
            <Button type="primary" htmlType="submit" size="large" loading={isSubmitting}>
              Submit Inquiry
            </Button>
            <QuickContactActions
              phoneNumber={phoneNumber}
              whatsappLink={whatsappLink}
              size="large"
            />
          </Space>
        </Form>
      </Card>
    </section>
  );
}

export default InquirySection;
