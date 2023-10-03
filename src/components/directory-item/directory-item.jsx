import {
  BackgroundImage,
  DirectoryItemContainer,
  DirectoryItems,
} from "./directory-item.style";
import { useNavigate } from "react-router-dom";
/**
 *  获取产品的组件
 * @param {Array} 产品信息
 * @returns {undefined} 返回html
 * @author jackdeng
 */

const DirectoryItem = ({ category }) => {
  const navigate = useNavigate();
  const { imageUrl, name, route } = category;
  const onNavigateHandler = () => {
    navigate(route);
  };
  return (
    <DirectoryItemContainer onClick={onNavigateHandler}>
      <BackgroundImage imageUrl={imageUrl}></BackgroundImage>
      <DirectoryItems>
        <h1>{name}</h1>
        <p>shop cart</p>
      </DirectoryItems>
    </DirectoryItemContainer>
  );
};
export default DirectoryItem;
