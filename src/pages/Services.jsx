import { ShieldCheck, Sparkles, Stethoscope, Smile, Activity, Grid } from 'lucide-react'
import ServiceCard from '../components/ServiceCard'
import Button from '../components/Button'

export default function Services() {
    const services = [
        {
            icon: Stethoscope,
            title: "General Dentistry",
            description: "Comprehensive examinations, professional cleanings, fillings, and preventive care to maintain oral health."
        },
        {
            icon: Sparkles,
            title: "Cosmetic Dentistry",
            description: "Smile makeovers including porcelain veneers, bonding, gum contouring, and smile design."
        },
        {
            icon: ShieldCheck,
            title: "Dental Implants",
            description: "The gold standard for tooth replacement. Durable, natural-looking implants that restore function."
        },
        {
            icon: Smile,
            title: "Teeth Whitening",
            description: "In-office and take-home whitening solutions to brighten your smile safely and effectively."
        },
        {
            icon: Activity,
            title: "Root Canal Treatment",
            description: "Advanced endodontic therapy to save infected teeth and relieve pain instantly."
        },
        {
            icon: Grid,
            title: "Orthodontics",
            description: "Traditional braces and clear aligners to correct alignment and bite issues for all ages."
        }
    ]

    return (
        <div className="page services">
            <section className="section bg-surface text-center">
                <div className="container">
                    <h4 className="section-label">Our Expertise</h4>
                    <h1>World-Class Dental Services</h1>
                    <p className="lead max-w-2xl mx-auto mt-4 text-muted">
                        We offer a comprehensive range of dental treatments using the latest technology
                        and techniques to ensure the best results.
                    </p>
                </div>
            </section>

            <section className="section">
                <div className="container services-grid">
                    {services.map((s, index) => (
                        <ServiceCard key={index} {...s} />
                    ))}
                </div>
            </section>

            <section className="section cta-section text-center">
                <div className="container">
                    <h2>Not sure what you need?</h2>
                    <p>Book a consultation and let our experts guide you.</p>
                    <Button to="/contact" variant="primary">Book Consultation</Button>
                </div>
            </section>
        </div>
    )
}
