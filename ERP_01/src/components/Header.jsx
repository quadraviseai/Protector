import { useEffect, useState } from 'react';
import { Button, Drawer, Layout, Menu, Typography } from 'antd';
import { MenuOutlined } from '@ant-design/icons';
import logo from '../assect/img/logo.png';

const navItems = [
  { key: 'home', label: <a href="/">Home</a> },
  { key: 'services', label: <a href="/services">Services</a> },
  { key: 'industries', label: <a href="/industries">Industries</a> },
  { key: 'about', label: <a href="/about">About</a> },
  { key: 'inquiry', label: <a href="/inquiry">Get Quote</a> },
  { key: 'contact', label: <a href="/contact">Contact</a> }
];

const pathToKeyMap = {
  '/': 'home',
  '/services': 'services',
  '/industries': 'industries',
  '/about': 'about',
  '/inquiry': 'inquiry',
  '/contact': 'contact'
};

function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const selectedKey = pathToKeyMap[window.location.pathname] ?? 'home';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 24);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <Layout.Header className={`site-header${isScrolled ? ' site-header--scrolled' : ''}`}>
      <div className="site-header__brand">
        <img className="site-header__logo-mark" src={logo} alt="Protector Services Pvt Ltd" />
        <div className="site-header__brand-copy">
          <span className="site-header__brand-name">Protector</span>
          <span className="site-header__brand-tag">Services Pvt Ltd</span>
        </div>
      </div>
      <Button
        type="text"
        icon={<MenuOutlined />}
        className="site-header__menu-toggle"
        aria-label="Open navigation menu"
        onClick={() => setIsMobileMenuOpen(true)}
      />
      <Menu
        mode="horizontal"
        items={navItems}
        selectedKeys={[selectedKey]}
        className="site-header__menu"
      />
      <div className="site-header__contact">
        <Typography.Text>Call us on:</Typography.Text>
        <a href="tel:+919900431123">+91 99004 31123</a>
      </div>
      <Drawer
        placement="right"
        open={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
        className="site-header__mobile-drawer"
        closeIcon={null}
      >
        <div className="site-header__mobile-drawer-header">
          <div className="site-header__brand">
            <img className="site-header__logo-mark" src={logo} alt="Protector Services Pvt Ltd" />
            <div className="site-header__brand-copy">
              <span className="site-header__brand-name">Protector</span>
              <span className="site-header__brand-tag">Services Pvt Ltd</span>
            </div>
          </div>
          <Button type="text" onClick={() => setIsMobileMenuOpen(false)}>
            Close
          </Button>
        </div>
        <Menu
          mode="inline"
          items={navItems}
          selectedKeys={[selectedKey]}
          className="site-header__mobile-menu"
          onClick={() => setIsMobileMenuOpen(false)}
        />
        <div className="site-header__mobile-contact">
          <Typography.Text>Call us on:</Typography.Text>
          <a href="tel:+919900431123">+91 99004 31123</a>
        </div>
      </Drawer>
    </Layout.Header>
  );
}

export default Header;
