import { ShieldCheck, Heart, Users, CheckCircle } from 'lucide-react'
import './About.css'

export default function About() {
    return (
        <div className="page about">
            {/* Header */}
            <section className="about-hero bg-surface">
                <div className="container text-center">
                    <h1>About <span className="text-primary">GreenSmile</span></h1>
                    <p className="lead">Dedicated to bringing healthy smiles to families since 2010.</p>
                </div>
            </section>

            {/* Story Section */}
            <section className="section">
                <div className="container about-grid">
                    <div className="about-image">
                        <img
                            src="https://i.pinimg.com/736x/6d/b0/12/6db012da6c2f885c3e67e6b69778fb4d.jpg"
                            alt="GreenSmile Reception"
                            className="rounded-lg shadow-premium"
                        />
                    </div>
                    <div className="about-content">
                        <h4 className="section-label">Our Story</h4>
                        <h2>More Than Just a Dental Clinic</h2>
                        <p>
                            GreenSmile Dental Care started with a simple vision: to create a dental experience
                            that is free from fear and focused on patient comfort. Over the years, we have grown
                            into a state-of-the-art facility, but our core values remain the same.
                        </p>
                        <p>
                            We believe that high-quality dental care should be accessible, hygienic, and
                            transparent. Our team of specialists works together to provide comprehensive
                            care tailored to your unique needs.
                        </p>
                    </div>
                </div>
            </section>

            {/* Mission & Values */}
            <section className="section bg-primary-light">
                <div className="container text-center mb-5">
                    <h2>Our Commitment to You</h2>
                </div>

                <div className="container values-grid">
                    <div className="value-card">
                        <ShieldCheck className="value-icon" size={40} />
                        <h3>Uncompromised Hygiene</h3>
                        <p>We follow strict sterilization protocols to ensure 100% safety for every patient.</p>
                    </div>
                    <div className="value-card">
                        <Heart className="value-icon" size={40} />
                        <h3>Patient-Centric Care</h3>
                        <p>We listen, we care, and we treat you like family. Your comfort is our priority.</p>
                    </div>
                    <div className="value-card">
                        <Users className="value-icon" size={40} />
                        <h3>Experienced Team</h3>
                        <p>Our doctors are highly qualified specialists with years of experience in their fields.</p>
                    </div>
                </div>
            </section>

            {/* Equipment / Modality */}
            <section className="section">
                <div className="container">
                    <div className="equipment-wrapper">
                        <div className="text-content">
                            <h2>Modern Technology</h2>
                            <p>We invest in the latest dental technology to provide precise diagnoses and effective treatments.</p>
                            <ul className="tech-list">
                                <li><CheckCircle size={20} className="text-primary" /> Digital X-Rays (Low Radiation)</li>
                                <li><CheckCircle size={20} className="text-primary" /> Intraoral Cameras</li>
                                <li><CheckCircle size={20} className="text-primary" /> Laser Dentistry</li>
                                <li><CheckCircle size={20} className="text-primary" /> Painless Injection Systems</li>
                            </ul>
                        </div>
                        <div className="image-content">
                            <img
                                src="https://images.unsplash.com/photo-1606811971618-4486d14f3f99?auto=format&fit=crop&q=80&w=800"
                                alt="Modern Dental Tools"
                                className="rounded-lg shadow-lg"
                            />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
