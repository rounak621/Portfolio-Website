import { serve } from "https://deno.land/std@0.168.0/http/server.ts"

const RESEND_API_KEY = Deno.env.get('RESEND_API_KEY')
const CONTACT_EMAIL = Deno.env.get('CONTACT_EMAIL') || 'contact@yourdomain.com'
const ALLOWED_ORIGINS = Deno.env.get('ALLOWED_ORIGINS')?.split(',') || ['http://localhost:3000', 'https://yourdomain.com']

// Security headers
const corsHeaders = {
  'Access-Control-Allow-Origin': '', // Will be set dynamically
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
  'Access-Control-Allow-Methods': 'POST, OPTIONS',
  'Access-Control-Max-Age': '86400',
}

// HTML escaping function to prevent XSS
function escapeHtml(unsafe: string): string {
  return unsafe
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;")
}

// Input validation schema
function validateInput(data: any): { isValid: boolean; errors: string[] } {
  const errors: string[] = []
  
  if (!data.name || typeof data.name !== 'string' || data.name.trim().length < 2 || data.name.length > 100) {
    errors.push('Name must be between 2 and 100 characters')
  }
  
  if (!data.email || typeof data.email !== 'string' || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
    errors.push('Valid email is required')
  }
  
  if (!data.subject || typeof data.subject !== 'string' || data.subject.trim().length < 2 || data.subject.length > 200) {
    errors.push('Subject must be between 2 and 200 characters')
  }
  
  if (!data.message || typeof data.message !== 'string' || data.message.trim().length < 10 || data.message.length > 2000) {
    errors.push('Message must be between 10 and 2000 characters')
  }
  
  return { isValid: errors.length === 0, errors }
}

serve(async (req) => {
  // CORS Origin validation
  const origin = req.headers.get('origin')
  const allowedOrigin = ALLOWED_ORIGINS.includes(origin || '') ? origin : ALLOWED_ORIGINS[0]
  
  // Update CORS headers with validated origin
  const secureHeaders = {
    ...corsHeaders,
    'Access-Control-Allow-Origin': allowedOrigin || '',
    'X-Content-Type-Options': 'nosniff',
    'X-Frame-Options': 'DENY',
    'X-XSS-Protection': '1; mode=block',
  }

  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: secureHeaders })
  }

  // Only allow POST requests
  if (req.method !== 'POST') {
    return new Response(
      JSON.stringify({ error: 'Method not allowed' }),
      { 
        headers: { ...secureHeaders, 'Content-Type': 'application/json' },
        status: 405,
      },
    )
  }

  try {
    // Check API key availability
    if (!RESEND_API_KEY) {
      console.error('RESEND_API_KEY not configured')
      return new Response(
        JSON.stringify({ error: 'Service temporarily unavailable' }),
        { 
          headers: { ...secureHeaders, 'Content-Type': 'application/json' },
          status: 503,
        },
      )
    }

    // Parse and validate request body
    let requestData
    try {
      requestData = await req.json()
    } catch {
      return new Response(
        JSON.stringify({ error: 'Invalid JSON format' }),
        { 
          headers: { ...secureHeaders, 'Content-Type': 'application/json' },
          status: 400,
        },
      )
    }

    // Validate input data
    const validation = validateInput(requestData)
    if (!validation.isValid) {
      return new Response(
        JSON.stringify({ error: 'Validation failed', details: validation.errors }),
        { 
          headers: { ...secureHeaders, 'Content-Type': 'application/json' },
          status: 400,
        },
      )
    }

    const { name, email, subject, message } = requestData

    // Escape HTML to prevent XSS
    const escapedName = escapeHtml(name.trim())
    const escapedEmail = escapeHtml(email.trim())
    const escapedSubject = escapeHtml(subject.trim())
    const escapedMessage = escapeHtml(message.trim()).replace(/\n/g, '<br>')

    // Send email using Resend
    const res = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${RESEND_API_KEY}`,
      },
      body: JSON.stringify({
        from: CONTACT_EMAIL,
        to: [CONTACT_EMAIL],
        subject: `Portfolio Contact: ${escapedSubject}`,
        html: `
          <h2>New Contact Form Submission</h2>
          <p><strong>Name:</strong> ${escapedName}</p>
          <p><strong>Email:</strong> ${escapedEmail}</p>
          <p><strong>Subject:</strong> ${escapedSubject}</p>
          <p><strong>Message:</strong></p>
          <p>${escapedMessage}</p>
          <hr>
          <p><small>This email was sent from your portfolio contact form.</small></p>
        `,
      }),
    })

    if (res.ok) {
      return new Response(
        JSON.stringify({ success: true, message: 'Email sent successfully' }),
        { 
          headers: { ...secureHeaders, 'Content-Type': 'application/json' },
          status: 200,
        },
      )
    } else {
      console.error('Resend API error:', await res.text())
      return new Response(
        JSON.stringify({ error: 'Failed to send email' }),
        { 
          headers: { ...secureHeaders, 'Content-Type': 'application/json' },
          status: 500,
        },
      )
    }
  } catch (error) {
    console.error('Contact form error:', error)
    return new Response(
      JSON.stringify({ error: 'Internal server error' }),
      { 
        headers: { ...secureHeaders, 'Content-Type': 'application/json' },
        status: 500,
      },
    )
  }
})