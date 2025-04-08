import React from 'react';

interface FormSubmissionEmailProps {
  formName: string;
  data: Record<string, any>;
  submissionId: string;
  submissionTime: string;
}

export const FormSubmissionTemplate = ({
  formName,
  data,
  submissionId,
  submissionTime
}: FormSubmissionEmailProps) => (
  <html>
    <head>
      <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
      <title>New Form Submission</title>
    </head>
    <body style={{ margin: 0, padding: 0, backgroundColor: '#f6f9fc' }}>
      <table width="100%" border={0} cellPadding="0" cellSpacing="0">
        <tr>
          <td align="center" style={{ padding: '40px 20px' }}>
            <table width="100%" max-width="600px" border={0} cellPadding="0" cellSpacing="0" style={{ backgroundColor: '#ffffff', borderRadius: '8px', boxShadow: '0 2px 10px rgba(0,0,0,0.1)' }}>
              {/* Header */}
              <tr>
                <td style={{ padding: '40px 30px', borderBottom: '1px solid #eaeaea' }}>
                  <h1 style={{ margin: 0, fontSize: '24px', color: '#1a1a1a' }}>
                    New Form Submission
                  </h1>
                  <p style={{ margin: '10px 0 0', color: '#666666' }}>
                    From {formName}
                  </p>
                </td>
              </tr>

              {/* Content */}
              <tr>
                <td style={{ padding: '30px' }}>
                  <table width="100%">
                    {/* Submission ID */}
                    <tr>
                      <td style={{ padding: '10px 0', borderBottom: '1px solid #eeeeee' }}>
                        <strong>Submission ID:</strong> {submissionId}
                      </td>
                    </tr>

                    {/* Form Data */}
                    {Object.entries(data).map(([key, value]) => (
                      <tr key={key}>
                        <td style={{ padding: '15px 0', borderBottom: '1px solid #eeeeee' }}>
                          <div style={{ fontSize: '16px', color: '#1a1a1a', marginBottom: '4px' }}>
                            {key.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())}
                          </div>
                          <div style={{ color: '#4a4a4a', fontSize: '14px' }}>
                            {Array.isArray(value) ? value.join(', ') : value}
                          </div>
                        </td>
                      </tr>
                    ))}

                    {/* Timestamp */}
                    <tr>
                      <td style={{ padding: '20px 0 0', color: '#999999', fontSize: '12px' }}>
                        Submitted at: {new Date(submissionTime).toLocaleString()}
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>

              {/* Footer */}
              <tr>
                <td style={{ padding: '20px 30px', backgroundColor: '#f8f9fa', borderTop: '1px solid #eaeaea' }}>
                  <p style={{ margin: 0, fontSize: '12px', color: '#666666', textAlign: 'center' }}>
                    This is an automated message from {process.env.SITE_NAME || 'your website'}
                  </p>
                </td>
              </tr>
            </table>
          </td>
        </tr>
      </table>
    </body>
  </html>
);