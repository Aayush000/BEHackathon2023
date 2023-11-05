import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import flightDetails from "../images/flightdetails.jpeg"

const FourthPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/payment");
    }, 4000);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <img src={flightDetails} alt="Details" className='details'/>
  );
};
export default FourthPage;
