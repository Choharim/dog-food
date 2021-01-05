import React from "react";
import { useLocation } from "react-router";

const Order = () => {
  const location = useLocation();
  const showMenuDetails = location.state.showMenuDetails;
  console.log(showMenuDetails);
  return <div>order</div>;
};

export default Order;
