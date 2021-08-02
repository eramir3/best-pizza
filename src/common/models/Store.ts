import Product from './Product';

class Store {
  id: number;
  name: string;
  image: string;
  address: string;
  description: string;
  products: Product[];

  constructor(store: Store) {
    this.id = store.id;
    this.name = store.name;
    this.image = store.image
    this.address = store.address;
    this.description = store.description;
    this.products = store.products;
  }
}

export default Store;