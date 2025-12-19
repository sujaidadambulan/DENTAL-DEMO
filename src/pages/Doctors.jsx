import DoctorCard from '../components/DoctorCard'
import './Doctors.css'

export default function Doctors() {
    const doctors = [
        {
            name: "Dr. Ananya Menon",
            qualification: "BDS, MDS - Orthodontist",
            experience: "10+ years experience",
            image: "https://i.pinimg.com/736x/32/79/22/3279228da50a2fa2099ad4b09d1fe755.jpg"
        },
        {
            name: "Dr. Rahul Varma",
            qualification: "BDS - General Dentist",
            experience: "7 years experience",
            image: "https://i.pinimg.com/736x/09/b7/84/09b784f0da470f9593a1654f808036b6.jpg"
        },
        {
            name: "Dr. Neha Thomas",
            qualification: "BDS - Cosmetic Specialist",
            experience: "5 years experience",
            image: "https://i.pinimg.com/736x/c9/e0/b5/c9e0b5e45aad1de8e27b25ec6ce3cd27.jpg"
        }
    ]

    return (
        <div className="page doctors">
            <section className="section bg-surface text-center">
                <div className="container">
                    <h4 className="section-label">Our Team</h4>
                    <h1>Meet Our Specialists</h1>
                    <p className="lead max-w-2xl mx-auto mt-4 text-muted">
                        Our team of dedicated dental professionals is here to provide you with the best possible care.
                    </p>
                </div>
            </section>

            <section className="section">
                <div className="container doctors-grid">
                    {doctors.map((d, index) => (
                        <DoctorCard key={index} {...d} />
                    ))}
                </div>
            </section>
        </div>
    )
}
