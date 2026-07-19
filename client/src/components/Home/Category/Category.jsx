import { useNavigate } from "react-router-dom";
import "./Category.scss";

const Category = ({ innerPage, headingText, categories }) => {
  const navigate = useNavigate();
  return (
    <div className="shop-by-category">
      {!innerPage && <div className="sec-heading">Categories</div>}
      <div className="categories">
      
          <div   
            className="category"
            onClick={() => navigate(`/`)}
          >
            <img
              src=""
            />
          </div>
      </div>
    </div>
  );
};

export default Category;
