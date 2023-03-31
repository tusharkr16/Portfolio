import "./Navbar.scss";
import { Person ,Mail } from '@mui/icons-material';

const Navbar = ({menuOpen,setMenuOpen}) => {
  return (
    <div className={'Navbar ' + (menuOpen && 'active')} >
      <div className="wrapper">
        <div className="left">
          <a href="#Intro" className="logo">Portfolio.</a>
          <div className="itemContainer" >
            <Person className="Icon"/>
            <span>+91 9999 2345 67</span>
          </div>
          <div className="itemContainer">
            <Mail className="Icon"/>
            <span>tusharkumar9871@gmail.com</span>
          </div>
        </div>
        <div className="right">
          <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
            <span className="line1"></span>
            <span className="line2"></span>
            <span className="line3"></span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar