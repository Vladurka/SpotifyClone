import { Route, Routes } from "react-router-dom";
import { HomePage } from "./pages/home/HomePage.tsx";
import { AuthCallback } from "./pages/auth-callback/AuthCallback.tsx";
import { ChatPage } from "./pages/chat/ChatPage.tsx";
import { AuthenticateWithRedirectCallback } from "@clerk/clerk-react";
import { MainLayout } from "./layout/MainLayout.tsx";
import { AlbumPage } from "./pages/album/AlbumPage.tsx";
import { AdminPage } from "./pages/admin/AdminPage.tsx";

function App() {
  return (
    <>
      <Routes>
        <Route
          path="/sso-callback"
          element={
            <AuthenticateWithRedirectCallback
              signUpForceRedirectUrl={"/auth-callback"}
            />
          }
        />
        <Route path="/auth-callback" element={<AuthCallback />} />
        <Route path="/admin" element={<AdminPage />} />

        <Route element={<MainLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/chat" element={<ChatPage />} />
          <Route path="/albums/:id" element={<AlbumPage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
