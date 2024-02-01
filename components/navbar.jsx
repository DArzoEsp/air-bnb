import airbnbLogo from '../images/airbnb-logo.png'

export default function Navbar() {
    return (
        <nav className='navbar'>
            <img src={airbnbLogo} alt="airbnb logo" width="100px" />
        </nav>
    )
}