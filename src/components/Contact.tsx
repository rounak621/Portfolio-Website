import { Mail, Phone, MapPin, Send, Linkedin, Github, MessageSquare } from 'lucide-react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { supabase, isSupabaseConfigured, type ContactSubmission } from '@/lib/supabase';
import { useToast } from '@/hooks/use-toast';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { useState } from 'react';

const contactSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  subject: z.string().min(5, 'Subject must be at least 5 characters'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
});

type ContactFormData = z.infer<typeof contactSchema>;

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
  
  const form = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: '',
      email: '',
      subject: '',
      message: ''
    }
  });

  const handleSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    
    try {
      if (!isSupabaseConfigured || !supabase) {
        // Fallback: show success message and log data
        console.log('Contact form submission (Supabase not configured):', data);
        toast({
          title: "Message received!",
          description: "Your message has been logged. Please contact me directly via email for immediate response.",
        });
        form.reset();
        return;
      }

      const { error } = await supabase
        .from('contact_submissions')
        .insert([
          {
            name: data.name,
            email: data.email,
            subject: data.subject,
            message: data.message
          }
        ]);

      if (error) {
        throw error;
      }

      toast({
        title: "Message sent successfully!",
        description: "Thank you for reaching out. I'll get back to you soon.",
      });
      
      form.reset();
    } catch (error) {
      console.error('Error submitting form:', error);
      toast({
        title: "Error sending message",
        description: "Please try again or contact me directly via email.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-20 px-6 max-w-7xl mx-auto" id="contact">
      <div className="text-center mb-12">
        <h2 className="section-title">Get In Touch</h2>
        <div className="w-20 h-1 bg-gradient-to-r from-primary to-tech-cyan mx-auto rounded-full"></div>
        <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
          Let's connect and discuss how we can work together on your next cloud or DevOps project.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Contact Information */}
        <div className="space-y-8">
          <div className="project-card">
            <h3 className="text-2xl font-bold mb-6 text-primary">Contact Information</h3>
            
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="bg-primary/10 p-3 rounded-lg">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold">Email</h4>
                  <a 
                    href="mailto:rounakchoudhary131@gmail.com" 
                    className="text-muted-foreground hover:text-primary transition-smooth"
                  >
                    rounakchoudhary131@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="bg-tech-green/10 p-3 rounded-lg">
                  <Phone className="w-6 h-6 text-tech-green" />
                </div>
                <div>
                  <h4 className="font-semibold">Phone</h4>
                  <a 
                    href="tel:+919324371437" 
                    className="text-muted-foreground hover:text-tech-green transition-smooth"
                  >
                    +91 9324371437
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="bg-tech-cyan/10 p-3 rounded-lg">
                  <MapPin className="w-6 h-6 text-tech-cyan" />
                </div>
                <div>
                  <h4 className="font-semibold">Location</h4>
                  <p className="text-muted-foreground">Mumbai, India</p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="mt-8 pt-6 border-t border-border/30">
              <h4 className="font-semibold mb-4">Follow Me</h4>
              <div className="flex gap-4">
                <a 
                  href="https://www.linkedin.com/in/rounak-choudhary-366b272a8/" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-secondary/30 p-3 rounded-lg hover:bg-secondary/50 transition-smooth group"
                >
                  <Linkedin className="w-6 h-6 text-muted-foreground group-hover:text-primary transition-smooth" />
                </a>
                <a 
                  href="https://github.com/rounak621" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-secondary/30 p-3 rounded-lg hover:bg-secondary/50 transition-smooth group"
                >
                  <Github className="w-6 h-6 text-muted-foreground group-hover:text-primary transition-smooth" />
                </a>
                <a 
                  href="#" 
                  className="bg-secondary/30 p-3 rounded-lg hover:bg-secondary/50 transition-smooth group"
                >
                  <MessageSquare className="w-6 h-6 text-muted-foreground group-hover:text-primary transition-smooth" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="project-card">
          <h3 className="text-2xl font-bold mb-6 text-primary">Send Message</h3>
          
          <Form {...form}>
            <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-6">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Your Name</FormLabel>
                    <FormControl>
                      <Input 
                        placeholder="Enter your name" 
                        className="bg-secondary/20 border-border/30 focus:ring-primary/50 focus:border-primary/50"
                        {...field} 
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email Address</FormLabel>
                    <FormControl>
                      <Input 
                        type="email"
                        placeholder="Enter your email" 
                        className="bg-secondary/20 border-border/30 focus:ring-primary/50 focus:border-primary/50"
                        {...field} 
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="subject"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Subject</FormLabel>
                    <FormControl>
                      <Input 
                        placeholder="What's this about?" 
                        className="bg-secondary/20 border-border/30 focus:ring-primary/50 focus:border-primary/50"
                        {...field} 
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Message</FormLabel>
                    <FormControl>
                      <Textarea 
                        rows={6}
                        placeholder="Tell me about your project or just say hello!" 
                        className="bg-secondary/20 border-border/30 focus:ring-primary/50 focus:border-primary/50 resize-none"
                        {...field} 
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <Button 
                type="submit" 
                disabled={isSubmitting}
                className="hero-button w-full justify-center flex items-center gap-2"
              >
                <Send className="w-5 h-5" />
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </Button>
            </form>
          </Form>
        </div>
      </div>
    </section>
  );
};

export default Contact;