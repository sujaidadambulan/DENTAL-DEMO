import './DoctorCard.css'

export default function DoctorCard({ image, name, qualification, experience }) {
    return (
        <div className="doctor-card">
            <div className="doctor-image-wrapper">
                <img src={image} alt={name} className="doctor-image" loading="lazy" />
            </div>
            <div className="doctor-info">
                <h3 className="doctor-name">{name}</h3>
                <p className="doctor-qual">{qualification}</p>
                <p className="doctor-exp">{experience}</p>
            </div>
        </div>
    )
}
