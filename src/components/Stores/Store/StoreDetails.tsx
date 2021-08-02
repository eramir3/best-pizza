import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import api from '../../../core/api';
import Store from '../../../common/models/Store';
import classes from './StoreDetails.module.css';
import Products from '../../Product/Products';


const StoreDetails: React.FC = () => {

  const  {storeId}  = useParams<{storeId: string}>();
  const [store, setStore] = useState<Store>();

  useEffect(() => {
    api.get('')
    .then((response) => {
      const fetchedStore = response.data.response.stores
      .filter((store: Store) => store.id.toString() === storeId)
      .map((store: Store) => {
        store.image = `/images/stores/${store.id}.png`;
        return new Store(store)
      });
      setStore(fetchedStore[0]);
    })
  }, [storeId]);
  
  return (
    <>
    {
      store ?
      <div className={classes['store-container']}>
        <h6 className={classes.subtitle}>Restaurante</h6>
        <h4 className={classes['stores-subtitle']}>{store.name}</h4>
        <img src={store?.image} alt="pizza"/>
        <h6 className={classes['description']}>{store.description}</h6>
        <div className={classes.stores}>
          <Products products={store.products}/>
        </div>
        <br/>
        <Link className={classes.back} to="/stores">P&aacute;gina anterior</Link>
      </div> 
      :
      <div className={classes['store-container']}>No existe la pizzaria solicitada</div>
    }
    </>
  )
}

export default StoreDetails;