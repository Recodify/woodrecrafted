import { getPortfolioProjects } from "@/data/projects";
import { ChevronRight } from "lucide-react";

// Portfolio Content Component
export default function PortfolioPage() {
    // Define project categories
    const projects = getPortfolioProjects();

    return (
        <>
            <div className="py-16 px- max-w-7xl mx-auto">
                <h1 className="text-3xl font-semibold text-gray-800 mb-8">Our Portfolio</h1>
                <p className="text-gray-600 mb-8 max-w-3xl">
                    Browse through a selection of our completed projects to get a sense of our craftsmanship and style. Each piece tells a unique story and showcases our commitment to quality.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-12">
                    {projects.map((project) => (
                        <div key={project.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                            <img
                                src={project.image}
                                alt={project.title}
                                className="w-full h-[26rem] object-cover"
                            />
                            <div className="p-6">
                                <span className="text-amber-700 text-sm font-medium mb-2 block">
                                    {project.category}
                                </span>
                                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                                    {project.title}
                                </h3>
                                <p className="text-gray-600 mb-4">
                                    {project.description}
                                </p>
                                <button className="text-amber-700 font-medium inline-flex items-center">
                                    View Project Details <ChevronRight size={16} className="ml-1" />
                                </button>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </>
    )
}