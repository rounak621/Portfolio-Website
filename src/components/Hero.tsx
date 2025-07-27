import { Download, Mail, Cloud, Code, Database, Settings } from 'lucide-react';
import heroBackground from '@/assets/hero-bg.jpg';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Enhanced Background */}
      <div className="absolute inset-0">
        {/* Multi-layered gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-background via-tech-darker to-background opacity-98"></div>
        <div className="absolute inset-0 bg-gradient-to-tr from-tech-blue/8 via-transparent to-tech-purple/8 animate-pulse"></div>
        <div className="absolute inset-0 bg-gradient-to-bl from-tech-cyan/5 via-transparent via-transparent to-tech-green/5"></div>
        
        <img 
          src={heroBackground} 
          alt="Tech Background" 
          className="w-full h-full object-cover opacity-15 scale-105 animate-[zoom_25s_ease-in-out_infinite]"
        />
        
        {/* Enhanced gradient overlays with depth */}
        <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-background/90"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-background/30 via-transparent to-background/30"></div>
        <div className="absolute inset-0 bg-gradient-radial from-transparent via-background/10 to-background/50"></div>
        
        {/* Floating gradient orbs with enhanced effects */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-br from-tech-blue/15 to-tech-purple/10 rounded-full blur-3xl animate-[float_8s_ease-in-out_infinite] opacity-80"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-tr from-tech-purple/12 to-tech-cyan/8 rounded-full blur-3xl animate-[float_12s_ease-in-out_infinite_reverse] opacity-70"></div>
        <div className="absolute top-1/2 right-1/3 w-64 h-64 bg-gradient-to-bl from-tech-cyan/10 to-tech-green/6 rounded-full blur-3xl animate-[float_10s_ease-in-out_infinite] opacity-60"></div>
        <div className="absolute bottom-1/3 left-1/3 w-72 h-72 bg-gradient-to-tr from-tech-green/8 to-tech-blue/6 rounded-full blur-3xl animate-[float_15s_ease-in-out_infinite] opacity-50"></div>
        
        {/* Geometric patterns */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-20 w-2 h-2 bg-tech-blue rounded-full animate-ping"></div>
          <div className="absolute top-40 right-32 w-1 h-1 bg-tech-cyan rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
          <div className="absolute bottom-40 left-32 w-1.5 h-1.5 bg-tech-purple rounded-full animate-ping" style={{ animationDelay: '2s' }}></div>
          <div className="absolute bottom-32 right-20 w-1 h-1 bg-tech-green rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
        </div>
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
        <div className="relative z-10 text-center px-6 max-w-5xl mx-auto animate-[slide-up_1s_ease-out]">
          {/* Decorative elements around content */}
          <div className="absolute -top-20 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-transparent via-primary to-transparent opacity-60"></div>
          
          <div className="mb-8 relative">
            {/* Background glow for text */}
            <div className="absolute inset-0 bg-gradient-to-r from-tech-blue/10 via-tech-purple/10 to-tech-cyan/10 blur-3xl rounded-3xl"></div>
            
            <h1 className="relative text-5xl md:text-8xl font-black mb-6 bg-gradient-to-r from-primary via-tech-cyan via-tech-purple to-primary bg-clip-text text-transparent animate-[fade-in-slow_1.5s_ease-out] leading-tight tracking-tight">
              Rounak Choudhary
            </h1>
            
            <div className="relative">
              <h2 className="text-2xl md:text-4xl font-bold text-foreground mb-6 animate-[slide-up_1s_ease-out_0.3s_both] tracking-wide">
                <span className="bg-gradient-to-r from-tech-blue to-tech-cyan bg-clip-text text-transparent">Cloud</span>
                <span className="mx-2 text-muted-foreground">&</span>
                <span className="bg-gradient-to-r from-tech-purple to-tech-green bg-clip-text text-transparent">DevOps</span>
                <span className="ml-2 text-foreground">Engineer</span>
              </h2>
              
              <div className="w-24 h-1 bg-gradient-to-r from-primary to-tech-cyan mx-auto mb-6 rounded-full animate-[slide-up_1s_ease-out_0.4s_both]"></div>
            </div>
            
            <p className="text-lg md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed animate-[slide-up_1s_ease-out_0.6s_both] font-light">
              Designing <span className="text-tech-cyan font-medium">scalable cloud infrastructure</span> and automating <span className="text-tech-green font-medium">DevOps workflows</span> with precision and innovation.
            </p>
          </div>

        {/* Enhanced Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center animate-[slide-up_1s_ease-out_0.9s_both] mb-8">
          <a 
            href="/resume.pdf" 
            download="Rounak_Choudhary_Resume.pdf"
            className="group relative hero-button flex items-center gap-3 pulse-glow transition-spring text-lg px-8 py-4 overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-primary to-tech-cyan opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <Download className="w-6 h-6 relative z-10 group-hover:scale-110 transition-transform" />
            <span className="relative z-10 font-semibold">Download Resume</span>
          </a>
          <button 
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="group relative hero-button-outline flex items-center gap-3 transition-spring text-lg px-8 py-4 overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-tech-purple/10 to-tech-cyan/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <Mail className="w-6 h-6 relative z-10 group-hover:scale-110 transition-transform" />
            <span className="relative z-10 font-semibold">Let's Connect</span>
          </button>
        </div>
        
        {/* Tech Icons Showcase */}
        <div className="flex justify-center gap-8 mb-12 animate-[slide-up_1s_ease-out_1.2s_both] opacity-60">
          {[Cloud, Code, Database, Settings].map((Icon, index) => (
            <div key={index} className="group cursor-pointer">
              <Icon className="w-8 h-8 text-muted-foreground group-hover:text-primary transition-colors hover:scale-110 transform duration-300" />
            </div>
          ))}
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