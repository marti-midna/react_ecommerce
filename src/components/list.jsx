import { Product } from "./product";
import { useState, useEffect } from "react";

// const products = ["prodotto 1", "prodotto 2", "prodotto 3"];

export const List = ({category}) => {

    const [source, setSource] = useState([]);
    const [products, setProducts] = useState([]);
    

    const getProducts = async () => {
        const response = await fetch(
          "https://fakestoreapi.com/products/"
        );
        const products = await response.json();
        setSource(products);
        setProducts(products);
        console.log(products);
    };

    useEffect(() => {
        getProducts();
    }, []);

    useEffect(() => {
      const filtered = source.filter(
        (product) => {
          if (category === 'all') {
            return product;
          } else {
            return product.category === category;
          }
        });
      setProducts(filtered);
      console.log(category, filtered);

    }, [category]);
      
  return (
    <section>
      <ul className="grid">
        {products.map((item, index) => (
          <li key={index}>
            <Product image={item.image} title={item.title} price={item.price} />
          </li>
        ))}
      </ul>
    </section>
  );
};