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

##### Sign in

我们先copy 一份从sign up 

我们继续在sign in创建一个google登陆方法

```jsx
  const signWithGoogle = async () => {
    const { user } = await signInWithGooglePop();
    // console.log(user);
    await createUserDocumentFromAuth(user);
  };
```

我们修改 onHandleSubmit（），try block

```jsx
 try {
      const response = await signInAuthUserWithEmailAndPassword(
        email,
        password
      );
      console.log(response);
      /**
       * clear form input
       */
      resetFormField();
    }
```

catch

```jsx
catch (error) {
      switch (error.code) {
        case "auth/user-not-found":
          alert("👤.user not found, please try again, \u{1F920} ");
          break;
        case "auth/wrong-password":
          alert("🔑.password is incorrect, please try again");
          break;
        default:
          console.log(error);
      }
    }
```

input changed ()

```jsx
  const onHandleChanged = e => {
    console.log(e.target);
    const { name, value } = e.target;
    console.log(name, value);
    setFormFields({ ...formFields, [name]: value });
    console.log({ [name]: value });
  };
```



authen page

```jsx
  return (
    <div className="authentication-container">
      <SignInForm />
      <SignUpForm />
    </div>
  );
```

![image-20230915105443833](https://makeforpicgo.oss-cn-chengdu.aliyuncs.com/study/202309151054306.png)

### useContext

![IMG_1474(20230915-103813)](https://makeforpicgo.oss-cn-chengdu.aliyuncs.com/study/202309151055699.JPG)

Lifting state up

![Diagram with a tree of three components. The parent contains a bubble representing a value highlighted in purple. The value flows down to each of the two children, both highlighted in purple.](https://react.dev/_next/image?url=%2Fimages%2Fdocs%2Fdiagrams%2Fpassing_data_lifting_state.dark.png&w=1920&q=75)

Prop drilling

![Diagram with a tree of ten nodes, each node with two children or less. The root node contains a bubble representing a value highlighted in purple. The value flows down through the two children, each of which pass the value but do not contain it. The left child passes the value down to two children which are both highlighted purple. The right child of the root passes the value through to one of its two children - the right one, which is highlighted purple. That child passed the value through its single child, which passes it down to both of its two children, which are highlighted purple.](https://react.dev/_next/image?url=%2Fimages%2Fdocs%2Fdiagrams%2Fpassing_data_prop_drilling.dark.png&w=1920&q=75)

Using context in close children

![Diagram with a tree of three components. The parent contains a bubble representing a value highlighted in orange which projects down to the two children, each highlighted in orange.](https://react.dev/_next/image?url=%2Fimages%2Fdocs%2Fdiagrams%2Fpassing_data_context_close.dark.png&w=1920&q=75)

Using context in distant children

![Diagram with a tree of ten nodes, each node with two children or less. The root parent node contains a bubble representing a value highlighted in orange. The value projects down directly to four leaves and one intermediate component in the tree, which are all highlighted in orange. None of the other intermediate components are highlighted.](https://react.dev/_next/image?url=%2Fimages%2Fdocs%2Fdiagrams%2Fpassing_data_context_far.dark.png&w=1920&q=75)