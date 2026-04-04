import { useEffect } from 'react';
import { ConfigProvider, Layout } from 'antd';
import { animate, inView, stagger } from 'motion';
import Header from './components/Header';
import Footer from './components/Footer';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import IndustriesPage from './pages/IndustriesPage';
import InquiryPage from './pages/InquiryPage';
import LandingPage from './pages/LandingPage';
import ServicePage from './pages/ServicePage';

const { Content } = Layout;

function App() {
  const currentPage =
    typeof window !== 'undefined'
      ? window.location.pathname.replace(/\/+$/, '') || '/'
      : '/';

  useEffect(() => {
    const sections = Array.from(document.querySelectorAll('.section-block'));

    sections.forEach((section) => {
      section.style.opacity = '0';
      section.style.transform = 'translateY(36px)';
      section.style.willChange = 'opacity, transform';

      Array.from(
        section.querySelectorAll(
          '.theme-section-title, .theme-section-intro, .ant-card, .quick-contact-actions, .service-nav-section__links'
        )
      ).forEach((item) => {
        item.setAttribute('data-motion-item', 'true');
        item.style.opacity = '0';
        item.style.transform = 'translateY(24px)';
        item.style.willChange = 'opacity, transform';
      });
    });

    const stopInView = inView(
      '.section-block',
      (element) => {
        animate(
          element,
          { opacity: [0, 1], transform: ['translateY(36px)', 'translateY(0px)'] },
          { duration: 0.7, easing: [0.22, 1, 0.36, 1] }
        );

        const items = element.querySelectorAll('[data-motion-item="true"]');

        if (items.length > 0) {
          animate(
            items,
            { opacity: [0, 1], transform: ['translateY(24px)', 'translateY(0px)'] },
            {
              delay: stagger(0.08, { startDelay: 0.08 }),
              duration: 0.55,
              easing: [0.22, 1, 0.36, 1]
            }
          );
        }
      },
      { amount: 0.2, margin: '0px 0px -10% 0px' }
    );

    return () => {
      stopInView();

      sections.forEach((section) => {
        section.style.opacity = '';
        section.style.transform = '';
        section.style.willChange = '';

        Array.from(section.querySelectorAll('[data-motion-item="true"]')).forEach((item) => {
          item.removeAttribute('data-motion-item');
          item.style.opacity = '';
          item.style.transform = '';
          item.style.willChange = '';
        });
      });
    };
  }, [currentPage]);

  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: '#1f8f3a',
          colorInfo: '#1f8f3a',
          colorSuccess: '#16a34a',
          colorText: '#1f2937',
          colorTextHeading: '#111827',
          colorBgBase: '#f5f7fa',
          colorBorder: '#e5e7eb',
          fontFamily: '"Segoe UI", "Trebuchet MS", sans-serif',
          borderRadius: 24,
          controlHeight: 44,
          boxShadowTertiary: '0 10px 28px rgba(15, 23, 42, 0.12)'
        },
        components: {
          Button: {
            borderRadius: 16,
            fontWeight: 600
          },
          Card: {
            borderRadiusLG: 24
          },
          Menu: {
            itemBg: 'transparent',
            horizontalItemSelectedBg: 'transparent'
          }
        }
      }}
    >
      <Layout className="app-layout">
        <Header />
        <Content className="site-content">
          {currentPage === '/services' ? (
            <ServicePage />
          ) : currentPage === '/industries' ? (
            <IndustriesPage />
          ) : currentPage === '/inquiry' ? (
            <InquiryPage />
          ) : currentPage === '/about' ? (
            <AboutPage />
          ) : currentPage === '/contact' ? (
            <ContactPage />
          ) : (
            <LandingPage />
          )}
        </Content>
        <Footer />
      </Layout>
    </ConfigProvider>
  );
}

export default App;
