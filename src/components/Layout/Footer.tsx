import logo from '../../assets/images/footer/Best-Pizza.png';
import classes from './Footer.module.css';
import { Link } from 'react-router-dom';

const Footer = () => {

  return (
    <footer>
      <div>
        <a className={classes.social} 
          href="https://www.facebook.com" 
          target="_blank"
          rel="noreferrer">
          <i className="fa fa-facebook-square" aria-hidden="true"></i>
        </a>
        <a className={classes.social} 
          href="https://www.instagram.com" 
          target="_blank"
          rel="noreferrer">
          <i className="fa fa-instagram" aria-hidden="true"></i>
        </a>
      </div>
      <Link to="/stores" className={classes['footer-logo']}>
        <img src={logo} alt="" />
      </Link>
    </footer>
  )
}

export default Footer;