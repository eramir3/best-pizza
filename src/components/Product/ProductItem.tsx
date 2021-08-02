import { useContext } from 'react';
import Product from '../../common/models/Product';
import ModalContext from '../../context/modal-context';
import classes from './ProductItem.module.css';

const ProductItem: React.FC<{product: Product}> = (props) => {

  const {setTitle, setImage, setOpenModal} = useContext(ModalContext);

  const openModalHandler = () => {
    setTitle(props.product.name);
    setImage(props.product.image);
    setOpenModal(true);
  }

  return (
    <div className={`${classes.product} ${classes.zoom}`} onClick={() => openModalHandler()}>
      <img src={props.product.image} alt="pizza" />
      <p>{props.product.name}</p>
    </div>
  )
}
  
export default ProductItem;