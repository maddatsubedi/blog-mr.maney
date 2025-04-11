import jwt from 'jsonwebtoken';

const JWT_SECRET = import.meta.env.JWT_SECRET;
const JWT_FORM_KEY = import.meta.env.PUBLIC_JWT_CONTACT_FORM_KEY;

export interface ContactFormTokenPayload {
  formKey: string;
}

interface JwtPayload {
  data: ContactFormTokenPayload;
  iat: number;
  exp: number;
}

export const generateFormToken = (tokenPayload: ContactFormTokenPayload, expiresIn = "1m") => {
  try {
    if (!tokenPayload || !tokenPayload.formKey) {
      return {
        success: false,
        error: 'Form key is required',
        message: 'Form key is required',
        errorCode: 'VALIDATION:FORM_KEY_MISSING',
      }
    }

    if (!JWT_SECRET) {
      return {
        success: false,
        error: 'JWT_SECRET is not defined',
        message: 'JWT_SECRET is not defined',
        errorCode: 'CONFIG:JWT_SECRET_NOT_DEFINED',
      }
    };
    // @ts-ignore
    const token = jwt.sign({ data: tokenPayload }, JWT_SECRET, { expiresIn });
    return {
      success: true,
      message: 'Token generated successfully',
      data: {
        token,
      }
    }
  } catch (error) {
    console.log("Error generating JWT token:", error);
    return {
      success: false,
      error,
      message: 'Error generating token',
      errorCode: 'TOKEN_GENERATION_ERROR',
    }
  }
};

export const verifyFormToken = (token: string) => {
  try {
    if (!token) {
      return {
        success: false,
        error: 'Token is required',
        message: 'Token is required',
        errorCode: 'VALIDATION:TOKEN_MISSING',
      }
    }
    if (!JWT_SECRET) {
      return {
        success: false,
        error: 'JWT_SECRET is not defined',
        message: 'JWT_SECRET is not defined',
        errorCode: 'CONFIG:JWT_SECRET_NOT_DEFINED',
      }
    }
    const decoded = jwt.verify(token, JWT_SECRET) as JwtPayload;
    if (!decoded || !decoded.data) {
      return {
        success: false,
        error: 'Invalid token',
        message: 'Invalid token',
        errorCode: 'TOKEN_VERIFICATION:INVALID_TOKEN',
      }
    }

    const { formKey } = decoded.data;

    if (formKey !== JWT_FORM_KEY) {
      return {
        success: false,
        error: 'Invalid form key',
        message: 'Invalid form key',
        errorCode: 'TOKEN_VERIFICATION:INVALID_FORM_KEY',
      }
    }

    return {
      success: true,
      message: 'Token verified successfully',
      data: {
        decoded
      }
    }

  } catch (error) {
    console.error("Error verifying JWT token:", error);
    return {
      success: false,
      error: error,
      message: 'Error verifying token',
      errorCode: 'JWT:TOKEN_VERIFICATION_ERROR',
    };
  }
};