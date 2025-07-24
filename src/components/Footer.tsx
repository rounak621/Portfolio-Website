import { Heart, Linkedin, Github, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-tech-darker border-t border-border/30">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-primary to-tech-cyan bg-clip-text text-transparent">
              Rounak Choudhary
            </h3>
            <p className="text-muted-foreground">
              Cloud & DevOps Engineer passionate about building scalable infrastructure and automating workflows.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-primary">Quick Links</h4>
            <nav className="space-y-2">
              <a href="#about" className="block text-muted-foreground hover:text-primary transition-smooth">
                About Me
              </a>
              <a href="#skills" className="block text-muted-foreground hover:text-primary transition-smooth">
                Skills
              </a>
              <a href="#projects" className="block text-muted-foreground hover:text-primary transition-smooth">
                Projects
              </a>
              <a href="#contact" className="block text-muted-foreground hover:text-primary transition-smooth">
                Contact
              </a>
            </nav>
          </div>

          {/* Contact & Social */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-primary">Connect</h4>
            <div className="space-y-3">
              <a 
                href="mailto:rounakchoudhary131@gmail.com" 
                className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-smooth"
              >
                <Mail className="w-5 h-5" />
                <span>rounakchoudhary131@gmail.com</span>
              </a>
            </div>
            
            <div className="flex gap-4 mt-6">
              <a 
                href="#" 
                className="bg-secondary/30 p-3 rounded-lg hover:bg-secondary/50 transition-smooth group"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-smooth" />
              </a>
              <a 
                href="#" 
                className="bg-secondary/30 p-3 rounded-lg hover:bg-secondary/50 transition-smooth group"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-smooth" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-border/30 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-muted-foreground text-sm flex items-center gap-2">
            © 2025 Rounak Choudhary. All Rights Reserved. Made with 
            <Heart className="w-4 h-4 text-red-500 fill-current" />
            and lots of ☕
          </p>
          
          <div className="flex items-center gap-6 text-sm text-muted-foreground">
            <a href="#" className="hover:text-primary transition-smooth">Privacy Policy</a>
            <a href="#" className="hover:text-primary transition-smooth">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;