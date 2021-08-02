import './App.css';
import Login from './components/Login/Login';
import Image from './components/Image/Image';
import { Switch, Route } from "react-router-dom";
import Content from './components/Layout/Content';
import Stores from './components/Stores/Stores';
import StoreDetails from './components/Stores/Store/StoreDetails';
import { useContext } from 'react';
import AuthContext from './context/auth-context';
import ModalContext from './context/modal-context';
import Modal from './components/UI/Modal';


function App() {

  const {isAuthenticated} = useContext(AuthContext);
  const {openModal} = useContext(ModalContext);

  return (
    <>
    {openModal && <Modal />}
    <div className="container">
      <Image />
        <Switch>
          { 
            isAuthenticated && 
            <Route exact path="/stores">
              <Content>
                <Stores/>
              </Content>
            </Route>
          }
          {
            isAuthenticated &&
            <Route exact path="/store-details/:storeId">
              <Content>
                <StoreDetails/>
              </Content>
            </Route>
          }
          { 
            !isAuthenticated && 
            <Route exact path="/" component={Login} />
          }
          { 
            !isAuthenticated && 
            <Route exact path="" component={Login} />
          }
        </Switch>
    </div>
    </>
  );
}

export default App;
