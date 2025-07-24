import { 
  Cloud, 
  Container, 
  GitBranch, 
  Settings, 
  Shield, 
  Database,
  Monitor,
  Zap,
  Server,
  Network,
  Code,
  Terminal
} from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Cloud & Infrastructure",
      skills: [
        { name: "Amazon Web Services (AWS)", icon: Cloud },
        { name: "Terraform", icon: Settings },
        { name: "Infrastructure as a Service (IaaS)", icon: Server },
        { name: "Cloud Networking", icon: Network },
        { name: "Cloud Monitoring & Logging", icon: Monitor },
      ]
    },
    {
      title: "DevOps & Automation",
      skills: [
        { name: "Docker", icon: Container },
        { name: "Kubernetes", icon: Container },
        { name: "Jenkins", icon: Zap },
        { name: "GitLabs", icon: GitBranch },
        { name: "CI/CD", icon: Zap },
      ]
    },
    {
      title: "Development & Tools",
      skills: [
        { name: "Linux & Shell Scripting", icon: Terminal },
        { name: "Version Control (Git)", icon: GitBranch },
        { name: "IAM (Identity & Access Management)", icon: Shield },
      ]
    }
  ];

  return (
    <section className="py-20 px-6 max-w-7xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="section-title">Skills & Technologies</h2>
        <div className="w-20 h-1 bg-gradient-to-r from-primary to-tech-cyan mx-auto rounded-full"></div>
      </div>

      <div className="space-y-12">
        {skillCategories.map((category, categoryIndex) => (
          <div key={categoryIndex} className="project-card">
            <h3 className="text-2xl font-bold mb-6 text-center text-primary">
              {category.title}
            </h3>
            <div className="flex flex-wrap gap-3 justify-center">
              {category.skills.map((skill, skillIndex) => (
                <div
                  key={skillIndex}
                  className="skill-tag group flex items-center gap-2"
                >
                  <skill.icon className="tech-icon" />
                  <span>{skill.name}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Tech Stack Overview */}
      <div className="mt-16 project-card">
        <div className="text-center mb-8">
          <h3 className="text-2xl font-bold mb-4 text-primary">My Tech Stack</h3>
          <p className="text-muted-foreground">
            The tools and technologies I work with daily to build scalable cloud solutions
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div className="group">
            <div className="bg-tech-blue/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3 group-hover:bg-tech-blue/20 transition-smooth">
              <Cloud className="w-8 h-8 text-tech-blue" />
            </div>
            <p className="text-sm font-medium">AWS Cloud</p>
          </div>
          
          <div className="group">
            <div className="bg-tech-purple/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3 group-hover:bg-tech-purple/20 transition-smooth">
              <Container className="w-8 h-8 text-tech-purple" />
            </div>
            <p className="text-sm font-medium">Kubernetes</p>
          </div>
          
          <div className="group">
            <div className="bg-tech-green/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3 group-hover:bg-tech-green/20 transition-smooth">
              <Zap className="w-8 h-8 text-tech-green" />
            </div>
            <p className="text-sm font-medium">CI/CD</p>
          </div>
          
          <div className="group">
            <div className="bg-tech-cyan/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3 group-hover:bg-tech-cyan/20 transition-smooth">
              <Settings className="w-8 h-8 text-tech-cyan" />
            </div>
            <p className="text-sm font-medium">Terraform</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;