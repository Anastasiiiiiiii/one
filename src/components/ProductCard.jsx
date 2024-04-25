import React from 'react'
import style1 from './ProductCard.module.css'


const ProductCard = (props) =>
{
  return (
    <div>
      <div className={style1.item}>
      <img 
      className={style1.image} 
      src="https://lfb.su/assets/images/image11.jpeg"></img>
      <span className={style1.mite}><br />  {props.name}</span>
      <p className={style1.mite}>{props.price}рублей</p>
      </div>
    </div>
   
  );
}

export default ProductCard;