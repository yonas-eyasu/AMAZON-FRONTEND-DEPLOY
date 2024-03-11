import React, { useState, useEffect } from "react";
import Layout from "../../Components/Layout/Layout";
 import { useParams } from "react-router-dom";
 import ProductCard from "../../Components/Product/ProductCard";
import axios from "axios";
import classes from "../ProductDetail/ProductDetail.module.css"
import { producturl } from "../../Api/endPoints";
import Loader from"../../Components/Loader/Loader"


function ProductDetail() {
	const [product, setProduct] = useState({});
	 const [isLoading, setisLoading] = useState(false);
	 const { productId } = useParams();

	useEffect(() => {
		 setisLoading(true)
		axios.get(`${producturl}/products/${productId}`)
			.then((res) => {
				setProduct(res.data);
				 setisLoading(false);
			})
			.catch((err) => console.log(err));
	}, []);

	return (
	
<Layout>
	
			 { isLoading ? (<Loader/>) : (
			<div className={classes.one}>   <ProductCard
				product={product}
			    flex={true}
			    renderDesc={true}
			    renderAdd={true}
			/>
			</div>
			)}
	 

			
		</Layout>
	);
}

export default ProductDetail;
