import React from "react";
import { Laptop, Code2, ShieldCheck } from "lucide-react";

const services = [
    {
        icon: <Laptop className="w-10 h-10 text-blue-500" />,
        title: "Web Development",
        description: "Modern, responsive, and scalable websites using latest technologies."
    },
    {
        icon: <Code2 className="w-10 h-10 text-green-500" />,
        title: "Software Solutions",
        description: "Custom software tailored to your business needs."
    },
    {
        icon: <ShieldCheck className="w-10 h-10 text-purple-500" />,
        title: "Cybersecurity",
        description: "Secure your digital assets with our advanced protection services."
    }
];

const Home = () => {
<<<<<<< HEAD

=======
>>>>>>> 0b425f2bc1f69688fdaa33dd2072d467636bf3e4
    return (
        <div className="min-h-screen bg-gray-50 text-gray-800 font-sans">
            <header className="bg-white shadow p-6 flex justify-between items-center">
                <h1 className="text-2xl font-bold text-blue-600">PlatinumTech</h1>
                <nav className="space-x-4">
                    <a href="#services" className="text-gray-700 hover:text-blue-500">Services</a>
                    <a href="#about" className="text-gray-700 hover:text-blue-500">About</a>
                    <a href="#contact" className="text-gray-700 hover:text-blue-500">Contact</a>
                </nav>
            </header>

            <section className="text-center py-20 bg-gradient-to-br from-blue-100 to-blue-300">
                <h2 className="text-5xl font-extrabold mb-4">Empowering Your Digital Vision</h2>
                <p className="text-lg mb-6 max-w-2xl mx-auto">
                    We deliver innovative IT solutions that drive your business forward.
                </p>
                <button className="text-white bg-blue-600 hover:bg-blue-700 rounded-2xl px-6 py-3 text-lg shadow-lg">
                    Get Started
                </button>
            </section>

            <section id="services" className="py-16 px-4 md:px-16">
                <h3 className="text-3xl font-bold text-center mb-12">Our Services</h3>
                <div className="grid gap-8 md:grid-cols-3">
                    {services.map((service, idx) => (
                        <div key={idx} className="p-6 bg-white rounded-2xl shadow-md hover:shadow-xl transition duration-300 text-center">
                            <div className="flex justify-center mb-4">{service.icon}</div>
                            <h4 className="text-xl font-semibold mb-2">{service.title}</h4>
                            <p className="text-gray-600">{service.description}</p>
                        </div>
                    ))}
                </div>
            </section>

            <section id="about" className="bg-white py-20 text-center">
                <div className="max-w-3xl mx-auto">
                    <h3 className="text-3xl font-bold mb-6">About Us</h3>
                    <p className="text-gray-700 text-lg">
                        At TechNova, we're passionate about technology and innovation. Our team of experts crafts digital experiences that transform businesses and deliver value to customers worldwide.
                    </p>
                </div>
            </section>

            <section id="contact" className="bg-blue-50 py-20 text-center">
                <h3 className="text-3xl font-bold mb-6">Get in Touch</h3>
                <p className="text-gray-700 mb-4">Have a project in mind? We'd love to hear from you!</p>
                <button className="bg-blue-600 text-white px-6 py-3 rounded-2xl text-lg hover:bg-blue-700">
                    Contact Us
                </button>
            </section>

            <footer className="bg-gray-800 text-white text-center py-6">
                <p>&copy; 2025 PlatinumTech. All rights reserved.</p>
            </footer>
        </div>
    );
}

export default Home;