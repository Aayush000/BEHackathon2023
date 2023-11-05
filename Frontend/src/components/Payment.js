import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Payment = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/thankyou");
    }, 4000);

    return () => clearTimeout(timer);
  }, [navigate]);

  return <h1>This is the Payment Page.</h1>;
};
export default Payment;
