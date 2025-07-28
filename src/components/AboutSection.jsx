import { Briefcase, Code, User } from "lucide-react";

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      {" "}
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About <span className="text-primary"> Me</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">
              Passionate Web Developer & Tech Creator
            </h3>

            <p className="text-muted-foreground">
              I'm a Cybersecurity Engineer and SOC Analyst with over 6 years of
              experience in defending systems and infrastructure against
              evolving cyber threats. My expertise includes secure coding
              practices, SOC operations, threat detection, incident response,
              and vulnerability management. I work extensively with SIEM
              platforms such as Splunk and QRadar, as well as EDR/XDR solutions
              for endpoint visibility and control.
            </p>

            <p className="text-muted-foreground">
              A key part of my approach involves automation — using tools like
              Python, PowerShell, and SOAR platforms (e.g., Splunk SOAR, IBM
              Resilient) to streamline incident response, enrich alerts, and
              reduce manual workloads. I also have experience building custom
              scripts to automate log parsing, IOC enrichment, and threat intel
              integration. My work is grounded in industry best practices and
              aligned with standards like NIST, ISO 27001, DORA, and CIS,
              ensuring both compliance and robust defense.
            </p>

            <p>
              With a strong balance of technical depth and practical experience,
              I bring a proactive, automation-driven mindset to every security
              challenge I take on.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <a href="#contact" className="cosmic-button">
                {" "}
                Get In Touch
              </a>

              <a
                href=""
                className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
              >
                Download CV
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6">
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">
                    Secure Software Development
                  </h4>
                  <p className="text-muted-foreground">
                    Building robust, scalable web and software applications with
                    security integrated from the ground up.
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <User className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">SOC Operations</h4>
                  <p className="text-muted-foreground">
                    Monitoring, analyzing, and responding to security events to
                    protect critical systems and data.
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Briefcase className="h-6 w-6 text-primary" />
                </div>

                <div className="text-left">
                  <h4 className="font-semibold text-lg">Penetration Testing</h4>
                  <p className="text-muted-foreground">
                    Identifying and exploiting vulnerabilities to assess and
                    strengthen system security.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
