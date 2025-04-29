import { getHomePageProjects } from "@/data/projects";
import { ChevronRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { getHomepageServices } from "@/data/services";

// Home Content Component
export default function HomePage() {
    const navigate = useNavigate()
    const projects = getHomePageProjects();
    const services = getHomepageServices();
    return (
        <>
            <div className="relative">
                <div className="w-full h-72 bg-gray-800 flex items-center justify-center overflow-hidden">

                    <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6">
                        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Craftsmanship in Every Detail</h1>
                        <p className="text-xl text-white mb-8 max-w-2xl">Custom woodworking solutions crafted with passion and precision</p>
                        <button
                            className="bg-amber-700 hover:bg-amber-800 text-white py-3 px-8 rounded-md transition duration-300"
                            onClick={() => navigate('/contact')}
                        >
                            Get a Quote
                        </button>
                    </div>
                </div>
            </div>
            <div className="py-16 px-6 max-w-7xl mx-auto">
                <div className="flex flex-col md:flex-row items-center gap-12">
                    <div className="md:w-1/2">
                        <img
                            src="../images/workshop2.png"
                            alt="Workshop"
                            className="rounded-lg shadow-lg"
                        />
                    </div>
                    <div className="md:w-1/2">
                        <h2 className="text-3xl font-semibold text-gray-800 mb-6">About Our Craft</h2>
                        <p className="text-gray-600 mb-4">
                            Welcome to a world of bespoke woodworking that transforms homes inside and out.
                            From garden benches and treehouse retreats to heritage restoration, custom furniture or elegant storage solutions,
                            our workshop brings your vision to life through skilled craftsmanship.
                        </p>
                        <p className="text-gray-600 mb-6">
                            Each project showcases our commitment to thoughtful design, quality materials, and precise execution.
                        </p>
                         <p className="text-gray-600 mb-6">
                            What sets us apart is our understanding that woodwork isn't just about creating something beautiful, it's about enhancing how you experience your home.
                            Each piece is thoughtfully designed to serve your needs while expressing a distinctive character and your personal taste.
                        </p>
                        <p className="text-gray-600 mb-6">
                            Discover how our hands can transform raw timber into the spaces and pieces that will become part of your everyday
                        </p>

                        <button
                            className="border-2 border-amber-700 text-amber-700 hover:bg-amber-700 hover:text-white py-2 px-6 rounded-md transition duration-300"
                            onClick={() => navigate('/about')}
                        >
                            Learn More About Us
                        </button>
                    </div>
                </div>
            </div>

            {/* Services Section */}
            <div className="bg-gray-100 py-16 px-6">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-semibold text-gray-800 mb-4">Our Services</h2>
                        <p className="text-gray-600 max-w-3xl mx-auto">
                            We offer a wide range of woodworking services to meet your unique needs, from custom furniture, to garden, outdoor, repair, restoration or anything else you can think up, just ask.
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {services.map((service, index) => (
                            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                                <div className="w-12 h-12 bg-amber-700 text-white rounded-full flex items-center justify-center mb-4">
                                    <span className="text-xl font-bold">{service.icon}</span>
                                </div>
                                <h3 className="text-xl font-semibold text-gray-800 mb-2">{service.title}</h3>
                                <p className="text-gray-600">{service.description}</p>
                            </div>
                        ))}
                    </div>
                    <div className="text-center mt-10">
                        <button
                            className="bg-amber-700 hover:bg-amber-800 text-white py-3 px-8 rounded-md transition duration-300"
                            onClick={() => navigate('/services')}
                        >
                            View All Services
                        </button>
                    </div>
                </div>
            </div>

            {/* Featured Projects Section */}
            <div className="py-16 px-6 max-w-7xl mx-auto">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-semibold text-gray-800 mb-4">Featured Projects</h2>
                    <p className="text-gray-600 max-w-3xl mx-auto">
                        Browse through some of our recent work that showcases our craftsmanship and attention to detail.
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {projects.map((project) => (
                        <div key={project.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                            <img
                                src={project.image}
                                alt={project.title}
                                className="w-full h-96 object-cover"
                            />
                            <div className="p-6">
                                <span className="text-amber-700 text-sm font-medium mb-2 block">{project.category}</span>
                                <h3 className="text-xl font-semibold text-gray-800 mb-2">{project.title}</h3>
                                <p className="text-gray-600 mb-4">{project.description}</p>
                                <button className="text-amber-700 font-medium inline-flex items-center">
                                    View Project <ChevronRight size={16} className="ml-1" />
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="text-center mt-10">
                    <button
                        className="border-2 border-amber-700 text-amber-700 hover:bg-amber-700 hover:text-white py-2 px-6 rounded-md transition duration-300"
                        onClick={() => navigate('/portfolio')}
                    >
                        View Full Portfolio
                    </button>
                </div>
            </div>

            {/* Testimonials Section */}
            {/* <div className="bg-gray-100 py-16 px-6">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-semibold text-gray-800 mb-4">What Our Clients Say</h2>
                        <p className="text-gray-600 max-w-3xl mx-auto">
                            Don't just take our word for it. Here's what our clients have to say about our work.
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {testimonials.map((testimonial) => (
                            <div key={testimonial.id} className="bg-white p-6 rounded-lg shadow-md">
                                <div className="mb-4">
                                    {[...Array(5)].map((_, i) => (
                                        <span key={i} className="text-amber-500">★</span>
                                    ))}
                                </div>
                                <p className="text-gray-600 mb-4 italic">"{testimonial.text}"</p>
                                <div>
                                    <p className="font-semibold text-gray-800">{testimonial.name}</p>
                                    <p className="text-gray-500 text-sm">{testimonial.role}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div> */}

            {/* Call to Action */}
            <div className="bg-amber-700 py-12 px-6">
                <div className="max-w-5xl mx-auto text-center">
                    <h2 className="text-3xl font-semibold text-white mb-6">Ready to Start Your Custom Project?</h2>
                    <p className="text-amber-100 mb-8 max-w-3xl mx-auto">
                        Whether you have a specific design in mind or need help bringing your vision to life, we're here to help.
                    </p>
                    <button
                        className="bg-white text-amber-700 hover:bg-gray-100 py-3 px-8 rounded-md transition duration-300"
                        onClick={() => navigate('/contact')}
                    >
                        Contact Us Today
                    </button>
                </div>
            </div>
        </>
    );

}