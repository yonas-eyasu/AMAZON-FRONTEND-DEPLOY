import React from "react";
import { categoryinfos } from "./categoryfullinfo";
import Categorycard from "./categorycard";
import classes from"./category.module.css"
function Category() {
	return (
		<section className={classes.category_container}>
			{categoryinfos.map((infos,i) => {
				return <Categorycard data={infos}  />;
			})}
		</section>
	);
}

export default Category;
