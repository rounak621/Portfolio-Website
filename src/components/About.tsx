import { User, Code, Cloud, Zap, Settings } from 'lucide-react';

const About = () => {
  return (
    <section className="py-20 px-4 max-w-6xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="section-title">About Me</h2>
        <div className="w-20 h-1 bg-gradient-to-r from-primary to-tech-cyan mx-auto rounded-full"></div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* About Text */}
        <div className="space-y-6">
          <div className="project-card">
            <div className="flex items-start gap-4 mb-4">
              <div className="bg-primary/10 p-3 rounded-lg">
                <User className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Who I Am</h3>
                <p className="text-muted-foreground leading-relaxed">
                  I'm a cloud computing and DevOps enthusiast currently pursuing a Bachelor's in IT at Atharva College of Engineering. I specialize in AWS, CI/CD pipelines, infrastructure automation, and container orchestration.
                </p>
              </div>
            </div>
          </div>

          <div className="project-card">
            <div className="flex items-start gap-4 mb-4">
              <div className="bg-tech-cyan/10 p-3 rounded-lg">
                <Code className="w-6 h-6 text-tech-cyan" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">What I Do</h3>
                <p className="text-muted-foreground leading-relaxed">
                  With hands-on experience in tools like Terraform, Docker, Kubernetes, Jenkins, and GitHub Actions, I aim to build scalable and resilient systems in the cloud.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Stats/Highlights */}
        <div className="grid grid-cols-2 gap-6">
          <div className="project-card text-center">
            <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Cloud className="w-8 h-8 text-primary" />
            </div>
            <h4 className="text-2xl font-bold text-primary mb-2">AWS</h4>
            <p className="text-muted-foreground">Cloud Infrastructure</p>
          </div>

          <div className="project-card text-center">
            <div className="bg-tech-green/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Zap className="w-8 h-8 text-tech-green" />
            </div>
            <h4 className="text-2xl font-bold text-tech-green mb-2">CI/CD</h4>
            <p className="text-muted-foreground">Automation Expert</p>
          </div>

          <div className="project-card text-center">
            <div className="bg-tech-purple/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Code className="w-8 h-8 text-tech-purple" />
            </div>
            <h4 className="text-2xl font-bold text-tech-purple mb-2">K8s</h4>
            <p className="text-muted-foreground">Container Orchestration</p>
          </div>

          <div className="project-card text-center">
            <div className="bg-tech-cyan/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Settings className="w-8 h-8 text-tech-cyan" />
            </div>
            <h4 className="text-2xl font-bold text-tech-cyan mb-2">IaC</h4>
            <p className="text-muted-foreground">Infrastructure as Code</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;