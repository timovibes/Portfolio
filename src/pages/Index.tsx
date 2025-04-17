
import { Navbar } from "@/components/Navbar";
import { Section, SectionTitle, ImageContainer } from "@/components/Section";
import { ProjectCard } from "@/components/ProjectCard";
import { TechCard } from "@/components/TechCard";
import { ContactForm } from "@/components/ContactForm";
import { Button } from "@/components/ui/button";
import { 
  Code, 
  Database, 
  Github, 
  Globe, 
  Layout, 
  Linkedin, 
  Mail, 
  Server, 
  Twitter 
} from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />

      {/* Hero Section */}
      <Section id="home" className="pt-32 md:pt-40 pb-16">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="order-2 md:order-1">
            <p className="text-primary font-medium mb-2">Hello, I'm</p>
            <h1 className="heading-xl mb-4">
              Timothy Chepkonga
              <span className="block text-primary">Software Developer</span>
            </h1>
            <p className="text-foreground/70 text-lg mb-8 max-w-md">
              I build exceptional and accessible digital experiences for the web and mobile application.
              Focused on creating products that are functional and beautiful.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild>
                <a href="#contact">Get In Touch</a>
              </Button>
              <Button variant="outline" asChild>
                <a href="#projects">View Projects</a>
              </Button>
            </div>
          </div>
          <div className="order-1 md:order-2 flex justify-center">
            <ImageContainer 
              src="https://i.imgur.com/cf0YLhQ.jpeg"
              alt="John Doe"
              className="w-80 h-80 md:w-96 md:h-96"
              imageClassName="w-full h-full"
              objectPosition="center 30%"
              objectFit="cover"
              isCircular={true}
            />
          </div>
        </div>
      </Section>

      {/* About Section */}
      <Section id="about" className="bg-secondary/50">
        <SectionTitle 
          title="About Me" 
          subtitle="Here you'll find more information about me, my background, and what I'm currently doing"
        />
        
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="heading-sm mb-4">Get to know me!</h3>
            <div className="space-y-4 text-foreground/80">
              <p>
                I'm a <span className="font-semibold text-foreground">Frontend Developer</span> building and designing web applications that lead to the success of the overall product. Check out some of my work in the Projects section.
              </p>
              <p>
                I also like sharing content related to the stuff that I've learned over the years in web development so it can help other people in the dev community. Feel free to connect with me on my socials!
              </p>
              <p>
                I'm open to job opportunities where I can contribute, learn and grow. If you have a good opportunity that matches my skills and experience then don't hesitate to contact me.
              </p>
              <div className="pt-4">
                <Button asChild>
                  <a href="#contact">Contact Me</a>
                </Button>
              </div>
            </div>
          </div>
          <div>
            <h3 className="heading-sm mb-4">Education & Experience</h3>
            <div className="space-y-6">
              <div className="border-l-2 border-primary pl-4 pb-6">
                <h4 className="font-semibold text-lg">Free lance web design</h4>
                <p className="text-primary">2021 - Present</p>
                <p className="text-foreground/70 mt-2">
                  Working on complex web applications and design systems.
                </p>
              </div>
              <div className="border-l-2 border-primary pl-4 pb-6">
                <h4 className="font-semibold text-lg">Web Developer</h4>
                <p className="text-primary">2018 - 2021</p>
                <p className="text-foreground/70 mt-2">
                  Developed responsive websites and e-commerce solutions.
                </p>
              </div>
              <div className="border-l-2 border-primary pl-4 pb-6">
                <h4 className="font-semibold text-lg">Android Developer</h4>
                <p className="text-primary">2018 - 2021</p>
                <p className="text-foreground/70 mt-2">
                  Developed and maintained codes to optimize apps.
                </p>
              </div>
              <div className="border-l-2 border-primary pl-4">
                <h4 className="font-semibold text-lg">Bachelor of science in software development</h4>
                <p className="text-primary">2022 - present</p>
                <p className="text-foreground/70 mt-2">
                  KCA University
                </p>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Skills Section */}
      <Section id="skills">
        <SectionTitle 
          title="Skills & Technologies" 
          subtitle="I work with a variety of technologies to create beautiful, responsive, and functional web applications"
        />
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <TechCard
            title="Frontend"
            icon={<Layout className="h-5 w-5" />}
            skills={["JavaScript", "TypeScript", "React", "Next.js", "HTML5", "CSS3"]}
          />
          <TechCard
            title="Backend"
            icon={<Server className="h-5 w-5" />}
            skills={["Node.js", "Express", "REST APIs", "GraphQL", "Authentication", "Testing", "Documentation"]}
          />
          <TechCard
            title="Database"
            icon={<Database className="h-5 w-5" />}
            skills={["MongoDB", "PostgreSQL", "MySQL", "Firebase"]}
          />
          <TechCard
            title="Development"
            icon={<Code className="h-5 w-5" />}
            skills={["Git", "GitHub"]}
          />
          <TechCard
            title="Design"
            icon={<Layout className="h-5 w-5" />}
            skills={["Figma", "Tailwind CSS", "Material UI", "Bootstrap"]}
          />
          <TechCard
            title="Other"
            icon={<Globe className="h-5 w-5" />}
            skills={["SEO", "Performance Optimization", "Accessibility", "Progressive Web Apps", "Cross-browser Testing", "Technical Writing", "Problem Solving"]}
          />
        </div>
      </Section>

      {/* Projects Section */}
      <Section id="projects" className="bg-secondary/50">
        <SectionTitle 
          title="Featured Projects" 
          subtitle="Here are some of the projects I've worked on. Each project reflects my ability to solve complex problems, work with different technologies, and manage projects effectively"
        />
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <ProjectCard
            title="E-Commerce Platform"
            description="A full-featured e-commerce site with product catalog, shopping cart, payment integration, and admin dashboard."
            image="https://images.unsplash.com/photo-1557821552-17105176677c?q=80&w=1974&auto=format&fit=crop"
            tags={["React", "Node.js", "MongoDB", "Stripe"]}
            githubUrl="https://github.com/timovibes/YatorECommerce"
            liveUrl="https://yatorcommerceshop.vercel.app/"
          />
          <ProjectCard
            title="Task Management App"
            description="A productivity app for managing tasks, projects, and teams with real-time updates and notifications."
            image="https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=1955&auto=format&fit=crop"
            tags={["Next.js", "Firebase", "Tailwind CSS"]}
            githubUrl="https://github.com"
            liveUrl="https://example.com"
          />
          <ProjectCard
            title="Portfolio Website"
            description="A personal portfolio showcasing projects, skills, and professional experience with a focus on clean design."
            image="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?q=80&w=1969&auto=format&fit=crop"
            tags={["React", "Tailwind CSS", "Framer Motion"]}
            githubUrl="https://github.com/timovibes/Portfolio"
            liveUrl="https://timothychepkongaportfoliowebsite.vercel.app/"
          />
          <ProjectCard
            title="Weather Dashboard"
            description="A weather application providing real-time forecasts, location-based weather data, and interactive maps."
            image="https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?q=80&w=1965&auto=format&fit=crop"
            tags={["JavaScript", "OpenWeather API", "Chart.js"]}
            githubUrl="https://github.com"
          />
          <ProjectCard
            title="Blog Platform"
            description="A content management system for creating, editing, and publishing blog posts with user authentication."
            image="https://images.unsplash.com/photo-1499750310107-5fef28a66643?q=80&w=2070&auto=format&fit=crop"
            tags={["Vue.js", "Express", "PostgreSQL"]}
            githubUrl="https://github.com"
            liveUrl="https://example.com"
          />
          <ProjectCard
            title="Fitness Tracker"
            description="An application to track workouts, nutrition, and progress with data visualization and goal setting."
            image="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=2070&auto=format&fit=crop"
            tags={["React Native", "GraphQL", "MongoDB"]}
            githubUrl="https://github.com"
          />
        </div>
      </Section>

      {/* Contact Section */}
      <Section id="contact">
        <SectionTitle 
          title="Get In Touch" 
          subtitle="Interested in working together? Feel free to contact me for any project or collaboration opportunities"
        />
        
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="heading-sm mb-6">Contact Information</h3>
            <div className="space-y-6">
              <p className="text-foreground/70">
                I'm currently looking for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="bg-primary/10 p-3 rounded-full text-primary">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="font-medium">Email</p>
                    <a href="mailto:hello@johndoe.dev" className="text-foreground/70 hover:text-primary transition-colors">
                      timothyator744@gmail.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  <div className="bg-primary/10 p-3 rounded-full text-primary">
                    <Globe className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="font-medium">Location</p>
                    <p className="text-foreground/70">
                      Nairobi, Kenya
                    </p>
                  </div>
                </div>
              </div>
              
              <div>
                <h4 className="font-medium mb-3">Connect with me</h4>
                <div className="flex gap-4">
                  <a href="https://github.com" target="_blank" rel="noopener noreferrer" 
                    className="bg-secondary hover:bg-primary hover:text-primary-foreground transition-colors p-3 rounded-full">
                    <Github className="h-5 w-5" />
                  </a>
                  <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" 
                    className="bg-secondary hover:bg-primary hover:text-primary-foreground transition-colors p-3 rounded-full">
                    <Linkedin className="h-5 w-5" />
                  </a>
                  <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" 
                    className="bg-secondary hover:bg-primary hover:text-primary-foreground transition-colors p-3 rounded-full">
                    <Twitter className="h-5 w-5" />
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="heading-sm mb-6">Send a Message</h3>
            <ContactForm />
          </div>
        </div>
      </Section>

      {/* Footer */}
      <footer className="bg-secondary/80 py-8">
        <div className="container-custom text-center">
          <p className="text-foreground/70">
            © {new Date().getFullYear()} Timothy Chepkonga. All rights reserved.
          </p>
          <p className="text-sm mt-2">
            Designed and built with 
            <span className="text-primary mx-1">♥</span> 
            by Tim
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
