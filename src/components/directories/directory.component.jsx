import CategoryItem from "../category-item/category-item" ;
import "./directory.component.scss";
const Directory = ({categorys}) => {
  return (
    <div className="categories-container">
      {categorys.map(category => (
        <CategoryItem key={category.id} category={category} />
      ))}
    </div>
  );
};
export default Directory;
