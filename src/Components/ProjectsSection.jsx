import { ExternalLink, Github, ArrowRight } from "lucide-react"

const projects = [
    {
        id: 1,
        title: "Project One",
        description: "This is a description of project one.",
        image: "/assets/project 1.png",
        tags: ["React", "Node.js", "CSS"],
        github: "https://github.com/user/project-one",
        liveDemo: "https://project-one.example.com"
    },

    {
        id: 2,
        title: "Project Two",
        description: "This is a description of project two.",
        image: "/assets/project 2.png",
        tags: ["React", "Node.js", "CSS"],
        github: "https://github.com/user/project-two",
        liveDemo: "https://project-two.example.com"
    },

    {
        id: 3,
        title: "Project Three",
        description: "This is a description of project three.",
        image: "/assets/Betwise.png",
        tags: ["React", "Node.js", "CSS"],
        github: "https://github.com/user/project-three",
        liveDemo: "https://project-three.example.com"
    },
    
    {
        id: 4,
        title: "Project Four",
        description: "This is a description of project four.",
        image:  "/assets/project 2.png",
        tags: ["React", "Node.js", "CSS"],
        github: "https://github.com/user/project-four",
        liveDemo: "https://project-four.example.com"
    },

    {
        id: 5,
        title: "Project Five",
        description: "This is a description of project five.",
        image: "/assets/project 1.png",
        tags: ["React", "Node.js", "CSS"],
        github: "https://github.com/user/project-five",
        liveDemo: "https://project-five.example.com"
    }
]





export const ProjectsSection = () => {
    return <section id="projects" className="py-24 px-4 relative">
        <div className="container mx-auto max-w-5xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">Featured <span className="text-primary">Projects</span></h2>
            <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">Here are some of the projects I've worked on recently. Click on the links to view the code or live demo.</p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects.map((project, key) => (
                    <div key={key} className="group bg-card rounded-lg overflow-hidden shadow-lg card-hover">
                        <div className="h-48 overflow-hidden">
                            <img src={project.image} alt={project.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                        </div>

                        <div className="p-6">
                            <div className="flex flex-wrap gap-2 mb-4">
                                {project.tags.map((tag) => (
                                    <span key={tag} className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground">{tag}</span>
                                ))}
                            </div>

                            <h3 className="text-xl font-semibold mb-1">{project.title}</h3>
                            <p className="text-muted-foreground text-sm mb-4">{project.description}</p>

                            <div className="flex justify-between items-center">
                                <div className="flex space-x-3">
                                    <a href={project.liveDemo} target="_blank" className="text-foreground/80 hover:text-primary transition-colors duration-300">
                                        <ExternalLink size={20}/>
                                    </a>

                                    <a href={project.github} target="_blank" className="text-foreground/80 hover:text-primary transition-colors duration-300">
                                        <Github size={20}/>
                                    </a>
                                </div>
                            </div>
                        </div>


                    </div>
                ))}
            </div>

            <div className="text-center mt-12">
                <a className="cosmic-button w-fit flex items-center mx-auto gap-2" target="_blank" href="https://github.com/Chachi444">
                    Check my Github <ArrowRight size={16} />
                </a>
            </div>
        </div>
    </section>
}
                            