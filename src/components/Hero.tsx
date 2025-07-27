import { Download, Mail, Cloud, Code, Database, Settings } from 'lucide-react';
import heroBackground from '@/assets/hero-bg.jpg';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Enhanced Background */}
      <div className="absolute inset-0">
        {/* Animated gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-background via-tech-darker to-background opacity-95"></div>
        <div className="absolute inset-0 bg-gradient-to-tr from-tech-blue/5 via-transparent to-tech-purple/5 animate-pulse"></div>
        
        <img 
          src={heroBackground} 
          alt="Tech Background" 
          className="w-full h-full object-cover opacity-20 scale-105 animate-[zoom_20s_ease-in-out_infinite]"
        />
        
        {/* Enhanced gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-background/80"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-background/20 via-transparent to-background/20"></div>
        
        {/* Floating gradient orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-tech-blue/10 rounded-full blur-3xl animate-[float_8s_ease-in-out_infinite]"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-tech-purple/10 rounded-full blur-3xl animate-[float_12s_ease-in-out_infinite_reverse]"></div>
        <div className="absolute top-1/2 right-1/3 w-64 h-64 bg-tech-cyan/8 rounded-full blur-3xl animate-[float_10s_ease-in-out_infinite]"></div>
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
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto animate-[slide-up_1s_ease-out]">
          <div className="mb-8">
            <h1 className="text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-primary via-tech-cyan to-tech-purple bg-clip-text text-transparent animate-[fade-in-slow_1.5s_ease-out]">
              Rounak Choudhary
            </h1>
            <h2 className="text-2xl md:text-3xl font-semibold text-muted-foreground mb-6 animate-[slide-up_1s_ease-out_0.3s_both]">
              Cloud & DevOps Engineer
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed animate-[slide-up_1s_ease-out_0.6s_both]">
              Designing scalable cloud infrastructure and automating DevOps workflows.
            </p>
          </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-[slide-up_1s_ease-out_0.9s_both]">
          <a 
            href="/resume.pdf" 
            download="Rounak_Choudhary_Resume.pdf"
            className="hero-button flex items-center gap-2 pulse-glow transition-spring"
          >
            <Download className="w-5 h-5" />
            Download Resume
          </a>
          <button 
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="hero-button-outline flex items-center gap-2 transition-spring"
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