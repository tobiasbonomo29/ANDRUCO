import React from "react";
import ReactDOM from "react-dom/client";
import { HashRouter, Routes, Route } from "react-router-dom";
import { Provider } from "./state/AppContext";
import { PhoneFrame } from "./components/PhoneFrame";
import Home from "./screens/Home";
import Welcome from "./screens/Welcome";
import Verification from "./screens/Verification";
import Training from "./screens/Training";
import VideoDetail from "./screens/VideoDetail";
import Tactics from "./screens/Tactics";
import Roles from "./screens/Roles";
import Cards from "./screens/Cards";
import CardDetail from "./screens/CardDetail";
import Vote from "./screens/Vote";
import Squad from "./screens/Squad";
import Champions from "./screens/Champions";
import Community from "./screens/Community";
import Chat from "./screens/Chat";
import Notifications from "./screens/Notifications";
import Profile from "./screens/Profile";
import "./styles.css";
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <HashRouter>
      <Provider>
        <PhoneFrame>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/welcome" element={<Welcome />} />
            <Route path="/verify" element={<Verification />} />
            <Route path="/exclusive" element={<Verification exclusive />} />
            <Route path="/training" element={<Training />} />
            <Route path="/training/:id" element={<VideoDetail />} />
            <Route path="/tactics" element={<Tactics />} />
            <Route path="/roles" element={<Roles />} />
            <Route path="/cards" element={<Cards />} />
            <Route path="/cards/:id" element={<CardDetail />} />
            <Route path="/vote" element={<Vote />} />
            <Route path="/squad" element={<Squad />} />
            <Route path="/champions" element={<Champions />} />
            <Route path="/community" element={<Community />} />
            <Route path="/chat" element={<Chat />} />
            <Route path="/notifications" element={<Notifications />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="*" element={<Home />} />
          </Routes>
        </PhoneFrame>
      </Provider>
    </HashRouter>
  </React.StrictMode>,
);
