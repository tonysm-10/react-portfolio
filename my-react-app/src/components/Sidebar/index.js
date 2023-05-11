import './index.scss'
import { Link } from 'react-router-dom'
import logo7 from '../../assets/images/portfolio.png'

const Sidebar = () => (
    <div className='nav-bar'>
        <Link className='logo' to='/'>
            <img  className="sub-logo" src={logo7} alt="logo" />
        </Link>
    </div>
)
export default Sidebar