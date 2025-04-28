import { Facebook, Instagram, Mail, MapPin, Phone, Twitter } from "lucide-react";

// Contact Content Component
export default function ContactPage() {
    return (
        <>
            <div className="py-16 px-6 max-w-7xl mx-auto">
                <div className="flex flex-col lg:flex-row gap-12">
                    <div className="lg:w-1/2">
                        <h1 className="text-3xl font-semibold text-gray-800 mb-6">Contact Us</h1>
                        <p className="text-gray-600 mb-8">
                            We'd love to hear about your project. Fill out the form below to get in touch, and we'll get back to you as soon as possible.
                        </p>

                        <form className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                                    <input
                                        type="text"
                                        id="name"
                                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500"
                                        placeholder="Your name"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                                    <input
                                        type="email"
                                        id="email"
                                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500"
                                        placeholder="Your email"
                                    />
                                </div>
                            </div>

                            <div>
                                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
                                <input
                                    type="tel"
                                    id="phone"
                                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500"
                                    placeholder="Your phone number"
                                />
                            </div>

                            <div>
                                <label htmlFor="project" className="block text-sm font-medium text-gray-700 mb-1">Project Type</label>
                                <select
                                    id="project"
                                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500"
                                >
                                    <option value="">Select a project type</option>
                                    <option value="furniture">Custom Furniture</option>
                                    <option value="bits">Bits & Bobs</option>
                                    <option value="restoration">Restoration & Repair</option>
                                    <option value="garden">Garden & Outdoor</option>
                                    <option value="other">Other</option>
                                </select>
                            </div>

                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                                <textarea
                                    id="message"
                                    rows={5}
                                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500"
                                    placeholder="Tell us about your project"
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                className="bg-amber-700 hover:bg-amber-800 text-white py-3 px-8 rounded-md transition duration-300"
                            >
                                Send Message
                            </button>
                        </form>
                    </div>

                    <div className="lg:w-1/2">
                        <div className="bg-gray-100 p-8 pt-16 pl-16 rounded-lg h-full">
                            <h2 className="text-2xl font-semibold text-gray-800 mb-6">Visit Our Workshop</h2>
                            <div className="space-y-6">
                                <div className="flex items-start">
                                    <MapPin size={24} className="text-amber-700 mr-4 flex-shrink-0" />
                                    <div>
                                        <h3 className="font-medium text-gray-800">Address</h3>
                                        <p className="text-gray-600">Paddingham House<br />Bristol Road <br /> Winscombe<br /> BS25 1PW</p>
                                    </div>
                                </div>

                                <div className="flex items-start">
                                    <Phone size={24} className="text-amber-700 mr-4 flex-shrink-0" />
                                    <div>
                                        <h3 className="font-medium text-gray-800">Phone</h3>
                                        <p className="text-gray-600">07551545656</p>
                                    </div>
                                </div>

                                <div className="flex items-start">
                                    <Mail size={24} className="text-amber-700 mr-4 flex-shrink-0" />
                                    <div>
                                        <h3 className="font-medium text-gray-800">Email</h3>
                                        <p className="text-gray-600">sam@recodify.co.uk</p>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-8">
                                <h3 className="font-medium text-gray-800 mb-3">Connect With Us</h3>
                                <div className="flex space-x-4">
                                    <a href="#" className="text-amber-700 hover:text-amber-800">
                                        <Facebook size={24} />
                                    </a>
                                    <a href="#" className="text-amber-700 hover:text-amber-800">
                                        <Instagram size={24} />
                                    </a>
                                    <a href="#" className="text-amber-700 hover:text-amber-800">
                                        <Twitter size={24} />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}