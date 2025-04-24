import { Route, Routes } from "react-router-dom";
import { HomePage } from "./pages/home/HomePage.tsx";
import { AuthCallback } from "./pages/auth-callback/AuthCallback.tsx";
import { AuthenticateWithRedirectCallback } from "@clerk/clerk-react";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route
          path="/sso-callback"
          element={
            <AuthenticateWithRedirectCallback
              signUpForceRedirectUrl={"/auth-callback"}
            />
          }
        />
        <Route path="/auth-callback" element={<AuthCallback />} />
      </Routes>
    </>
  );
}

export default App;
