import { Link } from 'react-router-dom'
import { Phone, Mail, MapPin, Facebook, Instagram, Twitter } from 'lucide-react'
import './Footer.css'

export default function Footer() {
    const currentYear = new Date().getFullYear()

    return (
        <footer className="footer">
            <div className="container footer-grid">
                {/* Brand */}
                <div className="footer-col">
                    <Link to="/" className="footer-logo">
                        GreenSmile<span className="dot">.</span>
                    </Link>
                    <p className="footer-desc">
                        Premium dental care for you and your family.
                        We ensure a healthy smile with modern treatments and compassionate care.
                    </p>
                    <div className="social-links">
                        <a href="#" aria-label="Facebook"><Facebook size={20} /></a>
                        <a href="#" aria-label="Instagram"><Instagram size={20} /></a>
                        <a href="#" aria-label="Twitter"><Twitter size={20} /></a>
                    </div>
                </div>

                {/* Quick Links */}
                <div className="footer-col">
                    <h3>Quick Links</h3>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/about">About Us</Link></li>
                        <li><Link to="/doctors">Our Doctors</Link></li>
                        <li><Link to="/contact">Book Appointment</Link></li>
                    </ul>
                </div>

                {/* Services */}
                <div className="footer-col">
                    <h3>Services</h3>
                    <ul>
                        <li><Link to="/services">General Dentistry</Link></li>
                        <li><Link to="/services">Cosmetic Dentistry</Link></li>
                        <li><Link to="/services">Dental Implants</Link></li>
                        <li><Link to="/services">Teeth Whitening</Link></li>
                    </ul>
                </div>

                {/* Contact */}
                <div className="footer-col">
                    <h3>Contact Us</h3>
                    <ul className="contact-list">
                        <li>
                            <MapPin size={18} />
                            <span>123 Medical Park, Kochi, Kerala 682001</span>
                        </li>
                        <li>
                            <Phone size={18} />
                            <span>+91 98765 43210</span>
                        </li>
                        <li>
                            <Mail size={18} />
                            <span>info@greensmile.com</span>
                        </li>
                    </ul>
                </div>
            </div>

            <div className="footer-bottom">
                <div className="container">
                    <p>&copy; {currentYear} GreenSmile Dental Care. All rights reserved.</p>
                </div>
            </div>
        </footer>
    )
}
