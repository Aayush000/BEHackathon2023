import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import applePay from "../images/applepay.jpg"
const Payment = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/thankyou");
    }, 4000);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <img src={applePay} alt="applePay" className='applePay'/>
  )
};
export default Payment;
