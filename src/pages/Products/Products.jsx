import React from 'react';
import { useLocation } from 'react-router-dom';
import ProductsBox from '../../components/ProductsBox/ProductsBox';
import styles from './Products.module.css';

export default function Products() {
  const { pathname } = useLocation();

  return (
    <>
      <h2 className='pageTitle'>
        {pathname.replace(/^\//, '').toLocaleUpperCase()}
      </h2>
      <div className={styles.productsBox}>
        <ProductsBox />
      </div>
    </>
  );
}
