import { useContext } from 'react';
import ModalContext from '../../context/modal-context';
import classes from './Modal.module.css';

const Modal = () => {

  const {title, image, setOpenModal} = useContext(ModalContext);

  const closeModalHandler = () => {
    setOpenModal(false);
  }

  return (
    <div className={classes["modal-background"]} onClick={closeModalHandler}>
      <div className={classes["modal-container"]}>
        <div className={classes["title-close-btn"]}>
          <button onClick={closeModalHandler}>X</button>
        </div>
        <div className={classes.title}>
          <h3>{title}</h3>
        </div>
        <div className={classes.body}>
          <img src={image} alt="pizza" />
        </div>
        <div className={classes.footer}></div>
      </div>
    </div>
  )
}

export default Modal;