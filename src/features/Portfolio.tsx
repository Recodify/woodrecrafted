// First, add a console log to check if the component is mounting multiple times
import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { getPortfolioProjects } from "@/data/projects";
import { getFilterCatgories } from "@/data/categories";

// Portfolio Content Component
export default function PortfolioPage() {
    console.log("PortfolioPage component is mounting");

    // Get location and navigate from React Router
    const location = useLocation();
    const navigate = useNavigate();

    // Define project categories
    const projects = getPortfolioProjects();
    const filterCategories = getFilterCatgories();

    // Initialize selected category from URL or default to "All"
    const [selectedCategory, setSelectedCategory] = useState("All");

    // Effect to read the category from URL when component mounts
    useEffect(() => {
        console.log("PortfolioPage useEffect running");
        const searchParams = new URLSearchParams(location.search);
        const categoryParam = searchParams.get("category");
        if (categoryParam && filterCategories.includes(categoryParam)) {
            setSelectedCategory(categoryParam);
        }
    }, [location.search, filterCategories]);

    // Filter projects based on selected category
    const filteredProjects = selectedCategory === "All"
        ? projects
        : projects.filter(project => project.category === selectedCategory);

    // Handler function for category selection with proper typing
    const handleCategoryChange = (category: string): void => {
        setSelectedCategory(category);

        // Update the URL with the new category
        const searchParams = new URLSearchParams(location.search);
        if (category === "All") {
            searchParams.delete("category");
        } else {
            searchParams.set("category", category);
        }

        // Update URL without reloading the page
        navigate({
            pathname: location.pathname,
            search: searchParams.toString()
        }, { replace: false });
    };

    return (
        <>
            <div className="py-16 px-6 max-w-7xl mx-auto">
                <h1 className="text-3xl font-semibold text-gray-800 mb-8">Our Portfolio</h1>
                <p className="text-gray-600 mb-8 max-w-3xl">
                    Browse through a selection of our completed projects to get a sense of our craftsmanship and style. Each piece tells a unique story and showcases our commitment to quality.
                </p>
                <div className="flex justify-center mb-8">
                    <div className="inline-flex rounded-md shadow-sm" role="group">
                        {filterCategories.map(x => (
                            <button
                                key={x}
                                type="button"
                                className={`px-4 py-2 text-sm font-medium border border-gray-200 first:rounded-l-lg last:rounded-r-lg hover:bg-gray-100 focus:z-10 ${
                                    selectedCategory === x ? "bg-amber-700 text-white border-amber-700" : ""
                                }`}
                                onClick={() => handleCategoryChange(x)}
                            >
                                {x}
                            </button>
                        ))}
                    </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredProjects.map((project) => (
                        <div key={project.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                            <img
                                src={project.image}
                                alt={project.title}
                                className="w-full h-64 object-cover"
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
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}