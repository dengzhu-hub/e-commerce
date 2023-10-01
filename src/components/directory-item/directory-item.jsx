import {
  BackgroundImage,
  DirectoryItemBody,
  DirectoryItemContainer,
} from "./directory-item.style";
/**
 *  获取产品的组件
 * @param {Array} 产品信息
 * @returns {undefined} 返回html
 * @author jackdeng
 */
const DirectoryItem = ({ category }) => {
  const { imageUrl, name } = category;
  return (
    <DirectoryItemContainer>
      <BackgroundImage imageUrl={imageUrl}></BackgroundImage>
      <DirectoryItemBody>
        <h1>{name}</h1>
        <p>shop cart</p>
      </DirectoryItemBody>
    </DirectoryItemContainer>
  );
};
export default DirectoryItem;
