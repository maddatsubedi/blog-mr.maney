import { generateFormToken } from '@/lib/utils/jwt';
import type { APIRoute } from 'astro';

export const prerender = false;

const JWT_TOKEN_EXPIRATION = '10s'; // 10 seconds

export const POST: APIRoute = async ({ request }) => {
  try {

    if (request.method !== 'POST') {
      return new Response(
        JSON.stringify({
          success: false,
          error: 'Method Not Allowed',
          message: 'Method Not Allowed',
          errorCode: 'VALIDATION:METHOD_NOT_ALLOWED',
        }),
        {
          status: 405,
          headers: {
            'Content-Type': 'application/json',
          }
        }
      );
    }

    const contentType = request.headers.get('Content-Type');

    if (!contentType || !contentType.includes('application/json')) {
      console.log('Invalid Content-Type:', contentType);
      return new Response(
        JSON.stringify({
          success: false,
          error: 'Invalid Content-Type',
          message: 'Invalid Content-Type',
          errorCode: 'VALIDATION:INVALID_CONTENT_TYPE',
        }),
        {
          status: 400,
          headers: {
            'Content-Type': 'application/json',
          }
        }
      );
    }

    const data = await request.json();
    const { formKey } = data;

    if (!formKey) {
      console.log('Form Key is required:', data);
      return new Response(
        JSON.stringify({
          success: false,
          error: 'Form Key is required',
          message: 'Form Key is required',
          errorCode: 'VALIDATION:FORM_KEY_MISSING',
        }),
        {
          status: 400,
          headers: {
            'Content-Type': 'application/json',
          }
        }
      );
    }

    const tokenRes = generateFormToken(data, JWT_TOKEN_EXPIRATION);

    if (!tokenRes.success) {
      console.log('Token generation failed');
      console.log(tokenRes);
      return new Response(
        JSON.stringify({
          success: false,
          error: "Token generation failed",
          message: "Token generation failed",
          errorCode: "JWT:TOKEN_GENERATION_ERROR",
          data: {
            tokenRes,
          }
        }),
        {
          status: 400,
          headers: {
            'Content-Type': 'application/json',
          }
        }
      );
    }

    const token = tokenRes.data?.token;

    if (!token) {
      console.log('Token is missing:', tokenRes);
      return new Response(
        JSON.stringify({
          success: false,
          error: 'Token is missing',
          message: 'Token is missing',
          errorCode: 'JWT:TOKEN_MISSING',
          data: {
            tokenRes,
          }
        }),
        {
          status: 400,
          headers: {
            'Content-Type': 'application/json',
          }
        }
      );
    }

    return new Response(
      JSON.stringify({
        success: true,
        message: 'Token generated successfully',
        data: {
          token,
        }
      }),
      {
        status: 200,
        headers: {
          'Content-Type': 'application/json',
        }
      }
    );
  } catch (error) {
    console.log(error);
    return new Response(
      JSON.stringify({
        success: false,
        message: 'Internal server error',
        errorCode: 'EXCEPTION:GENERATE_TOKEN_ERROR',
        error: error
      }),
      {
        status: 500,
        headers: {
          'Content-Type': 'application/json',
        }
      }
    );
  }
};