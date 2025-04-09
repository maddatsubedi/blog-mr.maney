import type { APIRoute } from 'astro';
import jwt from 'jsonwebtoken';
import crypto from 'node:crypto';
import axios from 'axios';
import { Resend } from 'resend';
import { FormSubmissionTemplate } from 'public/email-templates/formSubmissionEmail';

export const prerender = false;

function isValidSignature(signature: string, rawBody: Buffer, secret: string): boolean {
  try {
    // Verify the token; make sure it comes from Netlify with HS256
    const decoded = jwt.verify(signature, secret, {
      issuer: 'netlify',
      algorithms: ['HS256'],
    }) as { sha256: string };

    // Create the SHA256 hash of the raw body
    const hashedBody = crypto.createHash('sha256').update(rawBody).digest('hex');
    return decoded.sha256 === hashedBody;
  } catch (error) {
    console.error('JWT verification error:', error);
    return false;
  }
}

/**
 * POST API Route: Processes Netlify Form Submissions.
 */
export const POST: APIRoute = async ({ request }) => {

  console.log('Received request:', request.method, request.url);

  if (request.method !== 'POST') {
    return new Response('Method Not Allowed', { status: 405 });
  }

  const rawBody = Buffer.from(await request.arrayBuffer());

  const signature = request.headers.get('x-webhook-signature');
  if (!signature) {
    return new Response('Signature missing', { status: 400 });
  }

  const jwsSecret = import.meta.env.NETLIFY_JWS_SECRET;
  if (!jwsSecret) {
    console.error('Missing NETLIFY_JWS_SECRET environment variable');
    return new Response('Server configuration error', { status: 500 });
  }

  if (!isValidSignature(signature, rawBody, jwsSecret)) {
    return new Response('Invalid signature', { status: 401 });
  }

  let formPayload: any;
  try {
    formPayload = JSON.parse(rawBody.toString());
  } catch (error) {
    console.error('Error parsing JSON:', error);
    return new Response('Invalid JSON', { status: 400 });
  }

  console.log(formPayload);

  const resendApiKey = import.meta.env.RESEND_API_KEY;
  if (!resendApiKey) {
    console.error('Missing RESEND_API_KEY environment variable');
    return new Response('Server email configuration error', { status: 500 });
  }

  const emailPayload = {
    from: 'MrManey <maney@maddat.online>',
    to: 'eipambinal@gmail.com',
    subject: 'New Form Submission Received',
    react: FormSubmissionTemplate({
      formName: formPayload.formName || 'Unknown Form',
      data: formPayload,
      submissionId: formPayload.id,
      submissionTime: new Date().toISOString()
    }),
  };

  try {
    const resend = new Resend(resendApiKey);
    const emailResponse = await resend.emails.send(emailPayload);

    console.log(emailResponse);

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
