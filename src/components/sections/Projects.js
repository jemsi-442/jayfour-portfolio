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
            title="Featured Projects"
            subtitle="A selection of my recent work and personal projects"
          />
        </AnimateOnScroll>

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
      </div>
    </section>
  );
}
