import './Navbar.css'
import { assets } from './../../assets/assets';
import { useContext, useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { StoreContext } from '../../context/StoreContext';

// eslint-disable-next-line react/prop-types
const Navbar = ({setShowLogin}) => {

    const [show, setShow] = useState(false)
    const controlNavbar = () => {
        if (window.scrollY > 1 ) {
            setShow(true)
        }else{
          setShow(false)
        }
    }
  
    useEffect(() => {
        window.addEventListener('scroll', controlNavbar)
        return () => {
            window.removeEventListener('scroll', controlNavbar)
        }
    }, [])

    // 

    const [menu, setMenu] = useState("home");

    const {getTotalCartAmount, token, setToken} = useContext(StoreContext)
    const navigate = useNavigate()

    const logout = () =>{
        localStorage.removeItem("token");
        setToken("")
        navigate("/")
    }


  return (
    <div className={`navbar ${show ? "active": "hidden"}`} >
        <Link to='/'>
            <img src={assets.logoMin} alt="logo" className="logo" />
        </Link>
        <ul className="navbar-menu">
            <Link to='/' onClick={()=>setMenu("home")} className={menu=='home'?"active":""}><span className='nav-links'>Inicio</span> </Link>
            <a href='#explore-menu' onClick={()=>setMenu("menu")} className={menu=='menu'?"active":""}><span className='nav-links'>Cardápio</span> </a>
            <a href='#footer' onClick={()=>setMenu("contact-us")} className={menu=='contact-us'?"active":""}><span className='nav-links'>Contato</span> </a>
        </ul>
        <div className="navbar-right" id='nav'>
            <img src={assets.search_icon} alt="" />
            <div className="navbar-search-icon">
               <Link to='/cart'><img src={assets.basket_icon} alt="" /></Link> 
                <div className={getTotalCartAmount() === 0 ? "":"dot"}></div>
            </div>
            {!token ? <button onClick={()=>setShowLogin(true)}>Fazer Login</button>
            :<div className='navbar-profile'>
                <img src={assets.profile_icon} alt="" />
                <ul className='navbar-profile-dropdown'>
                    <li onClick={()=>navigate('/myorders')}><img src={assets.bag_icon} alt="" />Pedidos</li>
                    <hr/>
                    <li onClick={logout}><img src={assets.logout_icon} alt="" />Sair</li>
                </ul>
            
            </div>}
        </div>
    </div>
  )
}

export default Navbar
