import { useNavigate } from "react-router-dom";
import { categories } from "../../components/constants/productCategories";

import "./ProductCategory.scss";

const Category = ({ title, image }) => {
  const navigate = useNavigate();

  return (
    <div className="category">
      <h3>{title}</h3>
      <img src={image} alt="cat-image" />
      <button className="--btn" onClick={() => navigate("/shop")}>
        {"Shop Now >>>"}
      </button>
    </div>
  );
};

const ProductCategory = () => {
  return (
    <div className="categories">
      {categories.map((cat) => {
        return (
          <div key={cat.id} className="--flex-center">
            <Category title={cat.title} image={cat.image} />
          </div>
        );
      })}
    </div>
  );
};
export default ProductCategory;
