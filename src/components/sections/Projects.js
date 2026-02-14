import { projects } from "@/lib/data";
import SectionHeading from "@/components/ui/SectionHeading";
import ProjectCard from "@/components/ui/ProjectCard";
import AnimateOnScroll from "@/components/ui/AnimateOnScroll";

export default function Projects() {
  return (
    <section id="projects" className="py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <AnimateOnScroll>
          <SectionHeading
            title="System Architectures & Backend Engineering"
            subtitle="Production-focused backend systems designed with scalability, structured logic, and security-first principles."
          />
        </AnimateOnScroll>

        {/* Intro positioning paragraph */}
        <AnimateOnScroll animation="animate-fade-in-up" delay={100}>
          <div className="max-w-3xl mb-12 text-foreground-secondary text-base md:text-lg leading-relaxed">
            Each project below represents a system-level implementation — 
            not just interface development. These systems emphasize structured 
            backend logic, authentication-driven workflows, API integrity, 
            database modeling, and scalable architectural decisions built 
            for real-world operational environments.
          </div>
        </AnimateOnScroll>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {projects.map((project, index) => (
            <AnimateOnScroll
              key={project.title}
              animation="animate-fade-in-up"
              delay={index * 100}
            >
              <ProjectCard {...project} />
            </AnimateOnScroll>
          ))}
        </div>

        {/* Closing authority statement */}
        <AnimateOnScroll animation="animate-fade-in-up" delay={300}>
          <div className="mt-16 max-w-3xl text-sm md:text-base text-foreground-muted leading-relaxed">
            My focus across all systems is consistency in architecture, 
            clean separation of concerns, secure API design, role-based 
            access control implementation, and maintainable backend structures 
            capable of scaling without compromising performance or integrity.
          </div>
        </AnimateOnScroll>

      </div>
    </section>
  );
}
