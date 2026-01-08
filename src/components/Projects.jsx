import { Card } from "../components/ui/Cards"
import { Button } from "../components/ui/Buttons"
import { ExternalLink, Github } from "lucide-react"

export function Projects() {
  const projects = [
    {
      title: "E-Commerce Platform",
      description:
        "A full-stack e-commerce application with product management, shopping cart, and secure checkout. Built with Next.js, Stripe, and PostgreSQL.",
      image: "/ecommerce-platform-modern-ui.jpg",
      tags: ["Next.js", "TypeScript", "Stripe", "PostgreSQL"],
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      title: "Task Management App",
      description:
        "A collaborative task management tool with real-time updates, team workspaces, and project tracking. Features drag-and-drop interface.",
      image: "/task-management-dashboard.png",
      tags: ["React", "Node.js", "MongoDB", "Socket.io"],
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      title: "Weather Dashboard",
      description:
        "A beautiful weather application displaying current conditions, forecasts, and interactive maps. Integrates with multiple weather APIs.",
      image: "/weather-dashboard-app.png",
      tags: ["React", "API Integration", "Charts", "Tailwind CSS"],
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      title: "Portfolio CMS",
      description:
        "A headless CMS for managing portfolio content with an intuitive admin interface. Supports markdown, image uploads, and SEO optimization.",
      image: "/cms-admin-interface.jpg",
      tags: ["Next.js", "Supabase", "MDX", "Admin Panel"],
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      title: "Social Media Dashboard",
      description:
        "Analytics dashboard for tracking social media metrics across platforms. Features data visualization and automated reporting.",
      image: "/analytics-dashboard-charts.png",
      tags: ["React", "GraphQL", "Charts.js", "Express"],
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      title: "AI Chat Application",
      description:
        "Real-time chat application powered by AI with smart replies, conversation history, and multi-language support.",
      image: "/ai-chat-interface.png",
      tags: ["Next.js", "AI SDK", "WebSockets", "Redis"],
      liveUrl: "#",
      githubUrl: "#",
    },
  ]

  return (
    <section id="Projects" className="py-24 bg-card">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold text-card-foreground mb-12 text-balance">Featured Projects</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project) => (
              <Card key={project.title} className="overflow-hidden group hover:border-accent transition-all">
                <div className="aspect-video bg-muted overflow-hidden">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6 space-y-4">
                  <h3 className="text-2xl font-semibold text-card-foreground">{project.title}</h3>
                  <p className="text-muted-foreground leading-relaxed text-pretty">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span key={tag} className="px-3 py-1 bg-blue-100 text-accent text-sm rounded-full">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-3 pt-2">
                    <Button variant="outline" size="sm" asChild>
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="gap-2 flex items-center">
                        <ExternalLink className="h-4 w-4" />
                        Live Demo
                      </a>
                    </Button>
                    <Button variant="outline" size="sm" asChild>
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="gap-2 flex items-center">
                        <Github className="h-4 w-4" />
                        Code
                      </a>
                    </Button>
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
