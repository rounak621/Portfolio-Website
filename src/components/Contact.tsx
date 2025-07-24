import { Mail, Phone, MapPin, Send, Linkedin, Github, MessageSquare } from 'lucide-react';
import { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
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
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-2">
                Your Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-secondary/20 border border-border/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition-smooth"
                placeholder="Enter your name"
                required
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-2">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-secondary/20 border border-border/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition-smooth"
                placeholder="Enter your email"
                required
              />
            </div>

            <div>
              <label htmlFor="subject" className="block text-sm font-medium mb-2">
                Subject
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-secondary/20 border border-border/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition-smooth"
                placeholder="What's this about?"
                required
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={6}
                value={formData.message}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-secondary/20 border border-border/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition-smooth resize-none"
                placeholder="Tell me about your project or just say hello!"
                required
              ></textarea>
            </div>

            <button 
              type="submit" 
              className="hero-button w-full justify-center flex items-center gap-2"
            >
              <Send className="w-5 h-5" />
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;