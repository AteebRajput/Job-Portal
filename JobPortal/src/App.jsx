import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./component/Login";
import Home from "./component/Home";
import { QueryClient, QueryClientProvider } from "react-query";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase/config";
import { loginSuccess, logoutSuccess } from "./features/userSlice";

const queryClient = new QueryClient();

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is logged in, update Redux state
        dispatch(
          loginSuccess({
            user: user.uid,
            username: user.displayName,
            userProfilePic: user.photoURL,
            email: user.email,
            isLoggedIn: true,
          })
        );
      } else {
        // User is logged out, clear Redux state
        dispatch(logoutSuccess());
      }
    });

    // Cleanup the listener on unmount
    return () => unsubscribe();
  }, [dispatch]);

  return (
    <div className="">
      <BrowserRouter>
        <QueryClientProvider client={queryClient}>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/home" element={<Home />} />
          </Routes>
        </QueryClientProvider>
      </BrowserRouter>
    </div>
  );
};

export default App;
