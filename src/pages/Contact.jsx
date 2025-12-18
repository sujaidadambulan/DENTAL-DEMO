import { MapPin, Phone, Mail, Clock } from 'lucide-react'
import Button from '../components/Button'
import './Contact.css'

export default function Contact() {
    const handleSubmit = (e) => {
        e.preventDefault()
        alert("Appointment request sent! We will contact you shortly.")
    }

    return (
        <div className="page contact">
            <section className="contact-hero bg-primary-light">
                <div className="container text-center">
                    <h1>Get in Touch</h1>
                    <p className="lead">We'd love to hear from you. Book your appointment today.</p>
                </div>
            </section>

            <section className="section">
                <div className="container contact-grid">

                    {/* Contact Info */}
                    <div className="contact-info">
                        <h2>Contact Information</h2>
                        <p className="mb-6">Have questions or need to book an appointment? Reach out to us.</p>

                        <div className="info-item">
                            <MapPin className="info-icon" />
                            <div>
                                <h5>Our Location</h5>
                                <p>123 Medical Park, MG Road,<br />Kochi, Kerala 682001</p>
                            </div>
                        </div>

                        <div className="info-item">
                            <Phone className="info-icon" />
                            <div>
                                <h5>Phone Number</h5>
                                <p>+91 98765 43210</p>
                            </div>
                        </div>

                        <div className="info-item">
                            <Mail className="info-icon" />
                            <div>
                                <h5>Email Address</h5>
                                <p>info@greensmile.com</p>
                            </div>
                        </div>

                        <div className="info-item">
                            <Clock className="info-icon" />
                            <div>
                                <h5>Working Hours</h5>
                                <p>Mon - Sat: 9:00 AM - 7:00 PM<br />Sun: Closed</p>
                            </div>
                        </div>
                    </div>

                    {/* Booking Form */}
                    <div className="booking-form-wrapper">
                        <h3>Book an Appointment</h3>
                        <form className="booking-form" onSubmit={handleSubmit}>
                            <div className="form-group">
                                <label htmlFor="name">Full Name</label>
                                <input type="text" id="name" placeholder="John Doe" required />
                            </div>

                            <div className="form-row">
                                <div className="form-group">
                                    <label htmlFor="phone">Phone Number</label>
                                    <input type="tel" id="phone" placeholder="+91 9876543210" required />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="email">Email Address</label>
                                    <input type="email" id="email" placeholder="john@example.com" required />
                                </div>
                            </div>

                            <div className="form-group">
                                <label htmlFor="date">Preferred Date</label>
                                <input type="date" id="date" required />
                            </div>

                            <div className="form-group">
                                <label htmlFor="message">Message (Optional)</label>
                                <textarea id="message" rows="4" placeholder="Briefly describe your issue or enquiry."></textarea>
                            </div>

                            <Button type="submit" variant="primary" className="w-full">Confirm Booking</Button>
                        </form>
                    </div>

                </div>
            </section>

            {/* Map Section */}
            <section className="map-section">
                <iframe
                    title="Google Map"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3929.5630654032486!2d76.28919631479423!3d9.970176992871353!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b080d514abec6bf%3A0xbd582caa5844192!2sMG%20Road%2C%20Kochi%2C%20Kerala!5e0!3m2!1sen!2sin!4v1628065000000!5m2!1sen!2sin"
                    width="100%"
                    height="450"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy">
                </iframe>
            </section>
        </div>
    )
}
