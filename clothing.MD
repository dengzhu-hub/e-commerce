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
<<<<<<< HEAD
<<<<<<< HEAD
=======

#### react-router-dom

[click here👉️](https://reactrouter.com/en/main/start/tutorial)
在传统网站中，浏览器从 Web 服务器请求文档，下载并评估 CSS 和 JavaScript 资源，并呈现从服务器发送的 HTML。当用户单击链接时，它会在新页面上重新启动该过程。

客户端路由允许您的应用程序通过链接点击更新 URL，而无需从服务器再次请求另一个文档。相反，您的应用程序可以立即呈现一些新的 UI 并发出数据请求，以`fetch`使用新信息更新页面。

这可以实现更快的用户体验，因为浏览器不需要请求全新的文档或重新评估下一页的 CSS 和 JavaScript 资源。它还通过动画等方式实现更动态的用户体验。

##### browserRouter

A `<BrowserRouter>` stores the current location in the browser's address bar using clean URLs and navigates using the browser's built-in history stack.

```jsx
import { BrowserRouter } from "react-router-dom";

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
```

##### Routes, route

路由可能是 React Router 应用程序中最重要的部分。它们将 URL 段与组件、数据加载和数据突变耦合起来。通过路由嵌套，复杂的应用程序布局和数据依赖关系变得简单且具有声明性。

```
import { Routes, Route } from "react-router-dom";
```

```jsx
return (
  <Routes>
    <Route path="/" element={<Home />}></Route>
    <Route path="/shop" element={<Shop />}></Route>
  </Routes>
);
```

![image-20230911114059833](https://makeforpicgo.oss-cn-chengdu.aliyuncs.com/study/202309111141818.png)

![image-20230911114107955](https://makeforpicgo.oss-cn-chengdu.aliyuncs.com/study/202309111141079.png)

nest route

```jsx
 <Routes>
      <Route path="/" element={<Navigator />}>
        <Route path="home" element={<Home />}></Route>
        <Route path="shop" element={<Shop />}></Route>
      </Route>
```
这里我们还可以用index，替换掉子路由得路径，like this
```jsx
<Routes>
<Route path="/" element={<Navigator/>}/>
<Route index element={<Home/>}/>
<Route path="shop" element={<Shop/>}/>
</Routes>
```
这样直接打开网页就会显示home，和navigation

![image-20230911122834746](https://makeforpicgo.oss-cn-chengdu.aliyuncs.com/study/202309111228502.png)
>>>>>>> jack-study-navigation
=======
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
<<<<<<< HEAD
>>>>>>> jack-study-navigation
=======
firebase
[click here 👍](https://console.firebase.google.com/project/fast-gate-386514/overview)

Firebase 是由 Google 提供的移动应用和 Web 应用开发平台，它提供了一系列工具和服务，用于构建高质量的应用程序。Firebase 提供了多种功能，包括实时数据库、身份认证、云存储、云函数、推送通知、性能监控、分析等。下面是 Firebase 提供的一些主要功能和服务：
>>>>>>> jack-study-navigation
