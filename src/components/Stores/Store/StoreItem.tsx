import classes from './StoreItem.module.css';
import Store from '../../../common/models/Store';
import { Link } from 'react-router-dom';


const StoreItem: React.FC<{store: Store}> = (props) => {
  return (
    <div className={classes.store}>
      <div className={classes["flip-card"]}>
        <div className={classes["flip-card-inner"]}>
          <div className={classes["flip-card-front"]}>
            <Link to={`/store-details/${props.store.id}`}>
              <img src={props.store.image} alt="store" className={`${classes['store-imge']}`}/>
            </Link>
          </div>
          <div className={`${classes['flip-card-back']}`}>
            <div>
            <Link to={`/store-details/${props.store.id}`} >
              <div className={classes['text-container']}>
              <img src={'/images/products/1.png'} alt="store" className={`${classes['store-imge']} ${classes['store-image-dark']}`}/>
              <div className={classes.centered}>Ver men&uacute;</div>
              </div>
            </Link>
            </div>
          </div>
        </div>
      </div>
      <h6 className={classes['store-name']}>{props.store.name}</h6>
      <p className={classes['store-address']}>{props.store.address}</p>
    </div>
  )
}

export default StoreItem;