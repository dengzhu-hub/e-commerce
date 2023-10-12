



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
<<<<<<< HEAD
>>>>>>> jack-study-navigation
=======

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

useContext, createContext
```javascript
import { createContext, useState } from "react";


```
createContext
```javascript
export const UserContext = createContext({
  currentUser: null,
  setCurrentUser: () => null,
});
```
Provider
```javascript

export const UserProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const value = { currentUser, setCurrentUser };
  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
```
去用我们的context
```javascript
      <UserProvider>
        <App />
      </UserProvider>
```
在我们需要的地方signIn.jsx，用setCurrentUser,存入数据
like this
```javascript
   const { user } = await signInAuthUserWithEmailAndPassword(
        email,
        password
      );
      console.log(user)
      setCurrentUser(user);
  
```
我们在navigation.jsx 使用它

useContext，就是当他的状态发生改变后，他会rerender component，不管有没有使用它

像这里我们在signUp将useContext值，赋值给val变量

```jsx
  const val = useContext(UserContext);
console.log('hit')
```

当我们刷新浏览器，他会被第一次渲染，这是肯定的

![image-20230919104008185](https://makeforpicgo.oss-cn-chengdu.aliyuncs.com/study/202309191040426.png)

​    然后当我们点击signIn按钮时，因为我们在sign使用了

```jsx
   const { user } = await signInAuthUserWithEmailAndPassword(
        email,
        password
      );
      setCurrentUser(user);
```

如果我们触发这个方法，它的值还是null'，当我们点击sign in button后，现在currentUser里面就是user对象了，

所以useContext状态就改变了，所以会再一次渲染，component，所以自然的，console在出现一遍。

usecontext记录login state info

![image-20230919130043209](https://makeforpicgo.oss-cn-chengdu.aliyuncs.com/study/202309191300338.png)

现在我们利用firebase 自带 onAuthStateChanged 去记录login info

```jsx
export const onAuthStateChangedListener =  (callback) => {
  onAuthStateChanged(auth, callback);
};

```

我们就注释掉useContext 的setCurentUser()

![image-20230919130327798](https://makeforpicgo.oss-cn-chengdu.aliyuncs.com/study/202309191303860.png)![image-20230919130342278](https://makeforpicgo.oss-cn-chengdu.aliyuncs.com/study/202309191303331.png)

当我们点击sign In 按钮时，控制台任然输出

![image-20230919130519225](https://makeforpicgo.oss-cn-chengdu.aliyuncs.com/study/202309191305304.png)

这就是firebase自带的api记录，尽管我们刷新页面，他还是会保存在firebase上

<video src="D:\Video\Captures\React App - Google Chrome 2023-09-19 13-06-18.mp4"></video>

![image-20230919130848139](https://makeforpicgo.oss-cn-chengdu.aliyuncs.com/study/202309191308288.png)

signOut api可以取消

##### cart

import svg

````jsx
import { ReactComponent as ShopIcon } from "../../assets/shopping-bag.svg";
````

使用icon

```jsx
  <div className="cart-icon__container" onClick={toggleCartOpen}>
      <ShopIcon className="icon-img" />
      <span className="icon-count">{cartCount}</span>
    </div>
```

设置onclick，去翻转icon,

首先先定义useContext

```jsx
import { createContext, useEffect, useState } from "react";
export const CartContext = createContext({
  isCartOpen: false,
  setIsCartOpen: () => {},})
```

利用hooks将其关联

```jsx
export const CartProvider = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
    const value = {
    isCartOpen,
    setIsCartOpen,
    cartItems,
    addItemToCart,
    cartCount,
  };
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
```

然后在icon中使用

```jsx
  const { isCartOpen, setIsCartOpen, cartCount } = useContext(CartContext);
const toggleCartOpen = () => setIsCartOpen(!isCartOpen);
```

```jsx
 <div className="cart-icon__container" onClick={toggleCartOpen}>
      <ShopIcon className="icon-img" />
      <span className="icon-count">{cartCount}</span>
    </div>
```

效果

![image-20230924091550533](https://makeforpicgo.oss-cn-chengdu.aliyuncs.com/study/202309240915860.png)

![image-20230924091602782](https://makeforpicgo.oss-cn-chengdu.aliyuncs.com/study/202309240916861.png)

#### 现在实现点击shop里面的add to cart，将他添加到cart-dropdown

* new checkout-dropdown

  * ```jsx
      return (
        <div className="cart-dropdown__container">
          <div className="cart-dropdown__items">
            {cartItems.map(item => (
              <CartItem key={item.id} cartItem={item} />
            ))}
          </div>
          <Button onClick = {checkoutHandler}>GO TO CHECKOUT</Button>
        </div>
      );
      
    //cart-item UI
    return (
        <div className="cart-item__container">
          <img src={imageUrl} alt={title} />
          <div  className="item-details">
            <span className="name">{title}</span>
            <span className="price">
              {quantity} x ${price}
            </span>
          </div>
        </div>
      );
    ```

* shop 界面

  * ```jsx
      const { products } = useContext(ProductsContext);
      return (
        <div className="products-card__container">
          {products.map(product => (
            <ProductCard key={product.id} product={product}></ProductCard>
          ))}
        </div>
      );
    ```

* peroduct ui

  * ```jsx
      return (
        <div className="product-card__container">
          <img className="product-card__img" src={imageUrl} alt={title} />
          <div className="product-card__text">
            <span className="product-card__title">{title}</span>
            <span className="product-card__price">{price}</span>
          </div>
          <Button  buttonType="inverted" onClick={addProductToCart}>Add To Cart</Button>
        </div>
      );
    ```

* 如何实现点击按钮，就完成添加，在cartContext完成

  * 添加默认值

    * ```jsx
      export const CartContext = createContext({
        isCartOpen: false,
        setIsCartOpen: () => {},
        cartItems: [],
        addCartItems: () => {},
      ```

  * 创建主题函数实现

    * ```jsx
      const addCartItem = (cartItems, productAddTo) => {
        //find it item contains productToAdd
        const existingCartItem = cartItems.find(item => item.id === productAddTo.id);
        console.log(existingCartItem);
          //我们先寻找，购物车中是否有，添加商品，
      
        // if found , increment  quantity
        if (existingCartItem) {
          return cartItems.map(item =>
            item.id === productAddTo.id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          );
            如果有的话我们就，将数量加1，否则就不动
        }
        // return new array with modified cart items/ new cart items
        return [...cartItems, { ...productAddTo, quantity: 1 }];
          我们就就在购物车创建一件商品
      };
      ```

    * ##### 将函数放进useState的set函数

      * ```jsx
          const addItemToCart = productAddTo => {
            setCartItems(addCartItem(cartItems, productAddTo));
          };
        ```

  * 将useState和context关联

    * ```jsx
       const value = {
          isCartOpen,
          setIsCartOpen,
          cartItems,
          addItemToCart,
          }
      ```

  * 去引用方法

    * ```jsx
        const {addItemToCart} = useContext(CartContext);
        const { title, imageUrl, price } = product;
        const addProductToCart = () => addItemToCart(product);
        <Button  buttonType="inverted" onClick={addProductToCart}>Add To Cart</Button>
        
      ```

##### 效果

<video src="D:\Video\Captures\React App - Google Chrome 2023-09-26 17-04-45.mp4"></video>

* 实现按钮里面的数字也实时更新，添加几件产品进去，我数字就累加

  * ```jsx
     cartCount: 0,
           const [cartCount, setCartCount] = useState(0);
    ```

  * ```jsx
      useEffect(() => {
        const newCartCount = cartItems.reduce(
          (acc, item) => acc + item.quantity,
          0
        );
        setCartCount(newCartCount);
      }, [cartItems]);
    ```

  * ```jsx
      const { isCartOpen, setIsCartOpen, cartCount } = useContext(CartContext);
      
    <span className="icon-count">{cartCount}</span>
    
    ```

<video src="C:\Users\jackdeng\Downloads\无标题视频——使用Clipchamp制作.mp4"></video>

#### checkout page

* checkout 

  * ```jsx
      const { cartItems, cartTotal } = useContext(CartContext);
      console.log(cartItems);
      return (
        <div className="checkout-container">
          <div className="checkout-header">
            <div className="checkout-header__title">
              <span>Product</span>
            </div>
            <div className="checkout-header__title">
              <span>Description</span>
            </div>
            <div className="checkout-header__title">
              <span>Quantity</span>
            </div>
            <div className="checkout-header__title">
              <span>Price</span>
            </div>
            <div className="checkout-header__title">
              <span>Remove</span>
            </div>
          </div>
          {cartItems.map(cartItem => {
            return <CheckoutItem cartItem={cartItem} />;
          })}
          <span className="total-price">
            {cartTotal ? `Total: ￡${cartTotal}` : `total: 0`}
          </span>
        </div>
      );
    ```

* checkout item

  * ```jsx
      return (
        <div className="checkout-item__container">
          <div className="image-box">
            <img src={imageUrl} alt={`${title}`} />
          </div>
          <span className="title">{title}</span> 
          <span className="quantity-container">
           <div onClick={removeItemHandler}>
           <AiOutlineMinusCircle />
           </div>
            <span className="value">{quantity}</span>
           <div onClick={addItemHandler}>
           <AiOutlinePlusCircle />
           </div>
          </span>
          <span className="price">{price}</span>
          <span className="remove-button" onClick={clearItemHandler}>
            &#10005;
          </span>
        </div>
      );
    ```

  * ![image-20230926174830069](https://makeforpicgo.oss-cn-chengdu.aliyuncs.com/study/202309261748416.png)

* 实现点击icon添加quantity或减少，当只剩下1时，再点击就移除

  * addItem,加调用之前写好的

    * ```jsx
      const addCartItem = (cartItems, productAddTo) => {
        //find it item contains productToAdd
        const existingCartItem = cartItems.find(item => item.id === productAddTo.id);
        console.log(existingCartItem);
      
        // if found , increment  quantity
        if (existingCartItem) {
          return cartItems.map(item =>
            item.id === productAddTo.id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          );
        }
        // return new array with modified cart items/ new cart items
        return [...cartItems, { ...productAddTo, quantity: 1 }];
      };
      ```

  * remove item

    * ```jsx
      const removeItemCart = (cartItems, productToRemove) => {
        // find the item to remove
        const isExistingCartItem = cartItems.find(
          cartItem => cartItem.id === productToRemove.id
        );
        // is the item quantity is 1, remove item.
        if (isExistingCartItem.quantity === 1) {
          return cartItems.filter(cartItem => cartItem.id !== productToRemove.id);
        }
        // return back the left cartItem
        return cartItems.map(cartItem =>
          cartItem.id === productToRemove.id
            ? { ...cartItem, quantity: cartItem.quantity - 1 }
            : cartItem
        );
      };
      ```

  * clear item

    * ```jsx
      const clearCartItem = (cartItems, cartItemToClear) =>
        cartItems.filter(cartItem => cartItem.id !== cartItemToClear.id);
      
      ```

* 应用方法

  * ```jsx
       const addItemToCart = productAddTo => {
        setCartItems(addCartItem(cartItems, productAddTo));
      };
     const removeItemFromCart = productAddTo => {
        setCartItems(removeItemCart(cartItems, productAddTo));
      };
      const clearItemFromCart = cartItemToClear => {
        setCartItems(clearCartItem(cartItems, cartItemToClear));
      };
    ```

  * ```jsx
    const clearItemHandler = () => clearItemFromCart(cartItem);
      const addItemHandler = () => addItemToCart(cartItem);
      const removeItemHandler = () => removeItemFromCart(cartItem);
    ```

* total 实现

  * ```jsx
      useEffect(() => {
        const newCartTotal = cartItems.reduce(
          (acc, item) => acc + item.quantity * item.price,
          0
        );
        setCartTotal(newCartTotal);
      }, [cartItems]);
    ```

效果

<video src="D:\Video\Captures\React App - Google Chrome 2023-09-26 17-55-18.mp4"></video>

### STYLE COMPONENTS

```JSX
const Button = styled.a<{ $primary?: boolean; }>`
  --accent-color: white;


  /* This renders the buttons above... Edit me! */
  background: transparent;
  border-radius: 3px;
  border: 1px solid var(--accent-color);
  color: var(--accent-color);
  display: inline-block;
  margin: 0.5rem 1rem;
  padding: 0.5rem 0;
  transition: all 200ms ease-in-out;
  width: 11rem;


  &:hover {
    filter: brightness(0.85);
  }


  &:active {
    filter: brightness(1);
  }


  /* The GitHub button is a primary button
   * edit this to target it specifically! */
  ${props => props.$primary && css`
    background: var(--accent-color);
    color: black;
  `}
```

>>>>>>> origin/jack-study-navigation



# useReducer

`useReducer` is a React Hook that lets you add a [reducer](https://react.dev/learn/extracting-state-logic-into-a-reducer) to your component.

```jsx
const [state, dispatch] = useReducer(reducer, initialArg, init?)
```

#### Parameters 

- `reducer`: The reducer function that specifies how the state gets updated. It must be pure, should take the state and action as arguments, and should return the next state. State and action can be of any types.
- `initialArg`: The value from which the initial state is calculated. It can be a value of any type. How the initial state is calculated from it depends on the next `init` argument.
- **optional** `init`: The initializer function that should return the initial state. If it’s not specified, the initial state is set to `initialArg`. Otherwise, the initial state is set to the result of calling `init(initialArg)`.

#### Returns 

`useReducer` returns an array with exactly two values:

1. The current state. During the first render, it’s set to `init(initialArg)` or `initialArg` (if there’s no `init`).
2. The [`dispatch` function](https://react.dev/reference/react/useReducer#dispatch) that lets you update the state to a different value and trigger a re-render.

## Comparing `useState` and `useReducer` 

Reducers are not without downsides! Here’s a few ways you can compare them:

- **Code size:** Generally, with `useState` you have to write less code upfront. With `useReducer`, you have to write both a reducer function *and* dispatch actions. However, `useReducer` can help cut down on the code if many event handlers modify state in a similar way.
- **Readability:** `useState` is very easy to read when the state updates are simple. When they get more complex, they can bloat your component’s code and make it difficult to scan. In this case, `useReducer` lets you cleanly separate the *how* of update logic from the *what happened* of event handlers.
- **Debugging:** When you have a bug with `useState`, it can be difficult to tell *where* the state was set incorrectly, and *why*. With `useReducer`, you can add a console log into your reducer to see every state update, and *why* it happened (due to which `action`). If each `action` is correct, you’ll know that the mistake is in the reducer logic itself. However, you have to step through more code than with `useState`.
- **Testing:** A reducer is a pure function that doesn’t depend on your component. This means that you can export and test it separately in isolation. While generally it’s best to test components in a more realistic environment, for complex state update logic it can be useful to assert that your reducer returns a particular state for a particular initial state and action.
- **Personal preference:** Some people like reducers, others don’t. That’s okay. It’s a matter of preference. You can always convert between `useState` and `useReducer` back and forth: they are equivalent!

We recommend using a reducer if you often encounter bugs due to incorrect state updates in some component, and want to introduce more structure to its code. You don’t have to use reducers for everything: feel free to mix and match! You can even `useState` and `useReducer` in the same component.

![image-20231004110918140](https://makeforpicgo.oss-cn-chengdu.aliyuncs.com/study/202310041109514.png)

![image-20231004193234982](https://makeforpicgo.oss-cn-chengdu.aliyuncs.com/study/202310041932383.png)

![image-20231005110213818](https://makeforpicgo.oss-cn-chengdu.aliyuncs.com/study/202310051102105.png)

e.g

```jsx
function handleClick() {
  dispatch({ type: 'incremented_age' });
```



```jsx
import { useReducer } from 'react';

function reducer(state, action) {
  if (action.type === 'incremented_age') {
    return {
      age: state.age + 1
    };
  }
  throw Error('Unknown action.');
}

export default function Counter() {
  const [state, dispatch] = useReducer(reducer, { age: 42 });

  return (
    <>
      <button onClick={() => {
        dispatch({ type: 'incremented_age' })
      }}>
        Increment age
      </button>
      <p>Hello! You are {state.age}.</p>
    </>
  );
}

```

 Updating arrays without mutation 

In JavaScript, arrays are just another kind of object. [Like with objects](https://react.dev/learn/updating-objects-in-state), **you should treat arrays in React state as read-only.** This means that you shouldn’t reassign items inside an array like `arr[0] = 'bird'`, and you also shouldn’t use methods that mutate the array, such as `push()` and `pop()`.

Instead, every time you want to update an array, you’ll want to pass a *new* array to your state setting function. To do that, you can create a new array from the original array in your state by calling its non-mutating methods like `filter()` and `map()`. Then you can set your state to the resulting new array.

Here is a reference table of common array operations. When dealing with arrays inside React state, you will need to avoid the methods in the left column, and instead prefer the methods in the right column:

| avoid (mutates the array) | prefer (returns a new array)        |                                                              |
| ------------------------- | ----------------------------------- | ------------------------------------------------------------ |
| adding                    | `push`, `unshift`                   | `concat`, `[...arr]` spread syntax ([example](https://react.dev/learn/updating-arrays-in-state#adding-to-an-array)) |
| removing                  | `pop`, `shift`, `splice`            | `filter`, `slice` ([example](https://react.dev/learn/updating-arrays-in-state#removing-from-an-array)) |
| replacing                 | `splice`, `arr[i] = ...` assignment | `map` ([example](https://react.dev/learn/updating-arrays-in-state#replacing-items-in-an-array)) |
| sorting                   | `reverse`, `sort`                   | copy the array first ([example](https://react.dev/learn/updating-arrays-in-state#making-other-changes-to-an-array)) |

![image-20231006135057983](https://makeforpicgo.oss-cn-chengdu.aliyuncs.com/study/202310061350746.png)

![image-20231006135151115](https://makeforpicgo.oss-cn-chengdu.aliyuncs.com/study/202310061351697.png)

![image-20231006135220657](https://makeforpicgo.oss-cn-chengdu.aliyuncs.com/study/202310061352057.png)

![image-20231008150149755](https://makeforpicgo.oss-cn-chengdu.aliyuncs.com/study/202310081502290.png)

![image-20231009103421967](https://makeforpicgo.oss-cn-chengdu.aliyuncs.com/study/202310091034106.png)

![image-20231009103500278](https://makeforpicgo.oss-cn-chengdu.aliyuncs.com/study/202310091035353.png)

![image-20231009103532838](https://makeforpicgo.oss-cn-chengdu.aliyuncs.com/study/202310091035129.png)

### accessbility and flow of data

pasas every single reducer

like this:

>
>
>```jsx
>const initialValue = {
>  currentUser: null,
>};
>const USER_ACTION_TYPE = {
>  SET_CURRENT_USER: "SET_CURRENT_USER",
>  increment: "increment",
>};
>
>export const userReducer = (state = USER_ACTION_TYPE, action) => {
>  const { type, payload } = action;
>  switch (type) {
>    case USER_ACTION_TYPE.SET_CURRENT_USER:
>      return {
>        ...state,
>        currentUser: payload,
>      };
>    case "increment":
>      return {
>        currentUser: state.currentUser + 1,
>      };
>    default:
>      return state;
>  }
>};
>
>```
>
>root-reducer.jsx
>
>```jsx
>import { combineReducers } from "redux";
>import { userReducer } from "./user.reducer";
>export const rootReducer = combineReducers({
>  user: userReducer,
>});
>
>```
>
>this is redux how to work.

store

```jsx
import { compose, createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import { rootReducer } from "./root-reducer";
const midlewares = [logger];
const composeMiddleware = compose(applyMiddleware(...midlewares));
//rooter-reducer
export const store = createStore(rootReducer, undefined, midlewares);

```

将root-reducer导入到store，利用createStore创建一个store

index.js

```jsx
import { Provider } from "react-redux";
<Provider store={store}>
      <BrowserRouter>
        <UserProvider>
          <ProductsProvider>
            <CartProvider>
              <App />
            </CartProvider>
          </ProductsProvider>
        </UserProvider>
      </BrowserRouter>
    </Provider>
```

我们在index.js使用react-redux，将redux与我们的app关联起来

