import type { Contact } from '@/config/types';
import type { NotiData, Receiver } from '@/pages/api/netlify-form-submission';
import React from 'react';

export const FormSubmissionTemplate = (
  notiData: NotiData,
  contactConfig: Contact,
  receiver: Receiver
) => {
  const { submissionData, submissionDate, formName, formLabel } = notiData;
  const formattedDate = new Date(submissionDate).toLocaleString();
  const isAdmin = receiver === 'admin';
  const notifyEmailConfig = contactConfig?.noti_config?.notify_email_config;
  const emailContent = notifyEmailConfig?.email_content;

  const themeColors = {
    primary: "#F71B35",
    secondary: "#FEE140",
    body: "#fafafa",
    bodyLight: "#f9f9f9",
    border: "#EBEBEB",
    themeLight: "#E5E5E5",
    themeDark: "#1a202c",
    textDefault: "#888888",
    textDark: "#333",
    textLightDark: "#555",
    textGray: "#666",
    textUltraLight: "rgb(245, 245, 245)",
    textLight: "#ceced0",
    white: "#ffffff"
  };

  return (
    <div style={{
      maxWidth: '600px',
      margin: '0 auto',
      padding: '1.25rem',
      backgroundColor: themeColors.white,
      fontFamily: 'Arial, sans-serif',
      borderRadius: '8px',
      border: '1px solid #e1e1e1',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)'
    }}>
      <header style={{
        backgroundColor: themeColors.primary,
        borderRadius: '8px 8px 0 0',
        padding: '1.5rem',
      }}>
        <h1 style={{
          fontSize: '1.5rem',
          margin: '0',
          textAlign: 'center',
          color: themeColors.white,
        }}>
          {
            isAdmin ?
              `New ${formLabel} Submission` :
              emailContent.header.text || "Thank You For Contacting"
          }
        </h1>
        <hr style={{
          border: 'none',
          borderTop: `2px solid ${themeColors.themeLight}`,
          margin: '1rem 0'
        }} />
        {
          isAdmin && (
            <p style={{
              color: themeColors.textUltraLight,
              fontSize: '0.9rem',
              margin: '0.5rem 0'
            }}>
              <strong>Form:</strong> {formLabel}
            </p>
          )
        }
        <p style={{
          color: themeColors.textUltraLight,
          fontSize: '0.9rem',
          margin: '0'
        }}>
          <strong>Date:</strong> {formattedDate}
        </p>
      </header>

      <p
        style={{
          margin: '30px 0 0 0',
          textAlign: 'center',
          fontSize: '1rem',
          color: themeColors.textLightDark,
          fontWeight: '600',
        }}
      >
        {isAdmin ? (
          <>
            A new message has been received from the {formName} form. Please check the details below:
          </>
        ) : (
          <>
            {
              emailContent.description.text || "Your message has been received. I will get back to you soon."
            }
          </>
        )}
      </p>

      <div style={{
        borderRadius: '8px',
        padding: '1.5rem',
        boxShadow: `0 2px 8px ${themeColors.themeLight}`,
        borderBottom: `2px solid ${themeColors.border}`,
        borderTop: `2px solid ${themeColors.border}`,
        backgroundColor: themeColors.body,
        marginTop: '30px'
      }}>
        <h2 style={{
          color: themeColors.primary,
          fontSize: '1.25rem',
          margin: '0 0 1rem'
        }}>Submission Details</h2>

        {Object.entries(submissionData).map(([key, value], index) => (
          <div key={key} style={{
            marginBottom: index < Object.entries(submissionData).length - 1 ? '1rem' : '0',
            paddingBottom: index < Object.entries(submissionData).length - 1 ? '1rem' : '0',
            borderBottom: index < Object.entries(submissionData).length - 1 ? `1px solid ${themeColors.border}` : 'none'
          }}>
            <span style={{
              display: 'block',
              color: themeColors.textDark,
              fontSize: '1rem',
              fontWeight: '600',
              textTransform: 'capitalize'
            }}>{key}:</span>
            <span style={{
              color: themeColors.textDefault,
              wordBreak: 'break-word',
              fontSize: '0.9rem',
              fontWeight: '500',
              display: 'inline-block',
              marginTop: '5px',
            }}>{value}</span>
          </div>
        ))}
      </div>

      <p
        style={{
          margin: '30px 0 0 0',
          textAlign: 'center',
          fontSize: '1rem',
          color: themeColors.textGray,
        }}
      >
        {isAdmin ? (
          <>
            You can view the submission details in your admin panel or contact the user directly using the email provided.
          </>
        ) : (
          <>
            {
              emailContent.note.text || "If you did not initiate this request, please ignore this email."
            }
          </>
        )}
      </p>

      <footer style={{
        textAlign: 'center',
        fontSize: '14px',
        color: themeColors.textLightDark,
        borderTop: '1px solid #e1e1e1',
        padding: '15px',
        marginTop: '30px',
        backgroundColor: themeColors.bodyLight,
        borderRadius: '0 0 8px 8px'
      }}>
        <p style={{ margin: '0', fontSize: '15px' }}>
          {
            isAdmin ?
              'Best regards,' :
              emailContent.footer.text || "Best regards,"
          }
        </p>
        <p style={{ margin: '5px 0 0 0', fontSize: '16px', fontWeight: 'bold', color: themeColors.primary }}>
          <strong>
            {
              emailContent.footer.name || "Mr Maney"
            }
          </strong>
        </p>
      </footer>
    </div >
  );
};