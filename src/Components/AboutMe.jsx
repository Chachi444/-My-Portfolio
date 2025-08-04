import { Briefcase, Code } from "lucide-react";
import { User } from "lucide-react";


export const AboutMe = () => {
    return <section id="about" className="py-24 px-4 relative">
        <div className="container mx-auto max-w-5xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">About <span className="text-primary">Me</span></h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
                <div className="space-y-6">
                    <h3 className="text-2xl font-semibold">Passionate Backend Developer & Tech Creator</h3>

                    <p className="text-muted-foreground">With 2 years of experience in backend development, I have honed my skills in building robust APIs and managing databases.</p>

                    <p className="text-muted-foreground"> I am a passionate backend developer who thrives on building robust, scalable, and efficient systems. My journey into tech began with a curiosity about how things work beneath the surface, evolving into a deep love for developing server-side logic, integrating APIs, and managing complex databases. While my main focus is backend development, I also bring a creative edge to the frontend, crafting responsive interfaces that complement the functionality behind the scenes.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <a href="#contact" className="cosmic-button">Contact Me
                        </a>

                        <a href="/assets/Charity Okechukwu2.pdf" target="_blank" className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary hover:bg-primary/10 transition-colors duration-300">
                        Download Resume
                        </a>
                    </div>
                </div>

                <div className="grid grid-cols-1 gap-6">
                    <div className="gradient-border p-6 card-hover">
                        <div className="flex items-start gap-4">
                            <div className="p-3 rounded-full bg-primary/10">
                            <Code className="h-6 w-6 text-primary"/>
                            </div>
                            <div className="text-left">
                                <h4 className="font-semibold text-lg">Backend Development</h4>
                                <p className="text-muted-foreground">I specialize in creating RESTful APIs and managing databases using technologies like Node.js, Express, and MongoDB.

                                </p>

                            </div>



                        </div>
                    </div>
                    <div className="gradient-border p-6 card-hover">
                        <div className="flex items-start gap-4">
                            <div className="p-3 rounded-full bg-primary/10">
                            <User className="h-6 w-6 text-primary"/>
                            </div>
                            <div className="text-left">
                                <h4 className="font-semibold text-lg">UI/UX Design</h4>
                                <p className="text-muted-foreground">Designing intuitive User interfaces and seamless User experiences is my forte. I believe in creating interfaces that are not only functional but also visually appealing, ensuring that users have a smooth and engaging interaction with the applications I develop.

                                </p>

                            </div>



                        </div>
                    </div>
                    <div className="gradient-border p-6 card-hover">
                        <div className="flex items-start gap-4">
                            <div className="p-3 rounded-full bg-primary/10">
                            <Briefcase className="h-6 w-6 text-primary"/>
                            </div>

                            <div className="text-left">
                                <h4 className="font-semibold text-lg">Project Managementt</h4>
                                <p className="text-muted-foreground">I have a knack for organizing tasks, managing timelines, and ensuring that projects are delivered on time and within scope. My experience in project management has equipped me with the skills to lead teams effectively and drive projects to successful completion.

                                </p>

                            </div>



                        </div>
                    </div>
            
                </div>
            </div>
        </div>
    </section>
}
