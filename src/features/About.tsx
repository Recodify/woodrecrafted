import { ChevronRight } from "lucide-react";

// About Content Component
export default function AboutPage() {

    return (
        <>
            <div className="py-16 px-6 max-w-7xl mx-auto">
                <h1 className="text-3xl font-semibold text-gray-800 mb-8">About Us</h1>
                <div className="flex flex-col md:flex-row gap-12">
                    <div className="md:w-1/2">
                        <img
                            src="/images/craftsman.jpg"
                            alt="Craftsman at work"
                            className="rounded-lg shadow-lg w-full h-auto object-cover"
                        />
                    </div>
                    <div className="md:w-1/2">
                        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Our Story</h2>
                        <p className="text-gray-600 mb-6">
                            Wood Crafted was founded in 2010 by John Smith, a master craftsman with a passion for creating beautiful, functional wooden pieces. What began as a small workshop in Portland has grown into a full-service custom woodworking business serving clients throughout the Pacific Northwest.
                        </p>
                        <p className="text-gray-600 mb-6">
                            Our team now consists of skilled artisans who share a common dedication to quality craftsmanship and customer satisfaction. We combine traditional woodworking techniques with modern technology to create pieces that are both timeless and contemporary.
                        </p>
                        <h2 className="text-2xl font-semibold text-gray-800 mb-4 mt-8">Our Values</h2>
                        <ul className="space-y-3 text-gray-600">
                            <li className="flex items-start">
                                <ChevronRight size={20} className="text-amber-700 mt-1 mr-2 flex-shrink-0" />
                                <span><strong>Quality:</strong> We never compromise on the quality of our materials or craftsmanship.</span>
                            </li>
                            <li className="flex items-start">
                                <ChevronRight size={20} className="text-amber-700 mt-1 mr-2 flex-shrink-0" />
                                <span><strong>Sustainability:</strong> We source environmentally responsible materials and minimize waste in our production process.</span>
                            </li>
                            <li className="flex items-start">
                                <ChevronRight size={20} className="text-amber-700 mt-1 mr-2 flex-shrink-0" />
                                <span><strong>Collaboration:</strong> We work closely with our clients to ensure their vision is realized in every project.</span>
                            </li>
                            <li className="flex items-start">
                                <ChevronRight size={20} className="text-amber-700 mt-1 mr-2 flex-shrink-0" />
                                <span><strong>Innovation:</strong> We continuously refine our techniques and explore new designs to stay at the forefront of custom woodworking.</span>
                            </li>
                        </ul>
                    </div>
                </div>

            </div>
        </>
    )
}