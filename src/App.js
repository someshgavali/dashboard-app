import "./App.css";
import Sidebar from "./Components/sidebar/Sidebar";
import Topbar from "./Components/topbar/Topbar";
import Home from "./pages/home/Home";
// import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import UserList from "./pages/userList/UserList";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import UserList from "./pages/userList/UserList";
import User from "./pages/user/User";
import NewUser from "./pages/newUser/NewUser";
import ProductList from "./pages/productList/ProductList";
import Product from "./pages/product/Product";
import Newproduct from "./pages/newProduct/Newproduct";

// function App() {
//   return (
//     <Router>
//       <Topbar />
//       <div className="container">
//         <Sidebar />
//         <Switch>
//           <Route exact path="/">
//             <Home />
//           </Route>
//           <Route path="/users">
//             <UserList />
//           </Route>

//            <Route path="/user/:userId">
//             <UserList />
//           </Route>

//         </Switch>
//       </div>
//     </Router>
//   );
// }

// export default App;

function App() {
  return (
    <BrowserRouter>
      <Topbar />
      <div className="container">
        <Sidebar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/users" element={<UserList />} />
          <Route path="/user/:userId" element={<User />} />
          <Route path="/newUser" element={<NewUser />} />
          <Route path="/products" element={<ProductList />} />
          <Route path="/product/:productId" element={<Product />} />
          <Route path="/newproduct" element={<Newproduct />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
