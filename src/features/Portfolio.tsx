import { ChevronRight } from "lucide-react";

// Portfolio Content Component
export default function PortfolioPage() {
    return (
        <>
            <div className="py-16 px-6 max-w-7xl mx-auto">
                <h1 className="text-3xl font-semibold text-gray-800 mb-8">Our Portfolio</h1>
                <p className="text-gray-600 mb-8 max-w-3xl">
                    Browse through a selection of our completed projects to get a sense of our craftsmanship and style. Each piece tells a unique story and showcases our commitment to quality.
                </p>

                <div className="flex justify-center mb-8">
                    <div className="inline-flex rounded-md shadow-sm" role="group">
                        {['All', 'Furniture', 'Cabinetry', 'Commercial', 'Restoration'].map((category) => (
                            <button
                                key={category}
                                type="button"
                                className="px-4 py-2 text-sm font-medium border border-gray-200 first:rounded-l-lg last:rounded-r-lg hover:bg-gray-100 focus:z-10 focus:bg-amber-700 focus:text-white focus:border-amber-700"
                            >
                                {category}
                            </button>
                        ))}
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {[...Array(9)].map((_, i) => (
                        <div key={i} className="bg-white rounded-lg shadow-md overflow-hidden">
                            <img
                                src={`/images/project-${i + 1}.jpg`}
                                alt={`Project ${i + 1}`}
                                className="w-full h-64 object-cover"
                            />
                            <div className="p-6">
                                <span className="text-amber-700 text-sm font-medium mb-2 block">
                                    {['Furniture', 'Cabinetry', 'Commercial', 'Restoration'][i % 4]}
                                </span>
                                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                                    {['Custom Dining Table', 'Kitchen Cabinets', 'Office Furniture', 'Antique Restoration',
                                        'Bedroom Set', 'Bathroom Vanity', 'Restaurant Tables', 'Bookcase', 'Coffee Table'][i]}
                                </h3>
                                <p className="text-gray-600 mb-4">
                                    {['Hand-crafted from solid walnut with custom inlays',
                                        'Modern design with premium hardware and soft-close features',
                                        'Complete office redesign with matching desk and shelving',
                                        'Careful restoration of 19th century heirloom piece',
                                        'Coordinated bedroom furniture in cherry wood',
                                        'Custom-designed bathroom storage solution',
                                        'Durable tables designed for high-traffic restaurant',
                                        'Built-in bookcase with adjustable shelving',
                                        'Live edge coffee table with glass inlay'][i]}
                                </p>
                                <button className="text-amber-700 font-medium inline-flex items-center">
                                    View Project Details <ChevronRight size={16} className="ml-1" />
                                </button>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="flex justify-center mt-10">
                    <div className="inline-flex rounded-md shadow-sm" role="group">
                        {[1, 2, 3].map((page) => (
                            <button
                                key={page}
                                type="button"
                                className="px-4 py-2 text-sm font-medium border border-gray-200 first:rounded-l-lg last:rounded-r-lg hover:bg-gray-100 focus:z-10 focus:bg-amber-700 focus:text-white focus:border-amber-700"
                            >
                                {page}
                            </button>
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}
