class Product {
    id: number;
    name: string;
    image: string;

    constructor(product: Product) {
        this.id = product.id;
        this.name = product.name;
        this.image = product.image;
    }
}

export default Product;