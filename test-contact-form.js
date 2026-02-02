// Test script for contact form email
// Run with: node test-contact-form.js

const fetch = require('node-fetch');

// Generate a simple CSRF token (same format as the frontend)
const csrfToken = `${Date.now().toString(36)}.${Math.random().toString(36).substring(2)}`;

const testData = {
  name: "Test User",
  email: "test@example.com",
  phone: "+1-234-567-8900",
  message: "This is a test message from the contact form. If you receive this email, your contact form is working perfectly with Resend!"
};

async function testContactForm() {
  console.log('🧪 Testing Contact Form...\n');
  console.log('Test Data:', JSON.stringify(testData, null, 2));
  console.log('\nCSRF Token:', csrfToken);
  console.log('\nSending request to: http://localhost:3000/api/sendEmail\n');

  try {
    const response = await fetch('http://localhost:3000/api/sendEmail', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-CSRF-Token': csrfToken,
      },
      body: JSON.stringify(testData),
    });

    const result = await response.json();

    console.log('📬 Response Status:', response.status);
    console.log('📧 Response Data:', JSON.stringify(result, null, 2));

    if (response.ok && result.data === true) {
      console.log('\n✅ SUCCESS! Email sent successfully!');
      console.log('📨 Check your inbox at: bharathloganathan2804@gmail.com\n');
    } else {
      console.log('\n❌ ERROR: Failed to send email');
      console.log('Error:', result.error);
    }
  } catch (error) {
    console.error('\n💥 Request Failed:', error.message);
  }
}

testContactForm();
