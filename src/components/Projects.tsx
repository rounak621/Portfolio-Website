import { 
  ExternalLink, 
  Github, 
  Cloud, 
  Database, 
  Zap, 
  Container, 
  DollarSign,
  Server,
  GitBranch,
  Settings
} from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "Cloud Infrastructure Deployment on AWS",
      description: "Deployed EC2, VPC with subnets, security groups, Route 53, S3 static website hosting, IAM roles.",
      icon: Cloud,
      color: "tech-blue",
      tags: ["AWS", "EC2", "VPC", "S3", "Route 53", "IAM"]
    },
    {
      title: "Multi-Tier Web App on AWS",
      description: "3-tier app: S3 frontend, EC2 backend, RDS database. Load Balancer, Auto Scaling, Route 53, CloudWatch monitoring.",
      icon: Database,
      color: "tech-purple",
      tags: ["AWS", "S3", "EC2", "RDS", "Load Balancer", "CloudWatch"]
    },
    {
      title: "CI/CD Pipeline with GitHub Actions & Jenkins",
      description: "Built automated CI/CD pipelines using Jenkins and GitHub Actions. Integrated Docker and AWS deployment steps.",
      icon: Zap,
      color: "tech-green",
      tags: ["Jenkins", "GitHub Actions", "Docker", "AWS", "CI/CD"]
    },
    {
      title: "Kubernetes Deployment Project",
      description: "Containerized app with Docker, deployed to Kubernetes cluster on AWS with Helm and autoscaling.",
      icon: Container,
      color: "tech-cyan",
      tags: ["Kubernetes", "Docker", "AWS", "Helm", "Autoscaling"]
    },
    {
      title: "AWS Cost Monitoring & Budget Automation",
      description: "Setup AWS Budgets, CloudWatch + Lambda to clean unused resources. Created cost alerts & reports.",
      icon: DollarSign,
      color: "tech-green",
      tags: ["AWS", "CloudWatch", "Lambda", "Cost Optimization", "Automation"]
    }
  ];

  return (
    <section className="py-20 px-4 max-w-6xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="section-title">Featured Projects</h2>
        <div className="w-20 h-1 bg-gradient-to-r from-primary to-tech-cyan mx-auto rounded-full"></div>
        <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
          A showcase of my cloud and DevOps projects demonstrating scalable infrastructure and automation solutions.
        </p>
      </div>

      <div className="tech-grid">
        {projects.map((project, index) => (
          <div key={index} className="project-card group">
            <div className="flex items-start gap-4 mb-4">
              <div className={`bg-${project.color}/10 p-3 rounded-lg group-hover:bg-${project.color}/20 transition-smooth`}>
                <project.icon className={`w-6 h-6 text-${project.color}`} />
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-smooth">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                  {project.description}
                </p>
              </div>
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-4">
              {project.tags.map((tag, tagIndex) => (
                <span
                  key={tagIndex}
                  className="px-2 py-1 bg-secondary/30 text-secondary-foreground text-xs rounded-full border border-border/30"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Call to Action */}
      <div className="mt-16 text-center">
        <div className="project-card max-w-2xl mx-auto">
          <h3 className="text-2xl font-bold mb-4 text-primary">More Projects Coming Soon</h3>
          <p className="text-muted-foreground mb-6">
            I'm constantly working on new cloud and DevOps projects. Check back regularly for updates!
          </p>
          <a 
            href="https://github.com/rounak621" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-md text-sm font-medium hover:bg-primary/90 transition-smooth"
          >
            <Github className="w-4 h-4" />
            View All on GitHub
            <ExternalLink className="w-3 h-3" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;