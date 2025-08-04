import { useState } from "react";
import { cn } from "../lib/utils";

const skills = [
    //frontend skills
    { name: "HTML", icon: "html-icon", level: 70, category: "frontend" },
    { name: "CSS", icon: "css-icon", level: 60, category: "frontend" },
    { name: "JavaScript", icon: "javascript-icon", level: 80, category: "frontend" },
    { name: "React", icon: "react-icon", level: 75, category: "frontend" },
    { name: "Vue.js", icon: "vue-icon", level: 70, category: "frontend" },

    //backend skills
    { name: "Node.js", icon: "nodejs-icon", level: 70, category: "backend" },
    { name: "Express.js", icon: "express-icon", level: 65, category: "backend" },
    { name: "Python", icon: "python-icon", level: 80, category: "backend" },
    { name: "Django", icon: "django-icon", level: 75, category: "backend" },

    //database skills
    { name: "MongoDB", icon: "mongodb-icon", level: 70, category: "database" },
    { name: "MySQL", icon: "mysql-icon", level: 65, category: "database" },

    //version control skills
    { name: "Git", icon: "git-icon", level: 80, category: "version control" },

    //devops skills
    { name: "Docker", icon: "docker-icon", level: 70, category: "tools" },
    { name: "VS Code", icon: "vs-code-icon", level: 60, category: "tools" },
];

const categories = [
    //{"all, frontend, backend, database, version control, tools"}
    { name: "All", value: "all" },
    { name: "Frontend", value: "frontend" },
    { name: "Backend", value: "backend" },
    { name: "Database", value: "database" },
    { name: "Version Control", value: "version control" },
    { name: "Tools", value: "tools" },
];





export const SkillsSection = () => {
    const [activeCategory, setActiveCategory] = useState("all");
    const filteredSkills = skills.filter((skills) =>activeCategory === "all" || skills.category === activeCategory)


    return (
        <section id="skills" className="py-24 px-4 relative bg-secondary/30">
            <div className="container mx-auto max-w-6xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center"> My <span className="text-primary"> Skills</span></h2>

                <div className="flex flex-wrap justify-center gap-4 mb-12">
                    {categories.map((category, key) =>(
                        <button key={key} 
                        onClick={() => setActiveCategory(category.value)}
                        className={cn("px-5 py-2 rounded-full transition-colors duration-300 capitalize",
                            activeCategory === category.value ? "bg-primary text-primary-foreground" : "bg-secondary/70 text-foreground hover:bg-secondary"
                        )}>{category.name}
                        </button>
                    ))}
                </div>



                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredSkills.map((skill, key) =>(
                        <div
                            key={key}
                            className="bg-card p-6 rounded-lg shadow-x5 card-hover ">
                                <div className="text-left mb-4">
                                    <h3 className="font-semibold text-lg">{skill.name}</h3>
                                    </div>
                                    <div className="w-full bg-secondary/50 h-2 rounded-full overflow-hidden">
                                   <div className="bg-primary h-2 rounded-full origin-left transition-all duration-1500 ease-out" style={{width: skill.level + "%"}}/>
                                    </div>
                                <div className="text-right mt-1">
                                    <span className="text-sm text-muted-foreground">{skill.level}%</span>
                                    </div>    
                        
                        </div>
                        
                    ))}

                </div>



            </div>

        </section>
    )
}