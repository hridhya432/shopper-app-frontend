import React, { useContext } from 'react'
import { ShopContext } from '../context/ShopContext';
import { useParams } from 'react-router-dom';
import BreadCrums from '../components/BreadCrums/BreadCrums';
import ProductDisplay from '../components/ProductDisplay/ProductDisplay';
import DescriptionBox from '../components/DescriptionBox/DescriptionBox';
import RelatedProduct from '../components/RelatedProducts/RelatedProduct';

const Product = () => {
  const {all_product}=useContext(ShopContext);
  const {Product_Id}=useParams();
  const product = all_product.find((e)=>e.id === Number(Product_Id))
  return (
    
    <div>
      
      <BreadCrums product={product}/>
      <ProductDisplay product={product}/>
      <DescriptionBox/>
      <RelatedProduct/>
    
    </div>
  )
  }
export default Product