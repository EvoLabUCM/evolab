import { ContactForm } from "@/components/contact-form"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Mail, MessageSquare, Users } from "lucide-react"

export default function ContactPage() {
  return (
    <main className="flex-1">
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                Contact Us
              </h1>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                Get in touch with our team for inquiries, collaborations, or more information
              </p>
            </div>
          </div>

          <div className="mx-auto max-w-5xl mt-16 grid gap-8 md:grid-cols-2">
            <div className="space-y-8">
              <Card>
                <CardHeader>
                  <div className="flex items-center gap-2">
                    <Users className="h-5 w-5 text-primary" />
                    <CardTitle>Media Inquiries</CardTitle>
                  </div>
                  <CardDescription>For press, interviews, and media-related inquiries</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">
                    Please contact our Principal Investigator directly:
                  </p>
                  <div className="flex items-center gap-2 text-primary">
                    <Mail className="h-4 w-4" />
                    <a href="mailto:cholbrook@ucmerced.edu" className="hover:underline">
                      cholbrook@ucmerced.edu
                    </a>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <div className="flex items-center gap-2">
                    <MessageSquare className="h-5 w-5 text-primary" />
                    <CardTitle>General Information</CardTitle>
                  </div>
                  <CardDescription>
                    For questions about our research, collaborations, or other inquiries
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Please use the contact form to send us a message. We'll get back to you as soon as possible.
                  </p>
                </CardContent>
              </Card>
            </div>

            <div>
              <Card>
                <CardHeader>
                  <CardTitle>Send us a Message</CardTitle>
                  <CardDescription>Fill out the form below and we'll respond to your inquiry</CardDescription>
                </CardHeader>
                <CardContent>
                  <ContactForm />
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
