import { createRoot } from "react-dom/client";

import App from "./App.tsx";
import UserBalanceProvider from "./providers/UserProvider.tsx";

import "./main.scss";

createRoot(document.getElementById("root")!).render(
  <UserBalanceProvider>
    <App />
  </UserBalanceProvider>,
);
