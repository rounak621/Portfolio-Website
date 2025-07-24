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
      description: "Building scalable cloud solutions and infrastructure",
      color: "tech-blue",
      skills: [
        { name: "Amazon Web Services (AWS)", icon: Cloud, level: 90 },
        { name: "Terraform", icon: Settings, level: 85 },
        { name: "Infrastructure as a Service (IaaS)", icon: Server, level: 80 },
        { name: "Cloud Networking", icon: Network, level: 75 },
        { name: "Cloud Monitoring & Logging", icon: Monitor, level: 80 },
      ]
    },
    {
      title: "DevOps & Automation",
      description: "Streamlining development and deployment processes",
      color: "tech-green",
      skills: [
        { name: "Docker", icon: Container, level: 90 },
        { name: "Kubernetes", icon: Container, level: 85 },
        { name: "Jenkins", icon: Zap, level: 80 },
        { name: "GitLabs", icon: GitBranch, level: 75 },
        { name: "CI/CD", icon: Zap, level: 85 },
      ]
    },
    {
      title: "Development & Security",
      description: "Core development tools and security practices",
      color: "tech-purple",
      skills: [
        { name: "Linux & Shell Scripting", icon: Terminal, level: 90 },
        { name: "Version Control (Git)", icon: GitBranch, level: 95 },
        { name: "IAM (Identity & Access Management)", icon: Shield, level: 80 },
      ]
    }
  ];

  const coreTools = [
    { name: "AWS", icon: Cloud, color: "tech-blue", description: "Cloud Infrastructure" },
    { name: "Kubernetes", icon: Container, color: "tech-purple", description: "Container Orchestration" },
    { name: "Terraform", icon: Settings, color: "tech-cyan", description: "Infrastructure as Code" },
    { name: "Docker", icon: Container, color: "tech-green", description: "Containerization" },
  ];

  return (
    <section className="py-20 px-6 max-w-7xl mx-auto" id="skills">
      <div className="text-center mb-16">
        <h2 className="section-title">Skills & Technologies</h2>
        <div className="w-20 h-1 bg-gradient-to-r from-primary to-tech-cyan mx-auto rounded-full mb-4"></div>
        <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
          My expertise spans across cloud infrastructure, DevOps automation, and modern development practices
        </p>
      </div>

      {/* Core Technologies Showcase */}
      <div className="mb-20">
        <h3 className="text-2xl font-bold text-center mb-12 text-primary">Core Technologies</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {coreTools.map((tool, index) => (
            <div
              key={index}
              className="project-card text-center group hover:scale-105 transition-spring"
            >
              <div className={`bg-${tool.color}/10 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-${tool.color}/20 transition-smooth`}>
                <tool.icon className={`w-10 h-10 text-${tool.color}`} />
              </div>
              <h4 className="text-xl font-bold mb-2 group-hover:text-primary transition-smooth">
                {tool.name}
              </h4>
              <p className="text-sm text-muted-foreground">{tool.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Detailed Skills by Category */}
      <div className="space-y-12">
        {skillCategories.map((category, categoryIndex) => (
          <div key={categoryIndex} className="project-card overflow-hidden">
            {/* Category Header */}
            <div className="mb-8">
              <div className="flex items-center gap-4 mb-3">
                <div className={`w-1 h-12 bg-${category.color} rounded-full`}></div>
                <div>
                  <h3 className={`text-2xl font-bold text-${category.color} mb-1`}>
                    {category.title}
                  </h3>
                  <p className="text-muted-foreground">{category.description}</p>
                </div>
              </div>
            </div>

            {/* Skills Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {category.skills.map((skill, skillIndex) => (
                <div
                  key={skillIndex}
                  className="bg-secondary/20 rounded-lg p-4 border border-border/30 hover:border-primary/30 transition-smooth group"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <div className={`bg-${category.color}/10 p-2 rounded-lg group-hover:bg-${category.color}/20 transition-smooth`}>
                      <skill.icon className={`w-5 h-5 text-${category.color}`} />
                    </div>
                    <h4 className="font-semibold text-sm group-hover:text-primary transition-smooth">
                      {skill.name}
                    </h4>
                  </div>
                  
                  {/* Skill Level Progress Bar */}
                  <div className="space-y-2">
                    <div className="flex justify-between text-xs text-muted-foreground">
                      <span>Proficiency</span>
                      <span>{skill.level}%</span>
                    </div>
                    <div className="w-full bg-secondary/30 rounded-full h-2">
                      <div
                        className={`bg-${category.color} h-2 rounded-full transition-all duration-1000 ease-out`}
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Skills Summary Stats */}
      <div className="mt-16 project-card">
        <h3 className="text-2xl font-bold text-center mb-8 text-primary">
          Professional Summary
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="text-center">
            <div className="text-3xl font-bold text-tech-blue mb-2">5+</div>
            <p className="text-muted-foreground text-sm">Cloud Technologies</p>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-tech-green mb-2">10+</div>
            <p className="text-muted-foreground text-sm">DevOps Tools</p>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-tech-purple mb-2">15+</div>
            <p className="text-muted-foreground text-sm">Projects Completed</p>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-tech-cyan mb-2">3+</div>
            <p className="text-muted-foreground text-sm">Years Learning</p>
          </div>
        </div>
      </div>

      {/* Learning & Growth */}
      <div className="mt-12 project-card text-center">
        <h3 className="text-xl font-bold mb-4 text-primary">Continuous Learning</h3>
        <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
          I'm constantly expanding my skill set by staying up-to-date with the latest cloud technologies, 
          DevOps practices, and industry best practices through hands-on projects and certifications.
        </p>
        <div className="flex flex-wrap justify-center gap-3">
          <span className="skill-tag">AWS Certification Path</span>
          <span className="skill-tag">Kubernetes Deep Dive</span>
          <span className="skill-tag">GitOps Practices</span>
          <span className="skill-tag">Cloud Security</span>
          <span className="skill-tag">Microservices Architecture</span>
        </div>
      </div>
    </section>
  );
};

export default Skills;