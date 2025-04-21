import { ChevronRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

// Services Content Component
export default function ServicesPage() {
    const navigate = useNavigate()
    return (
        <>
            <div className="py-16 px-6 max-w-7xl mx-auto">
                <h1 className="text-3xl font-semibold text-gray-800 mb-8">Our Services</h1>
                <p className="text-gray-600 mb-12 max-w-3xl">
                    We offer a comprehensive range of woodworking services to meet all your needs. Each project is approached with meticulous attention to detail and a commitment to excellence.
                </p>

                <div className="space-y-16">
                    {[
                        {
                            title: "Custom Furniture",
                            description: "We create one-of-a-kind furniture pieces tailored to your specific needs and aesthetic preferences. From dining tables and chairs to entertainment centers and bookcases, our custom furniture is built to last for generations.",
                            features: ["Personalized design consultation", "Selection of premium hardwoods", "Custom sizing and dimensions", "Unique finishes and details"],
                            image: "/images/furniture-service.jpg"
                        },
                        {
                            title: "Cabinetry",
                            description: "Our custom cabinetry solutions are designed to maximize both beauty and functionality in your space. We specialize in kitchen cabinets, bathroom vanities, built-ins, and storage solutions that make the most of your available space.",
                            features: ["Detailed measurements and space planning", "Premium hardware options", "Soft-close drawers and doors", "Custom storage solutions"],
                            image: "/images/cabinetry-service.jpg"
                        },
                        {
                            title: "Restoration & Repair",
                            description: "Breathe new life into your treasured wooden pieces with our expert restoration services. We can repair damaged furniture, restore antiques, and refinish surfaces to bring back their original beauty or update them with a fresh look.",
                            features: ["Structural repairs", "Surface refinishing", "Hardware replacement", "Color matching"],
                            image: "/images/restoration-service.jpg"
                        },
                        {
                            title: "Commercial Projects",
                            description: "We work with businesses to create custom woodwork for offices, restaurants, retail spaces, and more. From reception desks and conference tables to retail displays and restaurant fixtures, we can enhance your commercial space with beautiful, functional woodwork.",
                            features: ["Durable construction for high-traffic areas", "Brand-aligned design elements", "ADA compliance options", "Installation services"],
                            image: "/images/commercial-service.jpg"
                        }
                    ].map((service, index) => (
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
                                    onClick={() => navigate('/contact')}
                                >
                                    Inquire About This Service
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}