import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { responsive } from "../constants/data";

const ProductCarousel = ({ products }) => {
  return (
    <div>
      <Carousel
        showDots={false}
        responsive={responsive}
        infinite={true}
        autoPlay={true}
        // autoPlaySpeed="all 5000ms ease"
        // transitionDuration={1000}
      >
        {products}
      </Carousel>
    </div>
  );
};
export default ProductCarousel;
