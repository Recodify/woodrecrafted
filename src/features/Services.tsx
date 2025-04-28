import { ChevronRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { services } from "@/data/services";

// Services Content Component
export default function ServicesPage() {
    const navigate = useNavigate();

    return (
        <>
            <div className="py-16 px-6 max-w-7xl mx-auto">
                <h1 className="text-3xl font-semibold text-gray-800 mb-8">Our Services</h1>
                <p className="text-gray-600 mb-12 max-w-3xl">
                    At <strong>Wood Crafted</strong>, we offer a comprehensive range of woodworking services, blending traditional craftsmanship with modern techniques. Each project is approached with meticulous attention to detail, ensuring lasting quality and beauty. Discover our specialized service categories below:
                </p>

                <div className="space-y-16">
                    {services.map((service, index) => (
                        <div key={index} className={`flex flex-col ${index % 2 === 1 ? 'md:flex-row-reverse' : 'md:flex-row'} gap-8`}>
                            <div className="md:w-1/2">
                                <img
                                    src={service.image}
                                    alt={service.title}
                                    className="rounded-lg shadow-lg w-full h-auto object-cover"
                                />
                            </div>
                            <div className="md:w-1/2">
                                <h2 className="text-2xl font-semibold text-gray-800 mb-4">{service.title}</h2>
                                <p className="text-gray-600 mb-6">{service.description}</p>

                                {service.creations && service.creations.length > 0 && (
                                    <>
                                        <h3 className="text-lg font-medium text-gray-800 mb-3">Our {service.title} Creations Include:</h3>
                                        <ul className="space-y-2 text-gray-600 mb-6">
                                            {service.creations.map((creation, i) => (
                                                <li key={i} className="flex items-start">
                                                    <ChevronRight size={20} className="text-amber-700 mt-1 mr-2 flex-shrink-0" />
                                                    <span>{creation}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </>
                                )}

                                <h3 className="text-lg font-medium text-gray-800 mb-3">Features:</h3>
                                <ul className="space-y-2 text-gray-600 mb-6">
                                    {service.features.map((feature, i) => (
                                        <li key={i} className="flex items-start">
                                            <ChevronRight size={20} className="text-amber-700 mt-1 mr-2 flex-shrink-0" />
                                            <span>{feature}</span>
                                        </li>
                                    ))}
                                </ul>
                                <button
                                    className="bg-amber-700 hover:bg-amber-800 text-white py-2 px-6 rounded-md transition duration-300"
                                    onClick={() => navigate(service.link)}
                                >
                                    See Projects
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}