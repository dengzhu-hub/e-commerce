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
firebase
[click here 👍](https://console.firebase.google.com/project/fast-gate-386514/overview)

Firebase 是由 Google 提供的移动应用和 Web 应用开发平台，它提供了一系列工具和服务，用于构建高质量的应用程序。Firebase 提供了多种功能，包括实时数据库、身份认证、云存储、云函数、推送通知、性能监控、分析等。下面是 Firebase 提供的一些主要功能和服务：



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
```
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