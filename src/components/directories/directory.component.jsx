import CategoryItem from "../category-item/category-item";
import "./directory.component.scss";
const Directory = ({ categories }) => {
  return (
    <div className="directory-cointainer">
      {categories.map(category => (
        <CategoryItem key={category.id} category={category} />
      ))}
    </div>
  );
};
export default Directory;
