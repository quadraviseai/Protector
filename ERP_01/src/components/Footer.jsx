import { Col, Layout, Row, Space, Typography } from 'antd';
import logo from '../assect/img/logo.png';

function Footer() {
  return (
    <Layout.Footer id="footer-contact" className="site-footer">
      <Row gutter={[24, 24]}>
        <Col xs={24} md={8}>
          <div className="site-footer__brand">
            <img className="site-footer__logo" src={logo} alt="Protector Services Pvt Ltd" />
            <Typography.Title level={5}>Protector Services Pvt Ltd</Typography.Title>
          </div>
          <Typography.Paragraph>
            Security, housekeeping, facility management, and B2B support services for
            modern businesses.
          </Typography.Paragraph>
        </Col>
        <Col xs={24} md={8}>
          <Typography.Title level={5}>Contact</Typography.Title>
          <Typography.Paragraph>
            Phone: <a href="tel:+919900431123">+91 99004 31123</a>
          </Typography.Paragraph>
          <Typography.Paragraph>
            Email: <a href="mailto:contact@protectorservices.in">contact@protectorservices.in</a>
          </Typography.Paragraph>
        </Col>
        <Col xs={24} md={8}>
          <Typography.Title level={5}>Quick Links</Typography.Title>
          <Space direction="vertical" size={4}>
            <a href="/services">Services</a>
            <a href="/industries">Industries</a>
            <a href="/about">About</a>
            <a href="/contact">Contact</a>
          </Space>
          <Typography.Title level={5} className="site-footer__subheading">
            Address
          </Typography.Title>
          <Typography.Paragraph>
            No. 25A 1st floor Venkateshwara, Commercial 6th Main, R T Nagar, Bangalore North, Bangalore - 560032, Karnataka
          </Typography.Paragraph>
        </Col>
      </Row>
    </Layout.Footer>
  );
}

export default Footer;
