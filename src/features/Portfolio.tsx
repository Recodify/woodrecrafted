import { ChevronRight } from "lucide-react";

// Portfolio Content Component
export default function PortfolioPage() {
    // Define project categories
    const categories = ['All', 'Garden and Outdoor', 'Furniture', 'Restoration', 'Custom'];

    // Define projects array with real data
    const projects = [
        {
            id: 1,
            title: 'Tree House',
            description: 'Custom-built tree house designed for durability and safety with natural wood finishes',
            category: 'Garden and Outdoor',
            image: '/images/project-1.jpg'
        },
        {
            id: 2,
            title: 'Fire Wood Store',
            description: 'Weather-resistant firewood storage solution with proper ventilation and rustic design',
            category: 'Garden and Outdoor',
            image: '/images/project-2.jpg'
        },
        {
            id: 3,
            title: 'Garden Bench',
            description: 'Handcrafted hardwood garden bench with ergonomic design for comfort and longevity',
            category: 'Garden and Outdoor',
            image: '/images/project-3.jpg'
        },
        {
            id: 4,
            title: 'Victorian Style Internal Window Shutters',
            description: 'Period-authentic window shutters with adjustable louvers and hand-painted finish',
            category: 'Custom',
            image: '/images/project-4.jpg'
        },
        {
            id: 5,
            title: 'Whisky Barrel Planters',
            description: 'Repurposed authentic whisky barrels transformed into elegant garden planters',
            category: 'Garden and Outdoor',
            image: '/images/project-5.jpg'
        },
        {
            id: 6,
            title: 'Sash Window Restoration',
            description: 'Complete restoration of period sash windows with careful preservation of original features',
            category: 'Restoration',
            image: '/images/project-6.jpg'
        },
        {
            id: 7,
            title: 'Stair Gate for Children',
            description: 'Custom-designed child safety gate matching existing staircase style and woodwork',
            category: 'Custom',
            image: '/images/project-7.jpg'
        },
        {
            id: 8,
            title: 'Car Port Doors',
            description: 'Durable hardwood carport doors with custom hardware and weather-resistant finish',
            category: 'Garden and Outdoor',
            image: '/images/project-8.jpg'
        },
        {
            id: 9,
            title: 'Shelving',
            description: 'Custom built-in shelving solution designed to maximize space and complement room aesthetics',
            category: 'Furniture',
            image: '/images/project-9.jpg'
        },
        {
            id: 10,
            title: 'Mantlepiece',
            description: 'Hand-carved oak mantelpiece with traditional detailing and protective finish',
            category: 'Furniture',
            image: '/images/project-10.jpg'
        }
    ];

    return (
        <>
            <div className="py-16 px-6 max-w-7xl mx-auto">
                <h1 className="text-3xl font-semibold text-gray-800 mb-8">Our Portfolio</h1>
                <p className="text-gray-600 mb-8 max-w-3xl">
                    Browse through a selection of our completed projects to get a sense of our craftsmanship and style. Each piece tells a unique story and showcases our commitment to quality.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {projects.map((project) => (
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