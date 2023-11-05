import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const ThirdPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/fourth-page");
    }, 4000);

    return () => clearTimeout(timer);
  }, [navigate]);

  return <h1>This is third page. This will contain API call.</h1>;
};
export default ThirdPage;
