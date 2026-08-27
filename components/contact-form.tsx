"use client"

import { useState } from "react"
import { submitContactForm, type ContactFormState } from "@/app/actions"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { AlertCircle, CheckCircle2, Loader2 } from "lucide-react"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { cn } from "@/lib/utils"

const initialState: ContactFormState = {}

export function ContactForm() {
  const [state, setState] = useState<ContactFormState>(initialState)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const result = await submitContactForm(formData)
      setState(result)

      if (result.success) {
        // Clear form on success
        setFormData({
          name: "",
          email: "",
          subject: "",
          message: "",
        })
      }
    } catch (error) {
      setState({
        errors: {
          _form: ["An error occurred. Please try again later."],
        },
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="name">Name</Label>
          <Input
            id="name"
            name="name"
            placeholder="Your name"
            value={formData.name}
            onChange={handleChange}
            className={cn(state?.errors?.name && "border-destructive")}
            disabled={isSubmitting}
          />
          {state?.errors?.name && <p className="text-xs text-destructive">{state.errors.name[0]}</p>}
        </div>

        <div className="space-y-2">
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            name="email"
            type="email"
            placeholder="your.email@example.com"
            value={formData.email}
            onChange={handleChange}
            className={cn(state?.errors?.email && "border-destructive")}
            disabled={isSubmitting}
          />
          {state?.errors?.email && <p className="text-xs text-destructive">{state.errors.email[0]}</p>}
        </div>

        <div className="space-y-2">
          <Label htmlFor="subject">Subject</Label>
          <Input
            id="subject"
            name="subject"
            placeholder="What is your message about?"
            value={formData.subject}
            onChange={handleChange}
            className={cn(state?.errors?.subject && "border-destructive")}
            disabled={isSubmitting}
          />
          {state?.errors?.subject && <p className="text-xs text-destructive">{state.errors.subject[0]}</p>}
        </div>

        <div className="space-y-2">
          <Label htmlFor="message">Message</Label>
          <Textarea
            id="message"
            name="message"
            placeholder="Your message..."
            rows={5}
            value={formData.message}
            onChange={handleChange}
            className={cn(state?.errors?.message && "border-destructive")}
            disabled={isSubmitting}
          />
          {state?.errors?.message && <p className="text-xs text-destructive">{state.errors.message[0]}</p>}
        </div>
      </div>

      {state?.errors?._form && (
        <Alert variant="destructive">
          <AlertCircle className="h-4 w-4" />
          <AlertDescription>{state.errors._form[0]}</AlertDescription>
        </Alert>
      )}

      {state?.success && (
        <Alert className="bg-green-500/10 text-green-500 border-green-500/20">
          <CheckCircle2 className="h-4 w-4" />
          <AlertDescription>{state.message}</AlertDescription>
        </Alert>
      )}

      <Button type="submit" className="w-full" disabled={isSubmitting}>
        {isSubmitting ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            Sending...
          </>
        ) : (
          "Send Message"
        )}
      </Button>
    </form>
  )
}
