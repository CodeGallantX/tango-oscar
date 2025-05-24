// import { useState } from "react";
import { FaPhone, FaEnvelope } from "react-icons/fa6";
import Banner from "../components/shared/Banner";
import Footer from "../components/shared/Footer";

const Contact = () => {
    // const [name, setName] = useState('');
    // const [email, setEmail] = useState('');
    // const [phoneNumber, setPhoneNumber] = useState('');
    // const [message, setMessage] = useState('');
    // const [formData, setFormData] = useState('');


    return (
        <div>
            <Banner page="contact" />
            <section className="flex flex-row items-start justify-between space-x-10 py-20 px-6 md:px-16 lg:px-24">
                <div className="flex flex-col items-start justify-start space-y-4">
                    <h2 className="font-bold text-5xl">Contact Us</h2>
                    <p>Feel free to contact us and ask about our services and your bookings.</p>
                    <div>
                        <a href="tel:" className="flex flex-row items-center justify-start space-x-2">
                            <FaPhone className="text-bronze text-lg" />
                            <span className="hover:text-bronze transition-all duration-300 ease-in-out">(+234) 123 456 789</span>
                        </a>
                        <a href="mailto:" className="flex flex-row items-center justify-start space-x-2">
                            <FaEnvelope className="text-bronze text-lg" />
                            <span className="hover:text-bronze transition-all duration-300 ease-in-out">info@tangooscar.com</span>
                        </a>
                    </div>
                </div>
                <form className="w-2/5 flex flex-col items-start justify-center space-y-4">
                    <input 
                        type="text" 
                        name="name" 
                        id="name" 
                        placeholder="Name"
                        className="w-full px-4 py-2 rounded-md border border-gray-500"
                        />
                    <input 
                        type="email" 
                        name="email" 
                        id="email" 
                        placeholder="Email"
                        className="w-full px-4 py-2 rounded-md border border-gray-500"
                        />
                    <input 
                        type="tel" 
                        name="phone" 
                        id="phone" 
                        placeholder="Phone Number"
                        className="w-full px-4 py-2 rounded-md border border-gray-500"
                        />
                    <textarea name="message" id="message"
                        className="w-full p-3 rounded-md border border-gray-500 h-40"
                        placeholder="Type your message."
                    ></textarea>
                    <button type="submit" className="bg-bronze py-3 px-8 rounded-md text-white">Submit</button>
                </form>
            </section>
            <Footer />
        </div>
    )
}

export default Contact;