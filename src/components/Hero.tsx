import { Download, Mail, Cloud, Code, Database, Settings } from 'lucide-react';
import heroBackground from '@/assets/hero-bg.jpg';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Beautiful Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-background via-tech-darker to-background opacity-90"></div>
        <img 
          src={heroBackground} 
          alt="Tech Background" 
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/50 via-transparent to-background/50"></div>
      </div>
      {/* Animated Background Elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-20 floating-animation">
          <Cloud className="w-12 h-12 text-tech-blue" />
        </div>
        <div className="absolute top-40 right-32 floating-animation" style={{ animationDelay: '1s' }}>
          <Code className="w-16 h-16 text-tech-cyan" />
        </div>
        <div className="absolute bottom-40 left-32 floating-animation" style={{ animationDelay: '2s' }}>
          <Database className="w-14 h-14 text-tech-purple" />
        </div>
        <div className="absolute bottom-32 right-20 floating-animation" style={{ animationDelay: '0.5s' }}>
          <Settings className="w-10 h-10 text-tech-green" />
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <div className="mb-8">
          <h1 className="text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-primary via-tech-cyan to-tech-purple bg-clip-text text-transparent">
            Rounak Choudhary
          </h1>
          <h2 className="text-2xl md:text-3xl font-semibold text-muted-foreground mb-6">
            Cloud & DevOps Engineer
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Designing scalable cloud infrastructure and automating DevOps workflows.
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a 
            href="/resume.pdf" 
            download="Rounak_Choudhary_Resume.pdf"
            className="hero-button flex items-center gap-2 pulse-glow"
          >
            <Download className="w-5 h-5" />
            Download Resume
          </a>
          <button 
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="hero-button-outline flex items-center gap-2"
          >
            <Mail className="w-5 h-5" />
            Let's Connect
          </button>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-primary/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;