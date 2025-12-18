import { ShieldCheck, Sparkles, Stethoscope, Clock, Smile, UserCheck } from 'lucide-react'
import Button from '../components/Button'
import ServiceCard from '../components/ServiceCard'
import DoctorCard from '../components/DoctorCard'
import './Home.css'

export default function Home() {
    const doctors = [
        {
            name: "Dr. Ananya Menon",
            qualification: "BDS, MDS",
            experience: "10+ years experience",
            image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80&w=400"
        },
        {
            name: "Dr. Rahul Varma",
            qualification: "BDS",
            experience: "7 years experience",
            image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&q=80&w=400"
        },
        {
            name: "Dr. Neha Thomas",
            qualification: "BDS, Cosmetic Dentistry",
            experience: "5 years experience",
            image: "https://i.pinimg.com/736x/09/b7/84/09b784f0da470f9593a1654f808036b6.jpg"
        }
    ]

    const services = [
        {
            icon: Stethoscope,
            title: "General Dentistry",
            description: "Routine checkups, cleanings, and preventive care for your whole family."
        },
        {
            icon: Sparkles,
            title: "Cosmetic Dentistry",
            description: "Transform your smile with veneers, bonding, and aesthetic treatments."
        },
        {
            icon: ShieldCheck,
            title: "Dental Implants",
            description: "Permanent, natural-looking solutions for missing teeth."
        },
        {
            icon: Smile,
            title: "Teeth Whitening",
            description: "Safe and effective whitening treatments for a brighter smile."
        }
    ]

    return (
        <div className="page home">
            {/* Hero Section */}
            <section className="hero">
                <div className="hero-overlay"></div>
                <div className="container hero-content">
                    <h1>Healthy Smiles, <br /><span className="text-primary">Trusted Dental Care</span></h1>
                    <p className="hero-sub">
                        Experience painless, hygienic, and advanced dental treatments in a
                        calm and premium environment.
                    </p>
                    <div className="hero-actions">
                        <Button to="/contact" variant="primary" size="lg">Book Appointment</Button>
                        <Button to="/services" variant="white">Our Services</Button>
                    </div>
                </div>
            </section>

            {/* Intro Section */}
            <section className="section section-intro">
                <div className="container intro-grid">
                    <div className="intro-text">
                        <h4 className="section-label">Welcome to GreenSmile</h4>
                        <h2>We Care About Your Smile</h2>
                        <p>
                            GreenSmile Dental Care is a modern premium dental clinic offering painless,
                            hygienic, and advanced dental treatments for families and working professionals.
                        </p>
                        <p>
                            Our mission is to provide top-tier dental care in a relaxing environment,
                            ensuring every patient walks out with a confident smile.
                        </p>
                        <ul className="feature-list">
                            <li><UserCheck className="feature-icon" /> Patient-Centered Methodology</li>
                            <li><ShieldCheck className="feature-icon" /> 100% Sterile & Hygienic</li>
                            <li><Clock className="feature-icon" /> Modern Tech & Equipment</li>
                        </ul>
                        <Button to="/about" variant="outline" className="mt-4">About Us</Button>
                    </div>
                    <div className="intro-image">
                        <img
                            src="https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&q=80&w=800"
                            alt="Modern Dental Equipment"
                            loading="lazy"
                        />
                    </div>
                </div>
            </section>

            {/* Services Preview */}
            <section className="section bg-surface">
                <div className="container">
                    <div className="section-header text-center">
                        <h4 className="section-label">Our Expertise</h4>
                        <h2>Comprehensive Dental Services</h2>
                        <p className="section-sub">Everything you need for optimal oral health under one roof.</p>
                    </div>

                    <div className="services-grid">
                        {services.map((s, index) => (
                            <ServiceCard key={index} {...s} />
                        ))}
                    </div>

                    <div className="text-center mt-8">
                        <Button to="/services" variant="secondary">View All Services</Button>
                    </div>
                </div>
            </section>

            {/* Doctors Preview */}
            <section className="section">
                <div className="container">
                    <div className="section-header text-center">
                        <h4 className="section-label">Meet The Team</h4>
                        <h2>Our Expert Doctors</h2>
                        <p className="section-sub">Experienced professionals dedicated to your care.</p>
                    </div>

                    <div className="doctors-grid">
                        {doctors.map((d, index) => (
                            <DoctorCard key={index} {...d} />
                        ))}
                    </div>
                </div>
            </section>

            {/* Testimonials */}
            <section className="section bg-surface testimonials-section">
                <div className="container">
                    <div className="section-header text-center">
                        <h4 className="section-label">Testimonials</h4>
                        <h2>What Our Patients Say</h2>
                    </div>

                    <div className="testimonials-grid">
                        <div className="testimonial-card">
                            <p className="quote">"Absolutely the best dental experience I've ever had. Painless and very professional!"</p>
                            <div className="author">
                                <div className="avatar">RD</div>
                                <div>
                                    <h5>Rahul D.</h5>
                                    <span>Patient</span>
                                </div>
                            </div>
                        </div>
                        <div className="testimonial-card">
                            <p className="quote">"Dr. Ananya was so patient with my son. The clinic is beautiful and very clean."</p>
                            <div className="author">
                                <div className="avatar">SM</div>
                                <div>
                                    <h5>Sarah M.</h5>
                                    <span>Mother</span>
                                </div>
                            </div>
                        </div>
                        <div className="testimonial-card">
                            <p className="quote">"State of the art facility. I got my implants done here and the results are amazing."</p>
                            <div className="author">
                                <div className="avatar">JK</div>
                                <div>
                                    <h5>Joseph K.</h5>
                                    <span>Hiker</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="section cta-section">
                <div className="container text-center">
                    <h2>Ready for a Brighter Smile?</h2>
                    <p>Book your appointment today and experience the difference.</p>
                    <Button to="/contact" variant="primary" size="lg">Book Appointment Now</Button>
                </div>
            </section>
        </div>
    )
}
