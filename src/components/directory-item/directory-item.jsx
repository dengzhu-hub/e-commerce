import {
  BackgroundImage,
<<<<<<< HEAD
  DirectoryItemBody,
  DirectoryItemContainer,
} from "./directory-item.style";
=======
  DirectoryItemContainer,
  DirectoryItems,
} from "./directory-item.style";
import { useNavigate } from "react-router-dom";
>>>>>>> style-components
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
<<<<<<< HEAD
    <DirectoryItemContainer>
      <BackgroundImage imageUrl={imageUrl}></BackgroundImage>
      <DirectoryItemBody>
        <h1>{name}</h1>
        <p>shop cart</p>
      </DirectoryItemBody>
=======
    <DirectoryItemContainer onClick={onNavigateHandler}>
      <BackgroundImage imageUrl={imageUrl}></BackgroundImage>
      <DirectoryItems>
        <h1>{name}</h1>
        <p>shop cart</p>
      </DirectoryItems>
>>>>>>> style-components
    </DirectoryItemContainer>
  );
};
export default DirectoryItem;
