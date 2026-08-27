'use client'

import { z } from 'zod'

// Form validation schema
export const ContactFormSchema = z.object({
  name: z.string().min(2, { message: 'Name must be at least 2 characters' }),
  email: z.string().email({ message: 'Please enter a valid email address' }),
  subject: z.string().min(5, { message: 'Subject must be at least 5 characters' }),
  message: z.string().min(10, { message: 'Message must be at least 10 characters' }),
})

export type ContactFormState = {
  errors?: {
    name?: string[]
    email?: string[]
    subject?: string[]
    message?: string[]
    _form?: string[]
  }
  success?: boolean
  message?: string
}

export async function submitContactForm(formData: {
  name: string
  email: string
  subject: string
  message: string
}): Promise<ContactFormState> {
  // Validate form data
  const validatedFields = ContactFormSchema.safeParse(formData)

  // If validation fails, return errors
  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: 'Please correct the errors in the form.',
    }
  }

  // In a real application, you would send an email here
  // For now, we simulate a successful submission
  try {
    // Simulate network delay
    await new Promise((resolve) => setTimeout(resolve, 1000))

    // Return success state
    return {
      success: true,
      message: 'Your message has been sent successfully. We\'ll get back to you soon!',
    }
  } catch (error) {
    return {
      errors: {
        _form: ['An error occurred while sending your message. Please try again later.'],
      },
    }
  }
}
