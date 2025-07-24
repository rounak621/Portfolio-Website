import { GraduationCap, Calendar, MapPin, BookOpen } from 'lucide-react';

const Education = () => {
  return (
    <section className="py-20 px-6 max-w-7xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="section-title">Education</h2>
        <div className="w-20 h-1 bg-gradient-to-r from-primary to-tech-cyan mx-auto rounded-full"></div>
      </div>

      <div className="max-w-4xl mx-auto">
        <div className="project-card">
          <div className="flex flex-col lg:flex-row gap-8 items-start">
            {/* University Logo/Icon */}
            <div className="bg-primary/10 p-6 rounded-2xl flex-shrink-0">
              <GraduationCap className="w-16 h-16 text-primary" />
            </div>

            {/* Education Details */}
            <div className="flex-1">
              <div className="mb-6">
                <h3 className="text-2xl font-bold mb-2 text-primary">
                  Bachelor of Engineering (Information Technology)
                </h3>
                <p className="text-xl text-muted-foreground mb-4">
                  Atharva College of Engineering, Mumbai
                </p>
                
                <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-primary" />
                    <span>Expected Graduation: 2027</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-primary" />
                    <span>Mumbai, India</span>
                  </div>
                </div>
              </div>

              {/* Relevant Coursework */}
              <div className="mb-6">
                <h4 className="text-lg font-semibold mb-3 flex items-center gap-2">
                  <BookOpen className="w-5 h-5 text-tech-cyan" />
                  Relevant Coursework
                </h4>
                <div className="flex flex-wrap gap-2">
                  <span className="skill-tag">Cloud Computing</span>
                  <span className="skill-tag">AWS Essentials</span>
                  <span className="skill-tag">Data Structures & Algorithms</span>
                  <span className="skill-tag">Database Management Systems</span>
                  <span className="skill-tag">Computer Networks</span>
                  <span className="skill-tag">Operating Systems</span>
                  <span className="skill-tag">Software Engineering</span>
                </div>
              </div>

              {/* Academic Highlights */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-secondary/20 p-4 rounded-lg border border-border/30">
                  <h5 className="font-semibold text-primary mb-2">Focus Areas</h5>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Cloud Architecture & Design</li>
                    <li>• DevOps Methodologies</li>
                    <li>• Infrastructure Automation</li>
                    <li>• Container Technologies</li>
                  </ul>
                </div>
                
                <div className="bg-secondary/20 p-4 rounded-lg border border-border/30">
                  <h5 className="font-semibold text-tech-green mb-2">Current Projects</h5>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• AWS Cloud Practitioner Certification</li>
                    <li>• Kubernetes CKA Preparation</li>
                    <li>• Terraform Associate Study</li>
                    <li>• Docker Containerization Projects</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Certifications & Learning Path */}
        <div className="mt-12 project-card">
          <h3 className="text-xl font-bold mb-6 text-center text-primary">
            Certifications & Learning Path
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="bg-tech-blue/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <GraduationCap className="w-8 h-8 text-tech-blue" />
              </div>
              <h4 className="font-semibold text-tech-blue mb-2">AWS Certified</h4>
              <p className="text-sm text-muted-foreground">Cloud Practitioner (In Progress)</p>
            </div>
            
            <div className="text-center">
              <div className="bg-tech-purple/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <GraduationCap className="w-8 h-8 text-tech-purple" />
              </div>
              <h4 className="font-semibold text-tech-purple mb-2">Kubernetes</h4>
              <p className="text-sm text-muted-foreground">CKA Preparation</p>
            </div>
            
            <div className="text-center">
              <div className="bg-tech-green/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <GraduationCap className="w-8 h-8 text-tech-green" />
              </div>
              <h4 className="font-semibold text-tech-green mb-2">HashiCorp</h4>
              <p className="text-sm text-muted-foreground">Terraform Associate (Planned)</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;