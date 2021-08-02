import classes from './Image.module.css'
import pizza from '../../assets/images/main/Pizza.png';
import logo from '../../assets/images/main/Logo.png';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import AuthContext from '../../context/auth-context';

const Image = () => {

  const {isAuthenticated} = useContext(AuthContext);

  let attachedClasses = [classes['logo-img'], classes['logo-img-invisible']];
  if (isAuthenticated) {
      attachedClasses = [classes['logo-img'], classes['logo-img-visible']];
  }

  return (
    <div className={classes['image-container']}>
      <Link to="/stores" className={attachedClasses.join(' ')}>
        <img src={logo} alt="logo" className={attachedClasses.join(' ')} />
      </Link>
      <img src={pizza} alt="pizza" className={classes['pizza-img']} />
    </div>
  )
}

export default Image;