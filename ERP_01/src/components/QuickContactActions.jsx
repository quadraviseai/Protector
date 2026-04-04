import { Button, Space, Tooltip } from 'antd';
import { PhoneOutlined, WhatsAppOutlined } from '@ant-design/icons';

function QuickContactActions({
  phoneNumber,
  whatsappLink,
  size = 'large',
  className = '',
  showWhatsApp = true
}) {
  const hasPhone = Boolean(phoneNumber);
  const hasWhatsApp = Boolean(whatsappLink);

  return (
    <Space wrap className={className}>
      <Tooltip title={hasPhone ? 'Call now' : 'Phone contact unavailable'}>
        <Button
          className="quick-contact-actions__phone"
          icon={<PhoneOutlined />}
          size={size}
          href={hasPhone ? `tel:${phoneNumber}` : undefined}
          disabled={!hasPhone}
        >
          Call Now
        </Button>
      </Tooltip>
      {showWhatsApp ? (
        <Tooltip title={hasWhatsApp ? 'Open WhatsApp' : 'WhatsApp contact unavailable'}>
          <Button
            className="quick-contact-actions__whatsapp"
            icon={<WhatsAppOutlined />}
            size={size}
            href={hasWhatsApp ? whatsappLink : undefined}
            target={hasWhatsApp ? '_blank' : undefined}
            disabled={!hasWhatsApp}
          >
            WhatsApp
          </Button>
        </Tooltip>
      ) : null}
    </Space>
  );
}

export default QuickContactActions;
