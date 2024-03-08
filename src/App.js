import { Route, Routes } from "react-router-dom";
import HomePage from "./Components/HomePage/HomePage";
import Authetication from "./Components/Authentication/Authentication";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getUserProfile } from "./State/Auth/Action";

function App() {
  const jwt = localStorage.getItem("jwt");
  console.log(jwt);

  const  {auth}  = useSelector((store) => store);
  const dispatch = useDispatch();

  useEffect(() => {
    if (jwt) {
      dispatch(getUserProfile(jwt));
      console.log("user profile..");

      
    }
    console.log(auth.user)
  }, [auth.jwt]);

  return (
    
    <div className="">
      <Routes>
        <Route
          path="/*"
          element={auth.user ? <HomePage /> : <Authetication />}
        ></Route>
      </Routes>
    </div>
  );
}

export default App;
