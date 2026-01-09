import { Card } from "../components/ui/Cards"
import { Button } from "../components/ui/Buttons"
import { ExternalLink, Github } from "lucide-react"
import ecommercePlatform from "../assets/images/ecommerce-platform.jpg";
import taskManagementDashboard from "../assets/images/task-management-dashboard.png";
// import weatherDashboard from "../assets/images/weather-dashboard-app.png";
import cmsAdminInterface from "../assets/images/cms-admin-interface.png";
// import analyticsDashboard from "../assets/images/analytics-dashboard-charts.png";
import aiChatInterface from "../assets/images/ai-chat-interface.png";


export function Projects() {
 const projects = [
  {
    title: "Inventory App",
    description:
      "The purpose of the inventory app is to help businesses easily manage and track their products. It allows users to record stock information, check available quantities, and update inventory in real time.",
    image: ecommercePlatform,
    tags: ["Html", "JavaScript", "Css"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "Web Design Project “ PNC-Website”",
    description:
      "The purpose of the PNC website is to provide an easy-to-use platform where users can quickly find clear and useful information. The website is designed to be simple and user-friendly, especially for new students and beginners.",
    image: taskManagementDashboard,
    tags: ["Html", "Sass", "Css"],
    liveUrl: "#",
    githubUrl: "#",
  },
  // {
  //   title: "Weather Dashboard",
  //   description:
  //     "A beautiful weather application displaying current conditions, forecasts, and interactive maps. Integrates with multiple weather APIs.",
  //   image: weatherDashboard,
  //   tags: ["React", "API Integration", "Charts", "Tailwind CSS"],
  //   liveUrl: "#",
  //   githubUrl: "#",
  // },
  {
    title: "Window management system tool",
    description:
      "The purpose of the window management system tool is to help users efficiently organize and manage multiple application windows on a computer screen.",
    image: cmsAdminInterface,
    tags: ["Python",],
    liveUrl: "#",
    githubUrl: "#",
  },
  // {
  //   title: "Social Media Dashboard",
  //   description:
  //     "Analytics dashboard for tracking social media metrics across platforms. Features data visualization and automated reporting.",
  //   image: analyticsDashboard,
  //   tags: ["React", "GraphQL", "Charts.js", "Express"],
  //   liveUrl: "#",
  //   githubUrl: "#",
  // },
  {
    title: "Farm Management System ",
    description:
      "The Farm Management System (FMS) is a web-based application designed to help farmers to manage their farms effectively.",
    image: aiChatInterface,
    tags: ["Reach.js","JavaScript", "Bootstrap 5", "MySQL", "Laravel"],
    liveUrl: "#",
    githubUrl: "https://github.com/Kin-Doung/VC2-Agriculture",
  },
];


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
