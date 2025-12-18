import { Link } from 'react-router-dom'
import './Button.css'

export default function Button({ children, variant = 'primary', to, className = '', ...props }) {
    const baseClass = `btn btn-${variant} ${className}`

    if (to) {
        return <Link to={to} className={baseClass} {...props}>{children}</Link>
    }

    return <button className={baseClass} {...props}>{children}</button>
}
