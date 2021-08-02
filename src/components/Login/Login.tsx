import Input from '../UI/Input';
import classes from './Login.module.css';
import logo from '../../assets/images/login/Login-Best-Pizza.png';
import api from '../../core/api';
import { Redirect } from 'react-router-dom';
import { useContext, useEffect, useRef, useState } from 'react';
import AuthContext from '../../context/auth-context';
import User from '../../common/models/User';
import { useHistory } from 'react-router-dom';

const Login: React.FC = () => {

  const usernameInputRef = useRef() as React.MutableRefObject<HTMLInputElement>;
  const passwordInputRef = useRef() as React.MutableRefObject<HTMLInputElement>;
  
  const [users, setUsers] = useState<User[]>([]);
  const [authError, setAuthError] = useState(false);

  const {setIsAuthenticated, login} = useContext(AuthContext);
  const history = useHistory();
  

  useEffect(() => {
    api.get('')
    .then((response) => {
      const fetchedUser = response.data.response.users.map((user: User) => {
        return new User(user)
      });
      setUsers(fetchedUser);
    })
  }, []);

  const submitHandler = (event: React.FormEvent<EventTarget>) => {
    event.preventDefault();
    const username = usernameInputRef.current.value.trim();
    const password = passwordInputRef.current.value.trim();
    authenticateUser(username, password);
  }

  const authenticateUser = (username: string, password: string) => {
    let authenticated = false;
    for (const user of users) {
      if (user.email === username && user.password === password) {
        authenticated = true;
        break;
      }
    }

    if(authenticated) {
      setIsAuthenticated(true);
      login(true);
      setAuthError(false);
      history.push("/stores");
      return <Redirect to="/stores" />
    }
    else {
      setAuthError(true);
    }
  }

  return (
    <div className={classes['login-container']}>
      <div className={classes['login-form']}>
        <img src={logo} className={classes['logo-img']} alt="logo" />
        <h1 className={classes.welcome}>Bienvenido</h1>
        <h4 className={classes['welcome-subtitle']}>A las mejores pizzas del pa&iacute;s</h4>
        <form onSubmit={submitHandler}>
          <Input 
            input={{ id: 'username', type: 'text', placeholder: 'Usuario', icon: 'user'}} 
            reference={usernameInputRef}
          />
          <Input 
            input={{ id: 'password', type: 'password', placeholder: 'Contraseña', icon: 'lock'}} 
            reference={passwordInputRef}
          />
          { authError ? <h6 className={classes.error}>Usuario o contrase&ntilde;a inv&aacute;lido</h6> : ''}
          <h6 className={classes['password-subtitle']}>&iquest;Olvidaste tu contrase&ntilde;a?</h6>
          <button type="submit" className={classes['login-btn']}>Iniciar sesion</button>
        </form>  
      </div>
    </div>
  )
}

export default Login;