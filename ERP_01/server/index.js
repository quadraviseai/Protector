import 'dotenv/config';
import express from 'express';
import nodemailer from 'nodemailer';

const app = express();
const port = Number(process.env.PORT || 4000);
const smtpHost = process.env.SMTP_HOST || 'smtp.hostinger.com';
const smtpPort = Number(process.env.SMTP_PORT || 465);
const smtpSecure = process.env.SMTP_SECURE !== 'false';
const smtpUser = process.env.SMTP_USER;
const smtpPass = process.env.SMTP_PASS;
const contactEmail = process.env.CONTACT_TO_EMAIL || 'hello@protectorservices.in';

app.use(express.json());

const transporter = nodemailer.createTransport({
  host: smtpHost,
  port: smtpPort,
  secure: smtpSecure,
  auth: smtpUser && smtpPass
    ? {
        user: smtpUser,
        pass: smtpPass
      }
    : undefined
});

app.get('/api/health', (_req, res) => {
  res.json({ ok: true });
});

app.post('/api/contact', async (req, res) => {
  const { name, phone, email, subject, serviceType, message } = req.body ?? {};

  if (!name || !phone || !subject || !message) {
    return res.status(400).json({
      message: 'Name, phone, subject, and message are required.'
    });
  }

  if (!smtpUser || !smtpPass) {
    return res.status(500).json({
      message: 'SMTP is not configured. Set SMTP_USER and SMTP_PASS on the server.'
    });
  }

  const safeSubject = String(subject).trim() || 'Contact Inquiry';
  const safeEmail = String(email || '').trim();

  try {
    await transporter.sendMail({
      from: smtpUser,
      to: contactEmail,
      replyTo: safeEmail || undefined,
      subject: safeSubject,
      text: [
        `Name: ${String(name).trim()}`,
        `Phone: ${String(phone).trim()}`,
        `Email: ${safeEmail || 'Not provided'}`,
        `Service Type: ${String(serviceType || 'Not specified').trim()}`,
        '',
        'Message:',
        String(message).trim()
      ].join('\n')
    });

    return res.json({ ok: true });
  } catch (error) {
    console.error('Contact email send failed:', error);
    return res.status(500).json({
      message: 'Unable to send email right now. Please try again later.'
    });
  }
});

app.listen(port, () => {
  console.log(`Contact mail server running on http://localhost:${port}`);
});
