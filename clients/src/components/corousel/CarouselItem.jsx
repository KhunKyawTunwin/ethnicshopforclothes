import { Link } from "react-router-dom";
import "./Carousel.scss";
import { shorternText } from "../../utils";

const CarouselItem = ({ url, price, name, description }) => {
  return (
    <div className="carouselItem">
      <Link to="/product-details">
        <img src={url} alt="product" className="product--image" />
        <p className="price">{`$ ${price}`}</p>
        <h4>{shorternText(name, 18)}</h4>
        <p className="--mb">{shorternText(description, 26)}</p>
      </Link>
      <button className="--btn --btn-primary --btn-block">Add To Cart</button>
    </div>
  );
};
export default CarouselItem;
