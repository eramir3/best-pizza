import StoreItem from './Store/StoreItem';
import classes from './Stores.module.css';
import api from '../../core/api';
import { useEffect, useState } from 'react';
import Store from '../../common/models/Store';


const Stores: React.FC = () => {

  const [stores, setStores] = useState<Store[]>([]);
  const [initialStores, setInitialStores] = useState<Store[]>([]);
  const [keyword, setKeyword] = useState('');

  useEffect(() => {
    api.get('')
    .then((response) => {
      const fetchedStores = response.data.response.stores.map((store: Store) => {
        store.image = `/images/stores/${store.id}.png`;
        return new Store(store)
      });
      setStores(fetchedStores);
      setInitialStores(fetchedStores);
      setStores(fetchedStores);
    })
  }, []);

  const filter = (e: any) => {
    const filterKeyword = e.target.value;
    if (filterKeyword !== '') {
      const results = initialStores.filter((user) => {
        return user.name.toLowerCase().includes(filterKeyword.toLowerCase());
      });
      setStores(results);
    } else {
      setStores(initialStores);
    }
    setKeyword(filterKeyword);
  };

  return (
    <div className={classes['store-container']}>
      <h6 className={classes.subtitle}>Pizzer&iacute;as</h6>
      <h4 className={classes['stores-subtitle']}>Tiendas</h4>
      <h6 className={classes['description']}>Escoge tu pizzeria favorita</h6>
      <div className={classes['search-container']}>
        <input 
          value={keyword}  
          onChange={filter}
          className={classes['search-box']} 
          type="search" 
          name="search" 
          placeholder="Buscar..." />
      </div>
      <div className={classes.stores}>
        {
          stores && stores.length > 0 && (
            stores.map((store: Store) => (
              <StoreItem 
                key={store.id} 
                store={store}
              />
            ))
          )
        }
      </div>
      {stores.length === 0 && <h5>No se encontraron resultados</h5>}
    </div>
  )
}

export default Stores;