import './ServiceCard.css'

export default function ServiceCard({ icon: Icon, title, description }) {
    return (
        <div className="service-card">
            <div className="service-icon-wrapper">
                <Icon size={32} className="service-icon" />
            </div>
            <h3 className="service-title">{title}</h3>
            <p className="service-desc">{description}</p>
        </div>
    )
}
