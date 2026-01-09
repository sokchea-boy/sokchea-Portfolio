import { Card } from "../components/ui/Cards"
import { Code2, Database, Layout, Server, Smartphone, Wrench } from "lucide-react"

export function Skills() {
  const skillCategories = [
    {
      icon: Layout,
      title: "Frontend Development",
      skills: ["React","Vue.js","Javascript", "TypeScript", "Tailwind CSS","Bootstrap 5", "HTML/CSS"],
    },
    {
      icon: Server,
      title: "Backend Development",
      skills: ["Node.js", "PHP","Laravel", "REST APIs", "Authentication"],
    },
    {
      icon: Database,
      title: "Databases",
      skills: [ "MySQL", "SQL"],
    },
    {
      icon: Code2,
      title: "Languages",
      skills: ["JavaScript", "TypeScript", "Python", "SQL", "PHP"],
    },
    {
      icon: Wrench,
      title: "Tools & Others",
      skills: ["Git", "Azure", "Vercel", "Netlify","Jira","Postman","AWS ( EC2 )","Microsoft Fabric", "CI/CD", "Testing"],
    },
    {
      icon: Smartphone,
      title: "UI/UX",
      skills: ["Responsive Design", "Accessibility", "Design Systems", "Figma", "Animation"],
    },
  ]

  return (
    <section id="Skills" className="py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-12 text-balance">Skills & Technologies</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 ">
            {skillCategories.map((category) => (
              <Card key={category.title} className="p-6 hover:border-blue-400 transition-colors">
                <div className="flex items-start gap-4">
                  <div className="p-3  bg-blue-100 rounded-lg">
                    <category.icon className="h-6 w-6 text-accent text-blue-500 " />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-card-foreground mb-3">{category.title}</h3>
                    <div className="flex flex-wrap gap-2 ">
                      {category.skills.map((skill) => (
                        <span
                          key={skill}
                          className="px-3 py-1 bg-secondary bg-blue-100 text-secondary-foreground text-sm rounded-full"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
