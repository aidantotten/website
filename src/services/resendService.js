// Frontend service that calls the backend API
const API_BASE_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000';

export const sendContactFormEmail = async (formData) => {
  try {
    const response = await fetch(`${API_BASE_URL}/api/contact`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    const result = await response.json();

    if (!response.ok) {
      return {
        success: false,
        error: result.error || 'Failed to send message'
      };
    }

    return result;
  } catch (error) {
    console.error('Error sending contact form:', error);
    return {
      success: false,
      error: 'Network error. Please check your connection and try again.'
    };
  }
};

// Keep the old function for backward compatibility
export const sendEmail = async (emailData) => {
  console.warn('sendEmail function is deprecated. Use sendContactFormEmail instead.');
  return sendContactFormEmail(emailData);
};

