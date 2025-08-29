# Resend Setup Guide

## 1. Get Your Resend API Key

1. Go to [resend.com](https://resend.com) and create an account
2. Navigate to the API Keys section in your dashboard
3. Create a new API key
4. Copy the API key (it starts with `re_`)

## 2. Update Environment Variables

1. Open the `.env` file in your project root
2. Replace `your_resend_api_key_here` with your actual API key:
   ```
   REACT_APP_RESEND_API_KEY=re_your_actual_api_key_here
   ```

## 3. Verify Your Domain (Required for Production)

1. In your Resend dashboard, go to Domains
2. Add and verify your domain: `aidantotten.org`
3. Update the `from` email in `server.js`:
   ```javascript
   from: 'noreply@aidantotten.org', // Your verified domain
   ```

## 4. Update Email Recipients

1. In `server.js`, update the recipient email:
   ```javascript
   to: 'aidan@aidantotten.org', // Your email address
   ```

## 5. Test the Integration

1. Start your React app: `npm start`
2. Navigate to the contact form
3. Fill out and submit the form
4. Check your email for the test message

## 6. Important Notes

- **Environment Variables**: React requires environment variables to start with `REACT_APP_` to be accessible in the browser
- **Domain Verification**: You must verify your domain in Resend before sending emails in production
- **API Key Security**: Never commit your `.env` file to version control
- **Rate Limits**: Resend has rate limits based on your plan

## 7. Troubleshooting

- **"Invalid API Key"**: Check that your API key is correct and starts with `re_`
- **"Domain not verified"**: Verify your domain in the Resend dashboard
- **"Unauthorized"**: Ensure your API key has the correct permissions

## 8. Production Deployment

- Set environment variables in your hosting platform (Vercel, Netlify, etc.)
- Ensure your domain is verified in Resend
- Test thoroughly before going live

## 9. Alternative: Use Resend's React SDK

For more advanced features, you can also install their React SDK:
```bash
npm install @resend/react
```

This provides hooks and components for better email integration.

