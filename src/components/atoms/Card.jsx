import { Link } from "react-router-dom";
import "../../styles/atoms/Card.css";

const Card = ({ to, children, className }) => {
  const staticServerUrl = process.env.REACT_APP_PATH || "";

  return (
    <Link className={`card ${className}`} to={staticServerUrl + to}>
      {children}
    </Link>
  );
};

export default Card;
