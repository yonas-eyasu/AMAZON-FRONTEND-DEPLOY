
import React, { useContext } from 'react'
import Rating from "@mui/material/Rating";
import Currencyformat from '../CurrencyFormat/Currencyformat';
import  classes from "../Product/Products.module.css"
import { Link } from 'react-router-dom';
import { DataContext } from "../DataProvider/DataProvider";
import { Type } from "../../Utility/action.type";

function ProductCard({product,flex,renderDesc,renderAdd}) {
    const { image, title, id, rating, price,description } = product;
    const [state, dispatch] = useContext(DataContext);

    const addToCart = () => {
      dispatch({
        type: Type.ADD_TO_BASKET,
        item: {
          image,
          title,
          id,
          rating,
          price,
          description,
        },
      });
    };

  
  return (
    <div className={`${classes.card_container}${
      flex ? classes.product_flexed : ""
    }`}>
<Link to={`/products/${id}`}>
    <img src={image} alt="" className={classes.img_container}/>
</Link>
<div  className={classes.product_button}>
    <h3>{title}</h3>
    {renderDesc &&   <div style={{maxWidth:"500px"}} >{description}</div>}
</div>

<div  className={classes.rating}>
          <Rating value={rating?.rate} precision={0.1} />
      <small>{rating?.count} </small>
        </div>
 
<div>
{/* price */}
<Currencyformat amount={price}/>
</div>
{
  renderAdd && <button className={classes.button}  onClick={addToCart}>add to cart</button>
}





    </div>
  )
}

export default ProductCard

