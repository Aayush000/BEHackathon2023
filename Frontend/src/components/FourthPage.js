import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const FourthPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/payment");
    }, 4000);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <h1>
      This is fourth page. This will contain the specific flight info that will
      be sorted down.
    </h1>
  );
};
export default FourthPage;
