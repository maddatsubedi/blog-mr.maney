import type { APIRoute } from 'astro';
import { Resend } from 'resend';

// Initialize Resend with your API key
const resend = new Resend(import.meta.env.RESEND_API_KEY);

export const POST: APIRoute = async ({ request }) => {
    try {
        const body = await request.json();

        // Extract form submission data
        const { name, email, message } = body.data; // Assuming the form has these fields

        // Send an email using Resend
        const emailResponse = await resend.emails.send({
            from: 'Your Blog <noreply@yourdomain.com>',
            to: 'your-email@example.com', // Change to where you want to receive the notifications
            subject: 'New Form Submission Received',
            html: `
                <h2>New Form Submission</h2>
                <p><strong>Name:</strong> ${name}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Message:</strong> ${message}</p>
            `
        });

        return new Response(JSON.stringify({ success: true, emailResponse }), { status: 200 });
    } catch (error : any) {
        console.log(error);
        return new Response(JSON.stringify({ success: false, error: error.message }), { status: 500 });
    }
};