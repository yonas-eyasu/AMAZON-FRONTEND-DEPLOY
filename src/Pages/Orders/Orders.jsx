

import React,{ useContext,useState,useEffect} from 'react'
import Layout from'../../Components/Layout/Layout'
import classes from "../Orders/Orders.module.css"
import { db } from "../../Utility/firebase"
import { DataContext } from '../../Components/DataProvider/DataProvider'
import ProductCard from '../../Components/Product/ProductCard'

function Orders() {
  const [{ user }, dispatch] = useContext(DataContext);
  const [orders, setOrders] = useState([]);
  useEffect(() => {
    if (user) {
      db.collection("users")
        .doc(user.uid)
        .collection("orders")
        .orderBy("created", "desc")
        .onSnapshot((snapshot) => {
          setOrders(
            snapshot.docs?.map((doc) => ({
              id: doc.id,
              data: doc.data(),
            }))
          );
        });
    } else {
      setOrders([]);
    }
  },[])
  return (
    <Layout>
        <section className={classes.container}>
        <div className={classes.order__container}>
          <h2>Your Orders</h2>
          {orders?.length == 0 && (
            <p style={{ padding: "20px" }}>you don't have orders yet</p>
          )}
          {/**ordered item */}
          <div>
            {orders?.map((eachOrder, i) => {
              return (
                <div key={i}>
                  <hr />
                  <p>Order Id:{eachOrder?.id}</p>
                  {eachOrder?.data?.basket?.map((order) => {
                    return (
                      <ProductCard flex={true} product={order} key={order.id} />
                    );
                  })}
                </div>
              );
            })}
          </div>
        </div>
      </section>
      </Layout>
  )
}

export default Orders
