import type { APIRoute } from 'astro';
import jwt from 'jsonwebtoken';
import crypto from 'node:crypto';
import axios from 'axios';
import { Resend } from 'resend';
import { FormSubmissionTemplate, type NotiData, type NotifyConfig, type NotifyEmailConfig, type Receiver } from 'public/email-templates/formSubmissionEmail';
import contact from "src/config/contact.json";
import config from "src/config/config.json";

export const prerender = false;

const resendApiKey = import.meta.env.RESEND_API_KEY;
const resend = new Resend(resendApiKey);

const sendMail = async (
  fromEmail: string,
  notify_email: string,
  notiData: NotiData,
  notifyEmailConfig: NotifyEmailConfig,
  receiver: Receiver
) => {

  let emailResponse;
  
  try {

    const emailPayload = {
      from: fromEmail,
      to: notify_email,
      subject: 'New Form Submission Received',
      react: FormSubmissionTemplate({ notiData }, notifyEmailConfig, receiver),
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

export const POST: APIRoute = async ({ request }) => {

  try {

    if (request.method !== 'POST') {
      return new Response('Method Not Allowed', { status: 405 });
    }

    const configNotifyConfig = contact?.noti_config?.notify;
    const userNotifyEnabled = configNotifyConfig?.user;
    const adminNotifyEnabled = configNotifyConfig?.admin;

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

    const reqNotifyConfig = notiData.notifyConfig;

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

    const contactFormData = contact?.contact_form;
    const notify_email = contactFormData?.notify_email;

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

    const notiConfig = contact?.noti_config;
    const notifyFrom = notiConfig?.notify_from;

    const notifyEmailConfig = notiConfig?.notify_email_config || {
      header: {
        text: "Thank You For Contacting"
      },
      description: {
        text: "Your message has been received. I will get back to you soon."
      },
      note: {
        "text": "If you did not initiate this request, please ignore this email."
      },
      footer: {
        text: "Best regards,",
        name: "Mr Maney"
      }
    };

    const displayName = notifyFrom?.display_name || 'MrManey';
    const localPart = notifyFrom?.local_part || 'maney';
    const fromEmail = `${displayName} <${localPart}@${mailDomain}>`;

    const userEmail = notiData.submissionData.email;

    const adminUserSame = notify_email === userEmail;

    let adminEmailResponse: any = null;
    if (adminNotifyEnabled) {
      adminEmailResponse = await sendMail(
        fromEmail,
        notify_email,
        notiData,
        notifyEmailConfig,
        'admin'
      )
    }

    let userEmailResponse: any = null;
    if (userNotifyEnabled && !adminUserSame) {
      userEmailResponse = await sendMail(
        fromEmail,
        userEmail,
        notiData,
        notifyEmailConfig,
        'user'
      )
    }

    const adminSuccess = adminNotifyEnabled ? adminEmailResponse.success : null;
    const userSuccess = userNotifyEnabled ? adminUserSame ? adminEmailResponse?.success : userEmailResponse.success : null;

    if (adminSuccess === false && userSuccess === false) {
      console.log("======= Error sending email =======");
      console.log('Error sending email');
      console.log("Admin Email Response", adminEmailResponse);
      console.log("User Email Response", userEmailResponse);
      console.log("===================================");
      return new Response(
        JSON.stringify(
          adminEmailResponse
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
          adminSuccess,
          userSuccess,
          message: message,
          data: {
            notifyConfig: {
              configNotifyConfig,
              reqNotifyConfig,
            },
            adminEmailResponse,
            userEmailResponse: adminUserSame ? adminEmailResponse : userEmailResponse,
            adminUserSame,
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
