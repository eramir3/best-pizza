import classes from './Content.module.css';
import lock from '../../assets/images/IU/ic_contrasena.png';
import Footer from './Footer';
import { Link, Redirect, useHistory } from 'react-router-dom';
import { useContext } from 'react';
import AuthContext from '../../context/auth-context';


const Content: React.FC<any> = (props) => {

  const {logout} = useContext(AuthContext);
  const history = useHistory();

  const logoutHandler = () => {
    logout();
    history.push("/");
    return <Redirect to="/" />
  }

  return (
      <div className={classes['content-container']}>
        <header>
          <nav className={classes['navbar-container']}>
            <Link to="/" className={classes['logout-link']} onClick={logoutHandler}>
              <div className={classes.logout}>
                <img src={lock} alt="lock" className={classes.lock} />
                <span>Salir</span> 
              </div>
            </Link>
          </nav>
        </header>
        <main>
          {props.children}
        </main>
        <Footer />
      </div>
  )
}

export default Content;