import { Router } from "./router/Router";
import "./styles.css";
import React, { UserProvider } from "./providers/UserProvider";

export default function App() {
  return (
    <UserProvider>
      <Router />
    </UserProvider>
  );
}
