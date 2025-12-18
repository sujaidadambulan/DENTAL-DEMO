import { useState, useEffect } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import Button from './Button'
import './Navbar.css'

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false)
    const [scrolled, setScrolled] = useState(false)
    const location = useLocation()

    // Close mobile menu on route change
    useEffect(() => {
        setIsOpen(false)
        // Re-enable scrolling when menu closes
        document.body.style.overflow = 'auto'
    }, [location])

    // Lock body scroll when menu is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden'
        } else {
            document.body.style.overflow = 'auto'
        }
    }, [isOpen])

    // Handle scroll effect
    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20)
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    return (
        <header className={`navbar ${scrolled ? 'scrolled' : ''}`}>
            <div className="navbar-container">
                <Link to="/" className="navbar-logo">
                    GreenSmile<span className="dot">.</span>
                </Link>

                {/* Desktop Nav */}
                <nav className="navbar-nav desktop-only">
                    <NavLink to="/" className="nav-link">Home</NavLink>
                    <NavLink to="/about" className="nav-link">About</NavLink>
                    <NavLink to="/services" className="nav-link">Services</NavLink>
                    <NavLink to="/doctors" className="nav-link">Doctors</NavLink>
                    <NavLink to="/contact" className="nav-link">Contact</NavLink>
                </nav>

                <div className="navbar-actions desktop-only">
                    <Button to="/contact" variant="primary">Book Appointment</Button>
                </div>

                {/* Mobile Toggle */}
                <button
                    className="mobile-toggle"
                    onClick={() => setIsOpen(!isOpen)}
                    aria-label="Toggle menu"
                    aria-expanded={isOpen}
                >
                    {isOpen ? <X size={28} /> : <Menu size={28} />}
                </button>

                {/* Mobile Nav Overlay */}
                <div className={`mobile-nav-overlay ${isOpen ? 'open' : ''}`}>
                    <nav className="mobile-nav-links">
                        <NavLink to="/" className="nav-link">Home</NavLink>
                        <NavLink to="/about" className="nav-link">About</NavLink>
                        <NavLink to="/services" className="nav-link">Services</NavLink>
                        <NavLink to="/doctors" className="nav-link">Doctors</NavLink>
                        <NavLink to="/contact" className="nav-link">Contact</NavLink>
                        <div style={{ marginTop: '1rem' }}>
                            <Button to="/contact" variant="primary">Book Appointment</Button>
                        </div>
                    </nav>
                </div>
            </div>
        </header>
    )
}
