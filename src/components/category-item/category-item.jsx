import "./category-item.scss";
/**
 *  获取产品的组件
 * @param {Array} 产品信息
 * @returns {undefined} 返回html
 * @author jackdeng
 */
const CategoryItem = ({ category }) => {
  const { imageUrl, name } = category;
  return (
    <div className="category-container">
      <div
        className="background-image"
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      ></div>
      <div className="category-body-container">
        <h1>{name}</h1>
        <p>shop cart</p>
      </div>
    </div>
  );
};
export default CategoryItem;
