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
<<<<<<< HEAD
>>>>>>> jack-study-navigation
=======



##### REACT CURD

![IMG_1469(20230912-101328)](https://makeforpicgo.oss-cn-chengdu.aliyuncs.com/study/202309121030174.JPG)



fetch data from firebase 

e.g1 Anderi  fetch his own profile, Authentication after server send his profile to him

![IMG_1470(20230912-103044)](https://makeforpicgo.oss-cn-chengdu.aliyuncs.com/study/202309121031606.JPG)

e.g2 Andrei want request  YiHua profile ,after Authentication, server not send the data to him

![IMG_1471(20230912-103104)](https://makeforpicgo.oss-cn-chengdu.aliyuncs.com/study/202309121033680.JPG)

use firebase

```javascript
const firebaseApp = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  prompt: "select_account",
});
export const auth = getAuth();
export const signInWithGooglePop = () => signInWithPopup(auth, provider);
const db = getFirestore();
export const createUserDocumentFromAuth = userAuth => {
  const userDocRef = doc(db, "user", userAuth.uid);
  console.log(userDocRef);
};

```

![image-20230912132605082](https://makeforpicgo.oss-cn-chengdu.aliyuncs.com/study/202309121326321.png)

component 

```jsx
import {
  signInWithGooglePop,
  createUserDocumentFromAuth,
} from "../../utils/firebase.utils";

const Sign = () => {
  const loginGoogleUser = async () => {
    const {user} = await signInWithGooglePop();
    // console.log(user);
    createUserDocumentFromAuth(user)
  };
  return (
    <div>
      <h1>sign in</h1>
      <button onClick={loginGoogleUser}>sign with google user</button>
    </div>
  );
};

export default Sign;

```

![image-20230912135650752](https://makeforpicgo.oss-cn-chengdu.aliyuncs.com/study/202309121356862.png)

![image-20230912135617113](https://makeforpicgo.oss-cn-chengdu.aliyuncs.com/study/202309121356197.png)

sign with redirect

```javascript
export const signInWithGoogleRedirect = () =>
  signInWithRedirect(auth, googleProvider);
```

这里我们代码执行完成后，控制台却没有任何输出，但是我们检查firebase，他还是添加成功

```jsx
  const loginWithRedirect = async () => {
    const { user } = await signInWithGoogleRedirect();
    console.log(user);
  };
```

尽管我们这里有console语句，但是控制台没有输出任何有关

![image-20230912144150508](https://makeforpicgo.oss-cn-chengdu.aliyuncs.com/study/202309121441630.png)

但是我们用popup执行，控制台输出

![image-20230912144258196](https://makeforpicgo.oss-cn-chengdu.aliyuncs.com/study/202309121442263.png)

![image-20230912143937404](https://makeforpicgo.oss-cn-chengdu.aliyuncs.com/study/202309121439688.png)

我们可以利用getRedirectResult，useEffect hook去解决

```jsx
import { getRedirectResult } from "firebase/auth";
import { useEffect } from "react";

```

```jsx
 useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await getRedirectResult(auth);
        console.log(res);
      } catch (error) {
        console.error("Error fetching redirect result:", error);
      }
    };

    fetchData(); // 调用异步函数
  }, []);
```
当状态改变时发生
```javascript
  const onHandleChanged = e => {
    console.log(e.target); //<input id="name" name="displayName" type="text" required="" value="22">
    const { name, value } = e.target;
    console.log(name, value);
    setFormFields({ ...formFields, [name]: value });// 这里采用扩展语法，创建一个新对象，方括号语法[express]，跟表达式：value就是后面的值
    输出就像这样 {displayName: '2'}
    console.log({[name]: value});
  };
// {displayName: '2', email: '23', password: '', confirmPassword: ''}
```
标签里面的值
```javascript
  <label >display name</label>
        <input
          id="name"
          name="displayName"
          type="text"
          onChange={onHandleChanged}
          required
          value={displayName}
        />
```
创建一个对象，赋值
```javascript
const defaultFormField = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};
```
利用useState
```jsx
  const [formFields, setFormFields] = useState(defaultFormField);
const { displayName, email, password, confirmPassword } = formFields; // 解构这个对象
```

formInput component
```jsx
import "./formInput.style.scss";
const FromInput = ({ label, ...otherProps }) => {
  return (
    <div className="form-input__container">
      <input className="form-input__text" {...otherProps} />
      {label && (
        <label
          className={`${
            otherProps.value.length ? "shrink" : ""
          } form-input__label`}
        >
          {label}
        </label>
      )}
    </div>
  );
};
export default FromInput;

```

这里我们用到了，短路操作符

```jsx
{label && (
        <label
          className={`${
            otherProps.value.length ? "shrink" : ""
          } form-input__label`}
        >
          {label}
        </label>
      )}
// 当label为true时，我们就运行右的。
```

我们注意到这里有两个参数，label，还有一个扩展语法组成的参数

当我们父组件调用时

```jsx
    <FromInput
          label="displayName"
          id="name"
          name="displayName"
          type="text"
          onChange={onHandleChanged}
          required
          value={displayName}
        />
```

这里我们可以看到，我们只传递了一些列参数，这样就很方便。

我们也可以把他放在一个object里面

```jsx
<FromInput
          label="displayName"
          inputOptions={{
            id: "name",
            name: "displayName",
            type: "text",
            onChange: onHandleChanged,
            required: true,
            value: displayName,
          }}
        />
```

![image-20230914151623801](https://makeforpicgo.oss-cn-chengdu.aliyuncs.com/study/202309141516082.png)
>>>>>>> jack-study-navigation
