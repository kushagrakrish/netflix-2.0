import React, { useEffect } from "react";
import HomeScreen from "./screens/HomeScreen";
import { Routes, Route } from "react-router-dom";
import "../src/App.css";
import LoginScreen from "./screens/LoginScreen";
import { auth } from "./Firebase";
import { useDispatch, useSelector } from "react-redux";
import { logout, login, selectUser } from "./features/UserSlice";
import ProfileScreen from "./screens/ProfileScreen";

const App = () => {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((userAuth) => {
      if (userAuth) {
        // Logged In
        console.log(userAuth);
        dispatch(
          login({
            uid: userAuth.uid,
            email: userAuth.email,
          })
        );
      } else {
        // LoggedOut
        dispatch(logout());
      }
    });
    return unsubscribe;
  }, [dispatch]);
  return (
    <div className='app'>
      {!user ? (
        <LoginScreen />
      ) : (
        <Routes>
          <Route path='/' element={<HomeScreen />} />
          <Route path='profile' element={<ProfileScreen />} />
        </Routes>
      )}
    </div>
  );
};

export default App;
