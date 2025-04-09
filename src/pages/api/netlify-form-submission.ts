import type { APIRoute } from 'astro';
import jwt from 'jsonwebtoken';
import crypto from 'node:crypto';
import axios from 'axios';
import { Resend } from 'resend';
import { FormSubmissionTemplate } from 'public/email-templates/formSubmissionEmail';
import contact from "src/config/contact.json";
import config from "src/config/config.json";

export const prerender = false;

export const POST: APIRoute = async ({ request }) => {

  if (request.method !== 'POST') {
    return new Response('Method Not Allowed', { status: 405 });
  }

  let notiData;
  try {
    notiData = await request.json();
  } catch (error) {
    console.error('Error parsing JSON:', error);
    return new Response('Invalid JSON', { status: 400 });
  }

  if (!notiData || !notiData.submissionData) {
    console.error('Invalid form submission data:', notiData);
    return new Response('Invalid form submission data', { status: 400 });
  }

  const resendApiKey = import.meta.env.RESEND_API_KEY;
  if (!resendApiKey) {
    console.log('Missing RESEND_API_KEY environment variable');
    return new Response('Server email configuration error', { status: 500 });
  }

  const contactFormData = contact?.contact_form;
  const notify_email = contactFormData?.notify_email;

  if (!notify_email) {
    console.log('Missing notify_email in contact.json');
    return new Response('Server email configuration error', { status: 500 });
  }

  const siteConfig = config?.server_config;
  const mailDomain = siteConfig?.mail_domain;

  if (!mailDomain) {
    console.log('Missing mail_domain in config.json');
    return new Response('Server email configuration error', { status: 500 });
  }

  const notifyFrom = contactFormData?.noti_config?.notify_from;

  const notifyEmailConfig = contactFormData?.noti_config?.notify_email_config || {
    footer_name: 'MrManey',
  };

  const displayName = notifyFrom?.display_name || 'MrManey';
  const localPart = notifyFrom?.local_part || 'maney';
  const fromEmail = `${displayName} <${localPart}@${mailDomain}>`;

  const userEmail = notiData.submissionData.email;

  const emailPayload = {
    from: fromEmail,
    // to: notify_email,
    to: "eipambinal@gmail.com",
    subject: 'New Form Submission Received',
    react: FormSubmissionTemplate({ notiData }, notifyEmailConfig, "admin"),
  };

  try {
    const resend = new Resend(resendApiKey);
    const emailResponse = await resend.emails.send(emailPayload);

    if (emailResponse.error) {
      console.error('Error sending email:', emailResponse.error);
      return new Response('Error sending email', { status: 500 });
    }

  } catch (error) {
    console.error('Error while sending email:', error);
    return new Response('Error sending email', { status: 500 });
  }

  return new Response('Form submission processed', { status: 200 });
};
