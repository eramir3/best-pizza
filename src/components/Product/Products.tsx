import Product from '../../common/models/Product';
import ProductItem from './ProductItem';
import classes from './Products.module.css';
import FadeIn from 'react-fade-in';


const Products: React.FC<{products: Product[]}> = (props) => {
  
  return (
    <FadeIn className={classes.products}>
      {
        props.products.map((product: Product, index: number) => {
          product.image = `/images/products/${index+1}.png`;
          return <ProductItem key={product.id} product={product} />
        })
      }
    </FadeIn>
  )
}

export default Products;