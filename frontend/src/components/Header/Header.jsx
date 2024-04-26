import './Header.css'
import { assets } from './../../assets/assets';

function Header() {
  return (
    <div className='header'>
        <div className="header-contents" id='header'>
            <img className='header-logo' src={assets.logoMin}/>
            <p>Rua chuva branca, número 47, Ouro verde</p>
            <p>Seg a Dom 18:00 as 22:00</p>
        </div>
    </div>
  )
}

export default Header
