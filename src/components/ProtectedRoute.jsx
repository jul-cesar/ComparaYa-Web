import React, { useContext } from "react";
import { Auth } from "../context/authContext";
import { useNavigate } from "react-router-dom";

const ProtectedRoute = ({children}) => {
  const { currentUser } = useContext(Auth);
  const navigate = useNavigate()

  if (!currentUser) {
    return navigate('/login')
  }
  return children
};

export default ProtectedRoute;
