# clothing-shoping project

---

项目结构

![image-20230910094435475](https://makeforpicgo.oss-cn-chengdu.aliyuncs.com/study/202309100944630.png)

[scss](https://sass-lang.com/)

![image-20230910095050964](https://makeforpicgo.oss-cn-chengdu.aliyuncs.com/study/202309100950082.png)

构建数据

![image-20230910095127449](https://makeforpicgo.oss-cn-chengdu.aliyuncs.com/study/202309100951534.png)

category-item

```jsx
import "./category-item.scss";
const CategoryItem = ({ category }) => {
  const { imageUrl, title } = category;
  return (
    <div className="category-container">
      <div
        className="background-image"
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      ></div>
      <div className="category-body-container">
        <h1>{title}</h1>
        <p>shop cart</p>
      </div>
    </div>
  );
};
export default CategoryItem;
```

效果

![image-20230910095358147](https://makeforpicgo.oss-cn-chengdu.aliyuncs.com/study/202309100953224.png)

directory-component

```jsx
import CategoryItem from "../category-item/category-item";
import "./directory.component.scss";
const Directory = ({ categorys }) => {
  return (
    <div className="directory-cointainer">
      {categorys.map(category => (
        <CategoryItem key={category.id} category={category} />
      ))}
    </div>
  );
};
export default Directory;
```
```
import { ReactComponent as CrowLogo } from "../../assets/crown.svg";
```
{ ReactComponent as CrowLogo }：这部分代码是将 SVG 图像作为 React 组件导入。具体来说，它导入了一个名为 CrowLogo 的 React 组件，这个组件将代表导入的 SVG 图像。
e.g
```
 <Link className="nav-logo__container" to="/">
          <CrowLogo className="nav-logo" />
          
        </Link>
```