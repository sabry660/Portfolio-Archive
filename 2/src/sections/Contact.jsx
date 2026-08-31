import TitleHeader from "../components/TitleHeader.jsx";
import ContactExperience from "../components/ContactExperience/ContactExperience.jsx";
import {useRef, useState} from "react";
import emailjs from "@emailjs/browser"

const Contact = () => {
    const formRef = useRef(null);

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    })

    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData({
            ...formData,
            [name]: value
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        setLoading(true)
        try {
            await emailjs.sendForm(
                import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
                import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
                formRef.current,
                import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY,
            )
            setFormData({name: '', email: '', message: ''})
        } catch (error) {
            console.log('EMAILJS ERROR, ', error)
        } finally {
            setLoading(false)
        }
    }

    return (
        <section id="contact" className="flex-center section-padding">
            <div className="w-full h-full md:px-10 px-5">
                <TitleHeader
                    title="Get In Touch - Let's Connect"
                    sub="Have questions or ideas? Let's talk!"
                />

                <div className="grid-12-cols mt-16">
                    {/* Contact Info & 3D Experience - Top Side (Mobile) */}
                    <div className="xl:col-span-7 min-h-80 md:min-h-96 flex flex-col gap-3 md:gap-4 lg:gap-6 w-full order-1 xl:order-2">
                        <div className="w-full h-40 md:h-48 lg:h-64 bg-[#6c48ac] hover:cursor-grab rounded-3xl overflow-hidden">
                            <ContactExperience/>
                        </div>
                        <div className="w-full bg-[#1a1a2e] rounded-3xl p-3 md:p-4 lg:p-8 text-white">
                            <h3 className="text-base md:text-lg lg:text-xl xl:text-2xl font-bold mb-2 md:mb-3 lg:mb-4 xl:mb-6">Contact Information</h3>
                            <div className="space-y-2 md:space-y-3 lg:space-y-4">
                                <div className="flex items-center gap-2 md:gap-3 lg:gap-4">
                                    <div className="w-7 h-7 md:w-8 md:h-8 lg:w-10 lg:h-10 xl:w-12 xl:h-12 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0">
                                        <svg className="w-3 h-3 md:w-4 md:h-4 lg:w-5 lg:h-5 xl:w-6 xl:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                        </svg>
                                    </div>
                                    <div className="min-w-0">
                                        <p className="text-white-50 text-[9px] md:text-[10px] lg:text-xs xl:text-sm">Phone</p>
                                        <p className="font-semibold text-[10px] md:text-xs lg:text-sm xl:text-lg break-all">+20 120 128 9813</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-2 md:gap-3 lg:gap-4">
                                    <div className="w-7 h-7 md:w-8 md:h-8 lg:w-10 lg:h-10 xl:w-12 xl:h-12 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0">
                                        <svg className="w-3 h-3 md:w-4 md:h-4 lg:w-5 lg:h-5 xl:w-6 xl:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                        </svg>
                                    </div>
                                    <div className="min-w-0">
                                        <p className="text-white-50 text-[9px] md:text-[10px] lg:text-xs xl:text-sm">Email</p>
                                        <p className="font-semibold text-[10px] md:text-xs lg:text-sm xl:text-lg break-all">engmohamedsabry925@gmail.com</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Contact Form - Bottom Side (Mobile) */}
                    <div className="xl:col-span-5 w-full order-2 xl:order-1">
                        <div className="flex-center card-border rounded-xl p-4 md:p-6 lg:p-10">
                            <form onSubmit={handleSubmit} className="w-full flex flex-col gap-4 md:gap-5 lg:gap-7" ref={formRef}>
                                <div>
                                    <label htmlFor="name">Name</label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        placeholder="What's your name?"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>

                                <div>
                                    <label htmlFor="email">Email</label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        placeholder="What's your email address?"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>

                                <div>
                                    <label htmlFor="message">Message</label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        rows="4 md:5"
                                        placeholder="How can we help you?"
                                        value={formData.message}
                                        onChange={handleChange}
                                        required
                                    ></textarea>
                                </div>

                                <button type="submit" disabled={loading}>
                                    <div className="cta-button group">
                                        <div className="bg-circle"/>
                                        <p className="text">{loading ? 'Sending ...' : 'Send Message'}</p>
                                        <div className="arrow-wrapper">
                                            <img src="/images/arrow-down.svg" alt="arrow"/>
                                        </div>
                                    </div>
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Contact
