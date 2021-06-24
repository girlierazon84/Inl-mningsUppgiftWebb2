import '../utils/global/css/global.css'
import logo from '../utils/images/myLogo.png'

export default function Navbar() {
    return (
        <nav className='navbar__container'>
            <div className='navbar__item'>
                <img className='navbar__logo' src={logo} alt='Bilresekostnad Kalkylator logotype'/>
            </div>
        </nav>
    )
}