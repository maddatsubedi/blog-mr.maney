import type { APIRoute } from 'astro';
import jwt from 'jsonwebtoken';
import crypto from 'node:crypto';
import axios from 'axios';
import { Resend } from 'resend';
import { FormSubmissionTemplate } from 'public/email-templates/formSubmissionEmail';
import _contact from "src/config/contact.json";
import config from "src/config/config.json";
import type { Contact, ContactFormConfig, Notify, NotifyEmailConfig } from 'src/config/types';

const contactConfig = _contact as Contact;

export const prerender = false;

const resendApiKey = import.meta.env.RESEND_API_KEY;
const resend = new Resend(resendApiKey);

export type SubmissionData = {
  name: string;
  email: string;
  message: string;
};

export type NotiData = {
  submissionData: SubmissionData;
  submissionDate: string;
  formName: string;
  formLabel: string;
  reqNotifyConfig: Notify;
};

export type Receiver = 'user' | 'admin';

const sendMail = async (
  notiData: NotiData,
  contactConfig: Contact,
  receiver: Receiver
) => {

  const notiConfig = contactConfig?.noti_config;
  const notifyFrom = notiConfig?.notify_from;

  const siteConfig = config?.server_config;
  const mailDomain = siteConfig?.mail_domain;

  const displayName = notifyFrom?.display_name || 'MrManey';
  const localPart = notifyFrom?.local_part || 'maney';
  const fromEmail = `${displayName} <${localPart}@${mailDomain}>`;

  const contactFormConfig: ContactFormConfig = contactConfig?.contact_form;
  const notify_email = contactFormConfig?.notify_email;

  const userEmail = notiData.submissionData.email;
  const isAdmin = receiver === 'admin';

  const toEmail = isAdmin ? notify_email : userEmail;

  let emailResponse;

  try {

    const emailPayload = {
      from: fromEmail,
      to: toEmail,
      subject: 'New Form Submission Received',
      react: FormSubmissionTemplate(notiData, contactConfig, receiver),
    };

    emailResponse = await resend.emails.send(emailPayload);

    if (emailResponse.error) {
      console.log('Error sending email:', emailResponse.error);
      return {
        success: false,
        message: 'Error sending email',
        errorCode: "API:RESEND_API_ERROR",
        error: emailResponse.error,
        data: {
          emailResponse,
        }
      }
    }

  } catch (error) {
    console.log('Error while sending email:', error);
    return {
      success: false,
      message: 'Error sending email',
      errorCode: "EXCEPTION:NOTIFY_EMAIL_ERROR",
      error: error,
      data: {
        emailResponse,
      }
    }
  }

  return {
    success: true,
    message: 'Email sent successfully',
    data: {
      emailResponse,
    }
  };
}

export const POST: APIRoute = async ({ request, clientAddress }) => {

  console.log(clientAddress);

  return new Response(
    JSON.stringify(
      {
        success: false,
        message: 'Not implemented',
        errorCode: "NOT_IMPLEMENTED",
        error: 'Not implemented',
      }
    ),
    {
      status: 501,
      headers: {
        'Content-Type': 'application/json',
      },
    }
  );

  try {

    if (request.method !== 'POST') {
      return new Response('Method Not Allowed', { status: 405 });
    }

    const notify_email = contactConfig?.contact_form?.notify_email;

    const userNotifyEnabled = contactConfig?.noti_config?.notify?.user;
    const adminNotifyEnabled = contactConfig?.noti_config?.notify?.admin;

    if (!userNotifyEnabled && !adminNotifyEnabled) {
      console.log('Notification is disabled in contact.json');
      return new Response(
        JSON.stringify(
          {
            success: false,
            message: 'Notification is disabled',
            errorCode: "CONFIG:NOTIFICATION_DISABLED",
            error: 'Notification is disabled',
          }
        ),
        {
          status: 500,
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );
    }

    let notiData: NotiData;
    try {
      notiData = await request.json();
    } catch (error) {
      console.log('Error parsing JSON:', error);
      return new Response(
        JSON.stringify(
          {
            success: false,
            message: 'Invalid JSON format',
            errorCode: "VALIDATION:INVALID_JSON_FORMAT",
            error: 'Invalid JSON format',
          }
        ),
        {
          status: 400,
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );
    }

    if (!notiData || !notiData.submissionData) {
      console.log('Invalid form submission data:', notiData);
      return new Response(
        JSON.stringify(
          {
            success: false,
            message: 'Invalid form submission data',
            errorCode: "VALIDATION:INVALID_FORM_SUBMISSION_DATA",
            error: 'Invalid form submission data',
          }
        ),
        {
          status: 400,
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );
    }

    if (!resendApiKey) {
      console.log('Missing RESEND_API_KEY environment variable');
      return new Response(
        JSON.stringify(
          {
            success: false,
            message: 'Server email configuration error',
            errorCode: "CONFIG:RESEND_API_KEY_MISSING",
            error: 'Missing RESEND_API_KEY environment variable',
          }
        ),
        {
          status: 500,
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );
    }

    if (!notify_email) {
      console.log('Missing notify_email in contact.json');
      return new Response(
        JSON.stringify(
          {
            success: false,
            message: 'Server email configuration error',
            errorCode: "CONFIG:NOTIFY_EMAIL_MISSING",
            error: 'Missing notify_email in contact.json',
          }
        ),
        {
          status: 500,
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );
    }

    const siteConfig = config?.server_config;
    const mailDomain = siteConfig?.mail_domain;

    if (!mailDomain) {
      console.log('Missing mail_domain in config.json');
      return new Response(
        JSON.stringify(
          {
            success: false,
            message: 'Server email configuration error',
            errorCode: "CONFIG:MAIL_DOMAIN_MISSING",
            error: 'Missing mail_domain in config.json',
          }
        ),
        {
          status: 500,
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );
    }

    const userEmail = notiData.submissionData.email;

    const adminUserSame = notify_email === userEmail;

    let adminEmailResponse: any = null;
    if (adminNotifyEnabled) {
      adminEmailResponse = await sendMail(
        notiData,
        contactConfig,
        'admin'
      )
    }

    let userEmailResponse: any = null;
    const userSendCondition = userNotifyEnabled && (!adminUserSame || !adminNotifyEnabled);
    if (userSendCondition) {
      userEmailResponse = await sendMail(
        notiData,
        contactConfig,
        'user'
      )
    }

    const adminSuccess = adminNotifyEnabled ? adminEmailResponse?.success : null;
    const userSuccess = userSendCondition ? userEmailResponse?.success : null;

    if (adminSuccess === false && userSuccess === false) {
      console.log("======= Error sending email =======");
      console.log('Error sending email');
      console.log("Admin Email Response", adminEmailResponse);
      console.log("User Email Response", userEmailResponse);
      console.log("===================================");
      return new Response(
        JSON.stringify(
          {
            success: false,
            message: 'Error sending email',
            errorCode: "API:RESEND_API_ERROR",
            error: 'Error sending email',
            data: {
              adminEmailResponse,
              userEmailResponse,
            }
          }
        ),
        {
          status: 500,
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );
    }

    let message: string;
    if (adminSuccess === true && userSuccess === true) {
      message = 'Emails successfully sent to both admin and user';
    } else if (adminSuccess === true) {
      message = 'Email successfully sent to admin';
    } else if (userSuccess === true) {
      message = 'Email successfully sent to user';
    } else {
      message = 'Email sent successfully';  // this case should not happen due to the above checks
    }

    return new Response(
      JSON.stringify(
        {
          success: true,
          message: message,
          adminSuccess,
          userSuccess,
          data: {
            notiData,
            contactConfig,
            adminUserSame,
            adminEmailResponse,
            userEmailResponse,
          }
        }
      ),
      {
        status: 200,
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );
  } catch (error) {
    console.log('Error in form submission handler:', error);
    return new Response(
      JSON.stringify(
        {
          success: false,
          message: 'Internal server error',
          errorCode: "EXCEPTION:FORM_SUBMIT_NOTIFY_EMAIL_ERROR",
          error: error,
        }
      ),
      {
        status: 500,
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );
  }
};
