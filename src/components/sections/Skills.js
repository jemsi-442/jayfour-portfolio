import { skills } from "@/lib/data";
import SectionHeading from "@/components/ui/SectionHeading";
import Card from "@/components/ui/Card";
import Badge from "@/components/ui/Badge";
import AnimateOnScroll from "@/components/ui/AnimateOnScroll";

export default function Skills() {
  // Reorder categories to emphasize backend first
  const categories = [
    skills.backend,
    skills.database,
    skills.frontend,
    skills.devops,
  ];

  return (
    <section id="skills" className="py-20 md:py-28 bg-background-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <AnimateOnScroll>
          <SectionHeading
            title="Architecture & Technical Expertise"
            subtitle="Backend-driven systems, database modeling, and supporting technologies"
          />
        </AnimateOnScroll>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {categories.map((category, index) => (
            <AnimateOnScroll
              key={category.title}
              animation="animate-fade-in-up"
              delay={index * 150}
            >
              <Card className="h-full">
                <h3 className="text-lg font-bold text-foreground mb-4 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-accent" />
                  {category.title}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {category.items.map((skill) => (
                    <Badge key={skill}>{skill}</Badge>
                  ))}
                </div>
              </Card>
            </AnimateOnScroll>
          ))}
        </div>

        {/* Bottom statement for authority */}
        <AnimateOnScroll animation="animate-fade-in-up" delay={600}>
          <p className="mt-12 max-w-3xl text-foreground-muted text-sm md:text-base leading-relaxed">
            My primary expertise lies in backend architecture and system-level design. 
            Databases and dev environments support production-grade system deployment, 
            while frontend skills enable integration with optimized, maintainable interfaces.
          </p>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
