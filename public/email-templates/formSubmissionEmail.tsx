import React from 'react';

type SubmissionData = {
  name: string;
  email: string;
  message: string;
};

export type NotiData = {
  submissionData: SubmissionData;
  submissionDate: string;
  formName: string;
  formLabel: string;
};

export type NotifyEmailConfig = {
  footer_name: string;
}

export type Receiver = 'user' | 'admin';

export const FormSubmissionTemplate = (
  { notiData }: { notiData: NotiData },
  notifyEmailConfig: NotifyEmailConfig,
  receiver: Receiver
) => {
  const { submissionData, submissionDate, formName, formLabel } = notiData;
  const formattedDate = new Date(submissionDate).toLocaleString();
  const isAdmin = receiver === 'admin';

  const themeColors = {
    primary: "#F71B35",
    secondary: "#FEE140",
    body: "#fafafa",
    border: "#EBEBEB",
    themeLight: "#E5E5E5",
    themeDark: "#1a202c",
    textDefault: "#888888",
    textDark: "#222",
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
        textAlign: 'center',
      }}>
        <img
          src="https://i.ibb.co/T1wrb9Z/logo.png"
          alt="Gharsewa Logo"
          style={{ width: '80px', height: 'auto' }}
        />
        <h1 style={{
          color: themeColors.textDark,
          fontSize: '1.5rem',
        }}>
          {isAdmin ? `New ${formLabel} Submission` : 'Thank You For Contacting'}
        </h1>
        {/* <p style={{
          color: themeColors.textDefault,
          fontSize: '0.9rem',
          margin: '0.5rem 0 0'
        }}>
          {formattedDate}
        </p> */}
      </header>

      {/* Main Content */}
      <div style={{ marginTop: '30px', backgroundColor: themeColors.body }}>
        {isAdmin ? (
          <>
            <div style={{
              borderRadius: '8px',
              padding: '1.5rem',
              boxShadow: `0 2px 8px ${themeColors.themeLight}`,
              borderBottom: `2px solid ${themeColors.border}`,
              borderTop: `2px solid ${themeColors.border}`
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
                    fontWeight: '500',
                    textTransform: 'capitalize'
                  }}>{key}:</span>
                  <span style={{
                    color: themeColors.textDefault,
                    wordBreak: 'break-word'
                  }}>{value}</span>
                </div>
              ))}
            </div>
          </>
        ) : (
          <div style={{ textAlign: 'center' }}>
            <div style={{
              backgroundColor: themeColors.secondary,
              borderRadius: '50%',
              width: '80px',
              height: '80px',
              margin: '0 auto 1.5rem',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke={themeColors.textDark} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                <polyline points="22 4 12 14.01 9 11.01" />
              </svg>
            </div>
            <h2 style={{
              color: themeColors.textDark,
              fontSize: '1.5rem',
              margin: '0 0 1rem'
            }}>We've Received Your Message</h2>
            <p style={{ color: themeColors.textDefault }}>
              Thank you <strong>{submissionData.name}</strong> for reaching out through our {formName} form.
              We'll review your message and get back to you within 24-48 hours.
            </p>
          </div>
        )}
      </div>

      <footer style={{
        textAlign: 'center',
        fontSize: '14px',
        color: '#555',
        borderTop: '1px solid #e1e1e1',
        padding: '15px',
        marginTop: '30px',
        backgroundColor: '#f9f9f9',
        borderRadius: '0 0 8px 8px'
      }}>
        <p style={{ margin: '0', fontSize: '15px' }}>
          {
            isAdmin ?
              'Best regards,' :
              'Best regards,'
          }
        </p>
        <p style={{ margin: '5px 0 0 0', fontSize: '16px', fontWeight: 'bold', color: themeColors.primary }}>
          <strong>
            {
              notifyEmailConfig.footer_name
            }
          </strong>
        </p>
      </footer>
    </div>
  );
};